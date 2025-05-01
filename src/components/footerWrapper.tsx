// src/components/FooterWrapper.tsx
"use client";

import { useDeviceType } from "@/Hooks/useDeviceType";
import Footer from "./footer";

export default function FooterWrapper() {
  const deviceType = useDeviceType();
  return <Footer deviceType={deviceType} />;
}
