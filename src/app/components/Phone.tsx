import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false }: PhoneProps) => {
  return (
    <div className={cn("pointer-events-none relative z-50", className)}>
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone_image"
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute inset-0 -z-10">
        <img
          src={imgSrc}
          alt="overlaying_phone_image"
          className="min-h-full min-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Phone;
