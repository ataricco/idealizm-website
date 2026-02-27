"use client";

import Image from "next/image";
import React from "react";

type CredentialItem = {
  id: string;
  title: string;
  roles: string[];
  image?: string;
};

const credentialItems: CredentialItem[] = [
  {
    id: "massachusetts",
    title: "Commonwealth of Massachusetts",
    roles: [
      "Board Member of the Massachusetts Architectural Access Board (MAAB)",
      "Designee of the Executive Office of Economic Development (2020)",
    ],
    image: "/MassachusettsSeal.svg",
  },
  {
    id: "worcester",
    title: "City of Worcester",
    roles: [
      "Vice Chairperson of the City of Worcester Accessibility Advisory Commission (AAC) (2013)",
    ],
    image: "/WorcesterSeal.png",
  },
  {
    id: "attorney",
    title: "Attorney at Law",
    roles: ["Licensed and Practicing Attorney at Law in the Commonwealth of Massachusetts (1984)"],
  },
  {
    id: "elder-law",
    title: "Master of Laws (LLM)",
    roles: ["Master of Laws (LLM) in Elder Law and Estate Planning (2013)"],
  },
  {
    id: "connecting-the-dots",
    title: "Connecting the Dots",
    roles: ["Television Host of Connecting the Dots, a non-traditional legal program focused on interdisplinary approaches to legal issues"],
    image: "/WCCATV.jpg"
  },
  {
    id: "visions-consulting",
    title: "Visions Consulting LLC",
    roles: ["Founder and Creator of Visions Consulting LLC in 2016"],
  },
];

export default function HomeFooter() {
  return (
    <footer className="bg-footerBg text-white py-10">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 text-center space-y-3">
          <h1 className="text-4xl font-semibold sm:text-5xl">Liz Myska</h1>
          <h2 className="text-xl sm:text-2xl">Accessibility Analyst</h2>
        </div>

        <ul className="home-credential-track grid grid-cols-6 gap-4 pb-2 list-none p-0 m-0" role="list">
          {credentialItems.map((item) => (
            <li key={item.id} className="list-none">
              <article
                className="home-credential-card group relative flex flex-col items-center text-center"
                tabIndex={0}
                aria-labelledby={`${item.id}-title`}
                aria-describedby={`${item.id}-details`}
              >
                <div className="home-credential-slot relative h-24 w-24 overflow-hidden rounded-md border-2 border-dashed border-white/70 bg-white/10 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={`${item.title} icon`}
                      fill
                      sizes="128px"
                      className="object-contain p-2"
                    />
                  )}
                </div>

                <h3 id={`${item.id}-title`} className="mt-3 text-sm font-semibold leading-snug sm:text-base">{item.title}</h3>

                <div id={`${item.id}-details`} className="home-credential-details rounded-md border border-white/25 bg-black/55 p-3 text-sm leading-relaxed">
                  {item.roles.map((role) => (
                    <p key={role}>{role}</p>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm">
          &copy; {new Date().getFullYear()} IdeaLizm. All rights reserved.
        </p>
      </div>

      <style jsx global>{`
        .home-credential-details {
          position: absolute;
          top: -0.5rem;
          left: 50%;
          width: min(15rem, 85vw);
          transform: translate(-50%, 6px) scale(0.98);
          pointer-events: none;
          z-index: 20;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease;
        }

        .home-credential-card:hover .home-credential-details,
        .home-credential-card:focus-within .home-credential-details {
          max-height: 14rem;
          opacity: 1;
          transform: translate(-50%, 0) scale(1);
        }

        .high-contrast .home-credential-slot {
          background: transparent;
          border-color: #ffffff;
        }

        .high-contrast .home-credential-details {
          position: static;
          width: 100%;
          margin-top: 0.75rem;
          display: block;
          max-height: none;
          opacity: 1;
          transform: none;
          pointer-events: auto;
          border-color: #ffffff;
          background: #000000;
        }

        .high-contrast .home-credential-card:hover .home-credential-details,
        .high-contrast .home-credential-card:focus-within .home-credential-details {
          transform: none;
          max-height: none;
        }
      `}</style>
    </footer>
  );
}


