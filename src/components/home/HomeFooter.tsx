"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    image: "/credImgs/MassachusettsSeal.png",
  },
  {
    id: "worcester",
    title: "City of Worcester",
    roles: [
      "Vice Chairperson of the City of Worcester Accessibility Advisory Commission (AAC) (2013)",
    ],
    image: "/credImgs/WorcesterSeal.png",
  },
  {
    id: "attorney",
    title: "Attorney at Law and Master of Laws in Elder Law and Estate Planning",
    roles: [
      "Licensed and Practicing Attorney at Law in the Commonwealth of Massachusetts (1984)",
      "Master of Laws (LLM) in Elder Law and Estate Planning (2013)"
    ],
    image: "/credImgs/ScalesOfJustice.png",
  },
  {
    id: "connecting-the-dots",
    title: "Connecting the Dots",
    roles: [
      "Television Host of Connecting the Dots, a non-traditional legal program focused on interdisciplinary approaches to legal issues"
    ],
    image: "/credImgs/WCCATV.png"
  },
  {
    id: "visions-consulting",
    title: "Visions Consulting LLC",
    roles: ["Founder and Creator of Visions Consulting LLC in 2016"],
    image: "/credImgs/VClogo.png"
  },
];

export default function HomeFooter() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const updateHighContrast = () => {
      setIsHighContrast(root.classList.contains("high-contrast"));
    };

    updateHighContrast();

    const mutationObserver = new MutationObserver(updateHighContrast);
    mutationObserver.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const checkViewport = () => {
      setIsCompactViewport(window.innerWidth < 1024);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  const useCarousel = isCompactViewport && !isHighContrast;

  const carouselResponsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CredentialDot = ({
    onClick,
    active,
  }: {
    onClick?: () => void;
    active?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`h-2.5 w-2.5 rounded-full border transition ${
        active ? "border-white bg-white" : "border-white/80 bg-transparent"
      }`}
      aria-label="Credential slide selector"
    />
  );

  const CredentialArrow = ({
    onClick,
    direction,
  }: {
    onClick?: () => void;
    direction: "left" | "right";
  }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous credentials" : "Next credentials"}
      className={`absolute bottom-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/90 bg-black/60 text-2xl font-bold leading-none text-white transition hover:bg-black/80 ${
        direction === "left" ? "left-[calc(50%-6.5rem)]" : "right-[calc(50%-6.5rem)]"
      }`}
    >
      <svg
        className="h-6 w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <path d="M15 6L9 12l6 6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </button>
  );

  return (
    <footer className="bg-footerBg text-white py-10">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 text-center space-y-3">
          <h1 className="text-4xl font-semibold sm:text-5xl">Liz Myska</h1>
          <h2 className="text-xl sm:text-2xl">Accessibility Analyst</h2>
        </div>

        {isHighContrast ? (
          <ul className="space-y-4 pb-4" role="list">
            {credentialItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <li key={item.id} className="list-none">
                  <div className="border border-white/70 bg-black/80 rounded-md">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-details`}
                    >
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white bg-white p-1.5">
                            <div className="relative h-full w-full">
                              <Image
                                src={item.image}
                                alt={`${item.title} icon`}
                                fill
                                sizes="40px"
                                className="object-contain"
                              />
                            </div>
                          </div>
                        )}
                        <span
                          id={`${item.id}-title`}
                          className="font-semibold text-sm sm:text-base"
                        >
                          {item.title}
                        </span>
                      </div>
                      <span aria-hidden="true" className="ml-2">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      id={`${item.id}-details`}
                      className={`px-4 pb-4 text-sm leading-relaxed ${isOpen ? "block" : "hidden"}`}
                    >
                      {item.roles.map((role) => (
                        <p key={role}>{role}</p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : useCarousel ? (
          <Carousel
            swipeable
            draggable
            responsive={carouselResponsive}
            ssr
            infinite={false}
            autoPlay={false}
            keyBoardControl
            showDots
            arrows
            customDot={<CredentialDot />}
            customLeftArrow={<CredentialArrow direction="left" />}
            customRightArrow={<CredentialArrow direction="right" />}
            dotListClass="!bottom-5 !flex !items-center !justify-center !gap-2"
            containerClass="max-w-md mx-auto pb-12"
            itemClass="px-2"
          >
            {credentialItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col items-center text-center gap-3"
                aria-labelledby={`${item.id}-title`}
              >
                <div
                  className={`relative h-28 w-28 overflow-hidden sm:h-32 sm:w-32 ${
                    item.image
                      ? "rounded-xl bg-white p-3 shadow-sm"
                      : "rounded-md border-2 border-dashed border-white/70 bg-white/10"
                  }`}
                >
                  {item.image && (
                    <div className="relative h-full w-full min-h-0">
                      <Image
                        src={item.image}
                        alt={`${item.title} icon`}
                        fill
                        sizes="128px"
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
                <h3
                  id={`${item.id}-title`}
                  className="text-sm font-semibold leading-snug sm:text-base"
                >
                  {item.title}
                </h3>
                <div className="rounded-md border border-white/25 bg-black/55 p-3 text-sm leading-relaxed w-full">
                  {item.roles.map((role) => (
                    <p key={role}>{role}</p>
                  ))}
                </div>
              </article>
            ))}
          </Carousel>
        ) : (
          <ul className="grid grid-cols-2 gap-8 list-none m-0 p-0 pb-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-10" role="list">
            {credentialItems.map((item) => (
              <li key={item.id} className="list-none lg:w-40">
                <article
                  className="group relative flex flex-col items-center text-center"
                  tabIndex={0}
                  aria-labelledby={`${item.id}-title`}
                  aria-describedby={`${item.id}-details`}
                >
                  <div
                    className={`relative h-28 w-28 overflow-hidden sm:h-32 sm:w-32 lg:h-36 lg:w-36 ${
                      item.image
                        ? "rounded-xl bg-white p-3 shadow-sm"
                        : "rounded-md border-2 border-dashed border-white/70 bg-white/10"
                    }`}
                  >
                    {item.image && (
                      <div className="relative h-full w-full min-h-0">
                        <Image
                          src={item.image}
                          alt={`${item.title} icon`}
                          fill
                          sizes="144px"
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <h3
                    id={`${item.id}-title`}
                    className="mt-3 text-sm font-semibold leading-snug sm:text-base"
                  >
                    {item.title}
                  </h3>

                  <div
                    id={`${item.id}-details`}
                    className={`rounded-md p-3 text-sm leading-relaxed ${
                      isHighContrast
                        ? "mt-3 w-full border border-white bg-black"
                        : "pointer-events-none absolute -top-2 left-1/2 z-20 w-[min(15rem,85vw)] max-h-0 -translate-x-1/2 translate-y-[6px] scale-[0.98] overflow-hidden border border-white/25 bg-black/55 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:max-h-56 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:max-h-56 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100"
                    }`}
                  >
                    {item.roles.map((role) => (
                      <p key={role}>{role}</p>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-10 text-center text-sm">
          &copy; {new Date().getFullYear()} IdeaLizm. All rights reserved.
        </p>
      </div>

    </footer>
  );
}


