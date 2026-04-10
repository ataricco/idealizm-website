import type { Metadata } from "next";
import StickyNavbar from "@/components/stickyNavbar";
import FooterWrapper from "@/components/footerWrapper";
import AOSInit from "@/components/AOSInit";
import { LandingPageProvider } from "@/contexts/LandingPageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idealizm",
  description: "See the world differently",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`antialiased`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-md"
        >
          Skip to main content
        </a>
        <AOSInit /> {/* Safely initialize AOS here */}
        <LandingPageProvider>
          <StickyNavbar />
          <main id="main-content">
            {children}
          </main>
          <FooterWrapper />
        </LandingPageProvider>
      </body>
    </html>
  );
}
