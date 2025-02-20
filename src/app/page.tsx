"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";

export default function Home() {
  const [zoom, setZoom] = useState(200);
  const [translateX, setTranslateX] = useState(75);
  const [translateY, setTranslateY] = useState(55);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    // Sets the zoom level to be between 100% and 200% depending on the scroll direction
    // Sets the translate level to be between 0% and 75% depending on the scroll direction
    setZoom((prev) => Math.max(100, Math.min(200, prev - event.deltaY * 0.05)));
    setTranslateX((prev) =>
      Math.max(0, Math.min(75, prev - event.deltaY * 0.02))
    );
    setTranslateY((prev) =>
      Math.max(0, Math.min(55, prev - event.deltaY * 0.02))
    );
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="z-0 flex flex-col items-center justify-center h-screen text-foreground bg-background"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: `${zoom}%`,
          backgroundPosition: `${translateX}% center`,
          backgroundRepeat: "no-repeat",
          transition:
            "background-size 0.01s ease-in-out, background-position 0.01s ease-in-out",
        }}
      ></div>
    </>
  );
}
