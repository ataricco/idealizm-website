import type { Metadata } from "next";
import StickyNavbar from "@/components/stickyNavbar";
import Footer from "@/components/footer";
import { LandingPageProvider } from "@/contexts/LandingPageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idealizm",
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
        <LandingPageProvider>
          <StickyNavbar />
          {children}
          <Footer />
        </LandingPageProvider>
      </body>
    </html>
  );
}
