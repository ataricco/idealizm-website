import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import StickyNavbar from "@/components/stickyNavbar";
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
    
    <html lang="en">
      <body className={`antialiased`}>
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
