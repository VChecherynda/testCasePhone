import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    let event = null;

    try {
      event = stripe.webhooks.constructEvent(
        Buffer.from(body, "utf-8"),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!,
      );
    } catch (err) {
      let errorMessage = "Unknown error occurred";

      // Type narrowing for `err`
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "string") {
        errorMessage = err; // If it's a string
      } else if (typeof err === "object" && err !== null) {
        errorMessage = JSON.stringify(err); // Try to stringify object errors
      }

      console.error("Error constructing Stripe event:", err);

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
        await db.order.update({
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

      return NextResponse.json({ result: event, ok: true });
    }
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
