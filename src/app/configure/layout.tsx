import React, { ReactNode } from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Steps from "@/app/components/Steps";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
