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
    <html lang="en" suppressHydrationWarning={true}>
      {" "}
      {/* suppresses hydration warnings that can be caused by certain extensions (doesn't affect functionality)*/}
      <body suppressHydrationWarning className={`antialiased`}>
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
