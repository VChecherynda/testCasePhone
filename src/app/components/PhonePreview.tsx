"use client";

import React, { useEffect, useRef, useState } from "react";
import { CaseColor } from "@prisma/client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { cn } from "@/lib/utils";

const PhonePreview = ({
  croppedImgUrl,
  color,
}: {
  croppedImgUrl: string;
  color: CaseColor;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [renderDimenssions, setRenderedDimenssions] = useState({
    height: 0,
    width: 0,
  });

  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setRenderedDimenssions({ width, height });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current]);

  let caseBackgroundColor = "bg-zinc-950";
  if (color === "blue") caseBackgroundColor = "bg-blue-950";
  if (color === "rose") caseBackgroundColor = "bg-rose-950";

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relatice">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderDimenssions.width / 2 -
            renderDimenssions.width / (1216 / 121),
          top: renderDimenssions.height / 6.22,
        }}
      >
        <img
          width={renderDimenssions.width / (3000 / 637)}
          src={croppedImgUrl}
          alt="cropped_image"
          className={cn(
            "phone-skew rounded=b-[10px] relative z-20 rounded-t-[15px] md:rounded-t-[30px]",
            caseBackgroundColor,
          )}
        />
      </div>

      <div className="relative z-40 h-full w-full">
        <img
          src="/clearphone.png"
          alt="phone"
          className="pointer-events-none h-full w-full antialiased"
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;
