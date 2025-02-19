import React from "react";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="z-0 flex flex-col items-center justify-center h-screen text-foreground bg-background">
        <h1 className="text-5xl">Hello World!</h1>
      </div>
    </>
  );
}
