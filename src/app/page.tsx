import { Check, Star } from "lucide-react";
import Image from "next/image";

import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Phone from "./components/Phone";
import Reviews from "./components/Reviews";
import { Icons } from "./components/Icons";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absoluter -top-20 left-0 hidden w-28 lg:block">
                <Image
                  width="128"
                  height="128"
                  src="/snake-1.png"
                  alt="snake"
                  className="h-32 w-32"
                />
              </div>
              <h1 className="tracking-right relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>
                Phone case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Capture your own memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allow you to protect your memories, not just your
                phone case
              </p>

              <ul className="text-align left mt-8 flex flex-col items-center space-y-2 font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user_image"
                  />
                  <img
                    className="inline-block h-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user_image"
                  />
                  <img
                    className="inline-block h-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user_image"
                  />
                  <img
                    className="inline-block h-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user_image"
                  />
                  <img
                    className="inline-block h-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user_image"
                  />
                </div>

                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span>
                    happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <Image
                width="256"
                height="256"
                src="/your-image.png"
                alt="your_image"
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                customers
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-600 sm:block" />
              </span>
              say
            </h2>
            <Image
              width="96"
              height="96"
              src="/snake-2.png"
              alt="snake"
              className="order-0 w-24 lg:order-2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="5 mb-2 flex gap-0">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>

              <div>
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for two and a hald months and{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks.&quot;
                </p>
              </div>

              <div className="mt-2 flex gap-4">
                <Image
                  width="48"
                  height="48"
                  src="/users/user-1.png"
                  alt="user"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="5 flex items-center gap-1 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchaze</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="5 mb-2 flex gap-0">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>

              <div>
                <p>
                  &quot;I usuallu keep my phone together with my keys in my
                  pocket and that let to some heave scratchmarks
                </p>
              </div>

              <div className="mt-2 flex gap-4">
                <Image
                  width="48"
                  height="48"
                  src="/users/user-2.png"
                  alt="user"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="flex flex-col">
                  <p className="font-semibold">Jasmine</p>
                  <div className="5 flex items-center gap-1 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchaze</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                Upload your photo and get
                <span className="relative bg-green-600 px-2 text-white">
                  your own case
                </span>
                now
              </h2>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
