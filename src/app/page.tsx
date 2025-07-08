"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLandingPageFinal } from "@/contexts/LandingPageContext";

export default function Home() {
  const router = useRouter();
  const [zoom, setZoom] = useState(200);
  const [translateX, setTranslateX] = useState(75);
  const { final, setFinal } = useLandingPageFinal();
  const animationFrameRef = useRef<number | null>(null);

  const smoothUpdate = (newZoom: number, newTranslateX: number) => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      setZoom(Math.max(100, Math.min(200, newZoom)));
      setTranslateX(Math.max(50, Math.min(75, newTranslateX)));
    });
  };

  const handleWheel = (event: WheelEvent) => {
    smoothUpdate(zoom - event.deltaY * 0.05, translateX - event.deltaY * 0.02);
  };

  useEffect(() => {
    if (zoom === 100 && translateX === 50) {
      setFinal(true);
    } else {
      setFinal(false);
    }

    if (!final) {
      window.addEventListener("wheel", handleWheel);
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [zoom, translateX, final, setFinal]);

  const profileContent = (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 p-12 w-full max-w-7xl bg-amber-100 rounded-xl shadow-lg">
        {/* Vertical elliptical container with responsive width */}
        <div className="w-full sm:w-96 md:w-auto max-w-sm aspect-[3/4] overflow-hidden rounded-full">
          <img
            src="LizMyskaProfile.jpeg"
            alt="Profile Picture of Liz Myska"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-gray-700 text-lg leading-relaxed max-w-3xl space-y-4">
          <p className="font-extrabold text-2xl">
            When you viewed the picture shown above, what did you see?
          </p>
          <p>
            My name is <span className="font-bold">Liz Myska</span>.  I am the Liz M of IdeaLizm.
            Here is my sighted answer to the question above:  &quot;I see a streetscape.  There is a crosswalk and a pedestrian.&quot;
            This is what first met my eye.  I would not necessarily have commented further unless prodded to do so.
          </p>
          <p>
            If prompted to examine the picture in more detail, I might have volunteered that the pedestrian
            was a blind person who was at risk of a collision with a motor vehicle.  How did I know it was a 
            blind person in the picture?  The white cane that the pedestrian was holding identified her as a blind person.  
            I might have commented further that the motor vehicle looks poised to turn into the path of the unsuspecting walker. 
            I might have registered concern for the blind person&apos;s safety.  Was she aware of the danger? 
          </p>
          <p>
            I have just described what a sighted person might perceive and identify in this photo.  I can no longer
            see pictures.  Why?  Because I am now blind.  In fact, I am the blind person depicted in the picture.  I now
            see places, spaces, and situations differently.  Everything changed for me in 2008 when I was deemed legally 
            blind.  Since then I learned and continue to learn about blindness and &quot;how to be blind.&quot;
          </p>
          <p>
            I am eager to share my lived experiences, my findings, and my analysis with you.  Why?  Because it benefits 
            us both.  How?  That depends on YOU.
          </p>
          <p>
            Let&apos;s <strong>Consult</strong>, <strong>Collaborate</strong>, and <strong>Commingle</strong>.
          </p>
        </div>
      </div>
    </div>
  );

  const footerContent = (
    <footer className="bg-gray-800 text-white py-4">
      <div className="text-center text-6xl text-foreground text-white space-y-6 bg-gray-800 p-12">
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

  const panelContent = (
    <div>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#f6f5f0]">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6 py-12 lg:px-24">
          <h2 className="text-4xl font-bold text-[#004459] mb-4">
            Street Smarts - What you don&apos;t see
          </h2>
          <p className="text-[#004459] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            We provide interactive workshops for sighted individuals to better
            understand the experiences of visually impaired people, fostering a
            more inclusive community.
          </p>
          <button
            className="mt-6 px-6 py-3 rounded-full bg-[#f6b846] text-white font-semibold shadow hover:bg-[#f4a931] transition"
            onClick={() => router.push("/consult")}
          >
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="LizStreetCrossing.jpg"
            alt="Street Crossing"
            className="max-w-full shadow-lg" /*rounded-lg*/
          />
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#f6f5f0]">
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
            Collaborate - Senses & Sensitivity
          </h2>
          <p className="text-[#004459] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Liz M will inform and educate you, your agency, your organization, and
            supply you with her unique analysis.
          </p>
          <button
            className="mt-6 px-6 py-3 rounded-full bg-[#f6b846] text-white font-semibold shadow hover:bg-[#f4a931] transition"
            onClick={() => router.push("/collaborate")}
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#f6f5f0]">
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
          backgroundImage: "url('/LizStreetCrossing.jpg')",
          backgroundSize: `${zoom}%`,
          backgroundPosition: `${translateX}% center`,
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.3s ease, background-position 0.3s ease",
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
          <img className="w-full h-full object-contain transform -translate-x-1/2" src="down.svg" alt="down arrow" />
        </div>
      )}
      {final && profileContent}
      {final && panelContent}
      {final && footerContent}
    </>
  );
}
