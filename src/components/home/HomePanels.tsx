"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CaptionedMedia from "@/components/CaptionedMedia";

type Panel = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  imageFirst?: boolean;
};

const PANELS: Panel[] = [
  {
    title: "Street Smarts - What you don't see",
    description:
      "We provide interactive workshops for sighted individuals to better understand the experiences of visually impaired people, fostering a more inclusive community.",
    href: "/consult",
    imageSrc: "/LizStreetCrossing.jpg",
    imageAlt: "Crossing at a busy intersection",
    caption: "Crossing at a busy intersection",
  },
  {
    title: "Collaborate - Senses & Sensitivity",
    description:
      "Liz M will inform and educate you, your agency, your organization, and supply you with her unique analysis.",
    href: "/collaborate",
    imageSrc: "/HuntingtonAveTraining.JPG",
    imageAlt: "A city walk guided by an ambassador",
    caption: "A city walk guided by an ambassador",
    imageFirst: true,
  },
  {
    title: "Community Building - Interactive",
    description:
      "Explore the many initiatives, including WalkFit, White Cane Day, and TalkFit.",
    href: "/commingle",
    imageSrc: "/BusinessImprovementDistrictGroup.jpg",
    imageAlt: "Business Improvement District Group",
    caption: "Partnering with business improvement district",
  },
];

export default function HomePanels() {
  const router = useRouter();

  return (
    <div>
      {PANELS.map((panel) => {
        const imageClasses = panel.imageFirst
          ? "lg:w-1/2 flex justify-center order-2 lg:order-1"
          : "lg:w-1/2 flex justify-center";

        const textClasses = panel.imageFirst
          ? "lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6 py-12 lg:px-24 order-1 lg:order-2"
          : "lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6 py-12 lg:px-24";

        return (
          <section
            key={panel.href}
            className="flex flex-col-reverse lg:flex-row items-center justify-between bg-surfaceCream"
          >
            <div className={textClasses}>
              <h2 className="text-4xl font-bold text-blueText mb-4">{panel.title}</h2>
              <p className="text-blueText text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                {panel.description}
              </p>
              <button
                className="mt-6 px-6 py-3 rounded-full bg-accentYellow text-white font-semibold shadow hover:bg-accentYellowHover transition"
                onClick={() => router.push(panel.href)}
              >
                Learn More
              </button>
            </div>

            <div className={imageClasses}>
              <CaptionedMedia
                caption={panel.caption}
                media={
                  <Image
                    src={panel.imageSrc}
                    alt={panel.imageAlt}
                    width={900}
                    height={650}
                    className="max-w-full shadow-lg"
                    priority={panel.href === "/consult"}
                  />
                }
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}


