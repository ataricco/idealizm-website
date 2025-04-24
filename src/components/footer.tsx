"use client";
import React from "react";
import { useLandingPageFinal } from "@/contexts/LandingPageContext";

export default function Footer() {
  const { final } = useLandingPageFinal();

  return (
    final && (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Idealizm. All rights reserved.
          </p>
        </div>
      </footer>
    )
  );
}
