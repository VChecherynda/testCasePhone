import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "@/components/ui/button";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className="absolute z-[999]">
      <DialogHeader>
        <div className="relative mx-auto mb-2 h-24 w-24">
          <Image
            fill
            src="/snake-1.png"
            alt="snake_image"
            className="object-contain"
          />
        </div>

        <DialogTitle className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Log in to continue
        </DialogTitle>

        <DialogDescription className="py-2 text-center text-base">
          <span className="font-medium text-zinc-900">
            Your configuration was saved!
          </span>{" "}
          Please login or create an account to complete your purchase.
        </DialogDescription>
      </DialogHeader>

      <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
        <LoginLink className={buttonVariants({ variant: "outline" })}>
          Login
        </LoginLink>
        <RegisterLink className={buttonVariants({ variant: "default" })}>
          Sign up
        </RegisterLink>
      </div>
    </DialogContent>
  </Dialog>
);

export default LoginModal;
