import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "TradeSecurix | Secure Trade Document Verification",
  description: "Detect fraud risks in trade documents and verify global partners before sending money.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <ClerkProvider afterSignOutUrl="/">
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
