"use client";
import { useEffect, useState } from "react";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    const checkDevice = () => {
      setDeviceType(window.innerWidth < 768 ? "mobile" : "desktop");
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return deviceType;
}
