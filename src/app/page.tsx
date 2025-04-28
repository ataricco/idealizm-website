"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useLandingPageFinal } from "@/contexts/LandingPageContext";
import { useRouter } from "next/navigation";
import PillButton from "@/components/pillButton";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const router = useRouter();
  const [zoom, setZoom] = useState(200);
  const [translateX, setTranslateX] = useState(75);

  //useLandingPageFinal is a custom hook that returns the context, as a final bool and the setter
  const { final, setFinal } = useLandingPageFinal();

  const handleWheel = (event: WheelEvent) => {
    // Sets the zoom level to be between 100% and 200% depending on the scroll direction
    // Sets the translate level to be between 0% and 75% depending on the scroll direction
    setZoom((prev) => Math.max(100, Math.min(200, prev - event.deltaY * 0.05)));
    setTranslateX((prev) =>
      Math.max(50, Math.min(75, prev - event.deltaY * 0.02))
    );
  };

  useEffect(() => {
    if (zoom == 100 && translateX == 50) {
      setFinal(true);
    } else {
      setFinal(false);
    }

    if (typeof window !== "undefined") {
      AOS.init({ duration: 800, once: true });
    }

    if (!final) {
      window.addEventListener("wheel", handleWheel);
      console.log(zoom, translateX);

      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [zoom, translateX, final, setFinal]);

  //stuff that appears after the user scrolls all the way down
  const invisibleContent = (
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
          <h2 className="text-3xl">Accessibility Analyst</h2>
          <h2 className="text-3xl">On-Site Trainings for the Sighted</h2>
        </div>
      </div>
      <div className="flex flex-row space-x-5 absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <PillButton
          colorIndex={0}
          onClick={() => {
            router.push("/contact");
          }}
        >
          <p className="p-3 mt-1 text-xl font-bold">Contact Me</p>
        </PillButton>
        <PillButton
          colorIndex={0}
          onClick={() => {
            router.push("/story");
          }}
        >
          <p className="p-3 mt-1 text-xl font-bold">About Me</p>
        </PillButton>
      </div>
      {/*gradient thing */}
      <div className="w-full bg-blend-lighten bg-gradient-to-b from-transparent to-slate-50 h-20 absolute bottom-0" />
    </div>
  );

  const profileContent = (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-12 p-12 w-full max-w-7xl bg-amber-100 rounded-xl shadow-lg">
        <img
          src="LizMyskaProfile.JPG"
          alt="Profile of Liz Myska"
          className="w-96 h-96 object-cover rounded-full"
          // className="w-96 h-96 object-cover border-4 border-slate-500 rounded-full"
        />
        <div className="text-gray-700 text-lg leading-relaxed max-w-3xl space-y-4">
          <p className="font-extrabold text-2xl">
            When you viewed the image above, what did you see?
          </p>
          <p>
            My name is <span className="font-bold">Liz Myska</span>. Until 2008,
            my response to the question &quotWhat do you see in this photo&quot
            would have been &quotI see a streetscape; there is a crosswalk and a
            pedestrian.&quot This is what caught my eye. I would not necessarily
            have commented further.
          </p>
          <p>
            On further examination of the image, I might have volunteered that
            the pedestrian was a blind person who was at risk of a collision
            with a motor vehicle.
          </p>
          <p>
            I, Liz Myska, am the pedestrian depicted in this photo. In 2008, I
            was decreed to be legally blind. Horses were switched midstride. I
            moved from being sighted to being a VIP - Visually Impaired Person.
            I immediately became a non-driver. No longer was I viewing the world
            from behind the wheel. My visual perception and my relationship with
            it changed.
          </p>
          <p>
            Visual perception involves taking in, interpreting, and synthesizing
            visual information about the environment and the beings that inhabit
            it. I began analyzing spaces, places, objects, and creatures from a
            different vantage point and a different perspective once I became a
            VIP. It is that vantage point and that perspective you gain and
            benefit from consulting and allying with me.
          </p>
        </div>
      </div>
    </div>
  );

  const panelContent = (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between bg-[#f6f5f0]">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6 py-12 lg:px-24">
          <h2 className="text-4xl font-bold text-[#004459] mb-4">
            Street Smarts - What you don&apost see
          </h2>
          <p className="text-[#004459] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            We provide interactive workshops for sighted individuals to better
            understand the experiences of visually impaired people, fostering a
            more inclusive community.
          </p>
          <button
            className="mt-6 px-6 py-3 rounded-full bg-[#f6b846] text-white font-semibold shadow hover:bg-[#f4a931] transition"
            onClick={() => router.push("/collaborate")}
          >
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="background.JPG"
            alt="Street Crossing"
            className="max-w-full shadow-lg" /*rounded-lg*/
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between bg-[#f6f5f0]">
        {/* Left Image Section */}
        <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
          <img
            src="HuntingtonAveTraining.JPG"
            alt=""
            className="max-w-full shadow-lg" /*rounded-lg*/
          />
        </div>
        {/* Right Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6 py-12 lg:px-24 order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-[#004459] mb-4">
            Consultation - Senses & Sensitivity
          </h2>
          <p className="text-[#004459] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Liz will inform and educate you, your agency, your organization, and
            supply you with her unique analysis.
          </p>
          <button
            className="mt-6 px-6 py-3 rounded-full bg-[#f6b846] text-white font-semibold shadow hover:bg-[#f4a931] transition"
            onClick={() => router.push("/consult")}
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between bg-[#f6f5f0]">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6 py-12 lg:px-24">
          <h2 className="text-4xl font-bold text-[#004459] mb-4">
            Community Building - Interactive
          </h2>
          <p className="text-[#004459] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Explore the many initiatives, including WalkFit, White Cane Day, and
            TalkFit.
          </p>
          <button
            className="mt-6 px-6 py-3 rounded-full bg-[#f6b846] text-white font-semibold shadow hover:bg-[#f4a931] transition"
            onClick={() => router.push("/commingle")}
          >
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="BusinessImprovementDistrictGroup.jpg"
            alt="Business Improvement District Group"
            className="max-w-full shadow-lg" /*rounded-lg*/
          />
        </div>
      </section>
    </div>
  );

  return (
    <>
      <div
        className="z-0 flex flex-col items-center justify-center h-screen text-foreground bg-background"
        style={{
          backgroundImage: "url('background.jpg')",
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
        <div className="z-10 absolute top-32 left-10 text-6xl text-foreground text-white space-y-6 bg-slate-900 bg-opacity-60 rounded-lg p-5">
          <h1>See the bigger picture</h1>
        </div>
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
      {invisibleContent}
      {final && profileContent}
      {final && panelContent}
    </>
  );
}
