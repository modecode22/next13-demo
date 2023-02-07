"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import {QueryClientProvider , QueryClient} from "react-query"

const queryClient = new QueryClient();

function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Providers;
