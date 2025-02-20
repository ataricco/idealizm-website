"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [zoom, setZoom] = useState(200);
  const [translateX, setTranslateX] = useState(75);
  const [final, setFinal] = useState(false);

  const handleWheel = (event: WheelEvent) => {
    // Sets the zoom level to be between 100% and 200% depending on the scroll direction
    // Sets the translate level to be between 0% and 75% depending on the scroll direction
    setZoom((prev) => Math.max(100, Math.min(200, prev - event.deltaY * 0.05)));
    setTranslateX((prev) =>
      Math.max(50, Math.min(75, prev - event.deltaY * 0.02))
    );
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    console.log(zoom, translateX);
    if (zoom == 100 && translateX == 50) {
      setFinal(true);
    } else {
      setFinal(false);
    }
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [zoom, translateX]);

  const afterContent = (
    <div
      className="z-10 absolute top-28 left-10 text-6xl text-foreground text-white space-y-6"
      style={{
        opacity: final ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: final ? "auto" : "none",
      }}
    >
      <h1 className="underline underline-offset-[20px]">Liz Myska</h1>
      <div className="space-y-2">
        <h2 className="text-3xl">Accesibility Analyst</h2>
        <h2 className="text-3xl">On-Site Trainings for the Sighted</h2>
      </div>
    </div>
  );

  return (
    <>
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
      />
      <div
        className="z-10 absolute top-1/4 left-3/4 text-7xl text-foreground text-white"
        style={{
          opacity: final ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <h1>See the bigger picture</h1>
      </div>
      {!final && (
        <div className="z-10 absolute w-28 h-28 bottom-10 left-1/2 text-foreground text-white animate-bounce">
          <img
            className="w-full h-full object-contain"
            src="down.svg"
            alt="down arrow"
          />
        </div>
      )}
      {afterContent}
    </>
  );
}
