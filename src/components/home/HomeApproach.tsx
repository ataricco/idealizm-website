"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const APPROACH_POINTS = [
  "Advocacy-centered approach to accessibility",
  "Community-led and impact-driven programs",
  "Customized guidance for diverse audiences",
  "Empowering people through practical tools and training",
  "Collaborate with individuals to build enduring relationships",
] as const;

export default function HomeApproach() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center gap-24 p-8 bg-white">
        <div className="w-full sm:w-96 md:w-auto max-w-sm aspect-[3/4] overflow-hidden rounded-full">
          <Image
            src="/LizMyskaProfile.jpeg"
            alt="Profile Picture of Liz Myska"
            width={600}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="max-w-3xl py-6 px-4 text-left">
          <h2 className="text-3xl font-bold text-blueText mb-6">Our Approach in Action</h2>
          <ul className="space-y-4">
            {APPROACH_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <CheckCircle className="text-amber-600 w-6 h-6 mt-1" />
                <span className="text-lg text-blueText leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


