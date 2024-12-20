import OrderReceivedEmail from "@/components/emails/OrderReceivedEmail";
import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!body) {
      return new Response("Invalid body", { status: 400 });
    }

    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    let event = null;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!,
      );
    } catch (err) {
      return NextResponse.json(
        {
          message: "Problem with create event",
          err: err,
          ok: false,
        },
        {
          status: 500,
        },
      );
    }

    if (event && event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details?.email) {
        throw new Error("Missing user email");
      }

      const session = event.data.object as Stripe.Checkout.Session;

      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      };

      if (!userId || !orderId) {
        throw new Error("Invalid request metadata");
      }

      const billingAddress = session.customer_details!.address;
      // @ts-expect-error:next-line
      const shippingAddress = session.shipping!.address;

      try {
        const updatedOrder = await db.order.update({
          where: {
            id: orderId,
          },
          data: {
            isPaid: true,
            ShippingAddress: {
              create: {
                name: session.customer_details!.name!,
                city: shippingAddress!.city!,
                country: shippingAddress!.country!,
                postalCode: shippingAddress!.postal_code!,
                street: shippingAddress!.line1!,
                state: shippingAddress!.state!,
              },
            },
            BillingAddress: {
              create: {
                name: session.customer_details!.name!,
                city: billingAddress!.city!,
                country: billingAddress!.country!,
                postalCode: billingAddress!.postal_code!,
                street: billingAddress!.line1!,
                state: billingAddress!.state!,
              },
            },
          },
        });

        await resend.emails.send({
          from: "CaseCobraTestCase <vadosevich@gmail.com>",
          to: [event.data.object.customer_details.email],
          subject: "Thank for your order!",
          react: OrderReceivedEmail({
            orderId,
            orderDate: updatedOrder?.createdAt.toLocaleDateString(),
            // @ts-expect-error:next-line
            ShippingAddress: {
              name: session.customer_details!.name!,
              city: shippingAddress!.city!,
              country: shippingAddress!.country!,
              postalCode: shippingAddress!.postal_code!,
              street: shippingAddress!.line1!,
              state: shippingAddress!.state!,
            },
          }),
        });
      } catch (err) {
        return NextResponse.json(
          {
            message: "Problem with update db",
            err: err,
            ok: false,
          },
          {
            status: 500,
          },
        );
      }
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        message: "Something went wrong",
        err: err,
        ok: false,
      },
      {
        status: 500,
      },
    );
  }
}
