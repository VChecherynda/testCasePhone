"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const client = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <KindeProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </KindeProvider>
  );
};

export default Providers;
