import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "TradeSecurix | Trade Risk & Document Intelligence",
  description: "Review counterparties and trade documents, surface inconsistencies, and assess transaction risk before money or goods move.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <ClerkProvider>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
