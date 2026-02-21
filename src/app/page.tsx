"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLandingPageFinal } from "@/contexts/LandingPageContext";
import { useDeviceType } from "@/Hooks/useDeviceType";

import HomePanels from "@/components/home/HomePanels";
import HomeProfileStory from "@/components/home/HomeProfileStory";
import HomeApproach from "@/components/home/HomeApproach";
import HomeFooter from "@/components/home/HomeFooter";
import ChevronsDownIcon from "@/components/icons/ChevronsDownIcon";

const MIN_ZOOM = 100;
const MAX_ZOOM = 200;
const MIN_TRANSLATE_X = 50;
const MAX_TRANSLATE_X = 75;

// Higher = snappier, lower = smoother.
const SPRING_FACTOR = 0.12;
const SNAP_EPSILON = 0.15;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function Home() {
  const deviceType = useDeviceType();
  const [zoom, setZoom] = useState(MAX_ZOOM);
  const [translateX, setTranslateX] = useState(MAX_TRANSLATE_X);
  const { final, setFinal } = useLandingPageFinal();
  const rafRef = useRef<number | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Current (animated) values
  const zoomRef = useRef(zoom);
  const translateXRef = useRef(translateX);
  // Target values (input-driven)
  const targetZoomRef = useRef(zoom);
  const targetTranslateXRef = useRef(translateX);

  const animateStep = useCallback(() => {
    const currentZoom = zoomRef.current;
    const currentX = translateXRef.current;
    const targetZoom = targetZoomRef.current;
    const targetX = targetTranslateXRef.current;

    let nextZoom = currentZoom + (targetZoom - currentZoom) * SPRING_FACTOR;
    let nextX = currentX + (targetX - currentX) * SPRING_FACTOR;

    if (Math.abs(nextZoom - targetZoom) < SNAP_EPSILON) nextZoom = targetZoom;
    if (Math.abs(nextX - targetX) < SNAP_EPSILON) nextX = targetX;

    zoomRef.current = nextZoom;
    translateXRef.current = nextX;

    setZoom(nextZoom);
    setTranslateX(nextX);

    const done = nextZoom === targetZoom && nextX === targetX;
    if (!done && !final) {
      rafRef.current = requestAnimationFrame(animateStep);
    } else {
      rafRef.current = null;
    }
  }, [final]);

  const setTargets = useCallback(
    (nextZoom: number, nextTranslateX: number) => {
      targetZoomRef.current = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
      targetTranslateXRef.current = clamp(nextTranslateX, MIN_TRANSLATE_X, MAX_TRANSLATE_X);

      if (!final && rafRef.current == null) {
        rafRef.current = requestAnimationFrame(animateStep);
      }
    },
    [animateStep, final]
  );

  // More comfortable starting crop/zoom on mobile.
  useEffect(() => {
    if (final) return;

    const initialZoom = deviceType === "mobile" ? 180 : MAX_ZOOM;
    const initialTranslateX = deviceType === "mobile" ? 60 : MAX_TRANSLATE_X;

    zoomRef.current = initialZoom;
    translateXRef.current = initialTranslateX;
    targetZoomRef.current = initialZoom;
    targetTranslateXRef.current = initialTranslateX;

    setZoom(initialZoom);
    setTranslateX(initialTranslateX);
  }, [deviceType, final]);

  useEffect(() => {
    let startY = 0;
    const el = heroRef.current;
    if (!el || final) return;

    const handleWheel = (event: WheelEvent) => {
      // Prevent the page from scrolling while the hero zoom is active
      // so the overlay text doesn't "bob" up/down.
      event.preventDefault();

      // Use target values so fast scrolling feels responsive but still smooth.
      setTargets(
        targetZoomRef.current - event.deltaY * 0.05,
        targetTranslateXRef.current - event.deltaY * 0.02
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Keep gestures feeling intentional on mobile (avoid page scroll/rubber-band fighting).
      e.preventDefault();

      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      startY = currentY;

      // Simulate scroll delta for smooth zooming on mobile
      setTargets(
        targetZoomRef.current - deltaY * 0.1,
        targetTranslateXRef.current - deltaY * 0.04
      );
    };

    // Must be passive:false to allow preventDefault()
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    // Must be passive:false to allow preventDefault()
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [final, setTargets]);

  useEffect(() => {
    setFinal(zoom === MIN_ZOOM && translateX === MIN_TRANSLATE_X);
  }, [zoom, translateX, setFinal]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className="relative z-0 h-screen w-full overflow-hidden bg-background"
        // Initially prevent scrolling then allow scrolling after to allow to scroll on the image
        style={{ touchAction: final ? "pan-y" : "none" }}
      >
        <Image
          src="/LizStreetCrossing.jpg"
          alt="Liz Street Crossing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: `${translateX}% center`,
            willChange: "transform",
          }}
        />
      </div>
      <div
        className="z-10 fixed left-1/2 top-24 w-[min(92vw,42rem)] -translate-x-1/2 px-4 text-center text-foreground text-white sm:top-28 lg:left-3/4 lg:top-1/4 lg:w-auto lg:-translate-x-0 lg:px-0 lg:text-left pointer-events-none"
        style={{
          opacity: final ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div className="bg-heroPanelBg rounded-lg p-4 sm:p-5">
          <h1 className="text-3xl font-semibold sm:text-5xl lg:text-6xl">
            See the bigger picture
          </h1>
        </div>
      </div>
      {!final && (
        <div className="z-10 fixed w-28 h-28 bottom-10 text-foreground text-white animate-bounce left-1/2 pointer-events-none">
          <ChevronsDownIcon className="w-full h-full object-contain transform -translate-x-1/2" />
        </div>
      )}
  
      {final && <HomeProfileStory />}
      {final && <HomePanels />}
      {final && <HomeApproach />}
      {final && <HomeFooter />}
    </>
  );
}
