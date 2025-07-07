import type { Metadata } from "next";
import StickyNavbar from "@/components/stickyNavbar";
import FooterWrapper from "@/components/footerWrapper";
import AOSInit from "@/components/AOSInit";
import { LandingPageProvider } from "@/contexts/LandingPageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "IdeaLizm",
  description: "See the world differently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`antialiased`}>
        <AOSInit /> {/* Safely initialize AOS here */}
        <LandingPageProvider>
          <StickyNavbar />
          {children}
          <FooterWrapper />
        </LandingPageProvider>
      </body>
    </html>
  );
}
