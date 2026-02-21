"use client";

import React from "react";

export default function HomeFooter() {
  return (
    <footer className="bg-footerBg text-white py-4">
      <div className="text-center text-6xl text-foreground text-white space-y-6 bg-footerBg p-12">
        <h1 className="underline underline-offset-[20px]">Liz Myska</h1>
        <div className="space-y-2">
          <h2 className="text-3xl">Accessibility Analyst</h2>
        </div>
      </div>
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} IdeaLizm. All rights reserved.
      </p>
    </footer>
  );
}


