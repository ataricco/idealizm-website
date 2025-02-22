"use client";
import React from "react";
import { useState, useEffect } from "react";
import PillButton from "@/components/pillButton";

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
      style={{
        opacity: final ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        // pointerEvents property is used to prevent the user from interacting with the content until they scroll down
        pointerEvents: final ? "auto" : "none",
      }}
    >
      <div className="z-10 absolute top-32 left-10 text-6xl text-foreground text-white space-y-6 bg-slate-900 bg-opacity-60 rounded-lg p-5">
        <h1 className="underline underline-offset-[20px]">Liz Myska</h1>
        <div className="space-y-2">
          <h2 className="text-3xl">Accesibility Analyst</h2>
          <h2 className="text-3xl">On-Site Trainings for the Sighted</h2>
        </div>
      </div>
      <div className="flex flex-row space-x-5 absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <PillButton colorIndex={0}>
          <p className="p-3 mt-1 text-xl font-bold">Contact Me</p>
        </PillButton>
        <PillButton colorIndex={0}>
          <p className="p-3 mt-1 text-xl font-bold">About Me</p>
        </PillButton>
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
        <div className="z-10 absolute w-28 h-28 bottom-10 text-foreground text-white animate-bounce left-1/2">
          <img
            className="w-full h-full object-contain transform -translate-x-1/2"
            src="down.svg"
            alt="down arrow"
          />
        </div>
      )}
      {afterContent}
    </>
  );
}
