/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function Consult() {
  return (
    <div className="bg-[#f6f5f0] text-[#004459]">
      {/* Header */}
      <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
          Insight Beyond Sight - Accessibility Consultant
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          Empowering organizations to create spaces that work for everyone —
          especially the non-sighted.
        </p>
      </header>

      <section className="gap-8 px-6 lg:px-24 py-16 items-start">
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            I, Liz M, through my VISIONS enterprise provide trainings,
            programming, and consultancy on a fee for service basis. I provide
            subject matter analysis and expertise. My technique involves
            identifying and describing the issue or issues, designing a
            customized experience or experiences suited to the occasion, the
            discipline, the organization, and/or the population and tailored to
            the issues.
          </p>
        </div>

        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
          <div className="space-y-2 text-lg text-[#004459] font-medium">
            <div className="flex">
              <span className="w-8 font-bold text-amber-600">I</span>
              <span>
                dentify (and from there innovate, integrate, interact, involve,
                intersect, interrogate, influence, imprint)
              </span>
            </div>
            <div className="flex">
              <span className="w-8 font-bold text-amber-600">D</span>
              <span>
                escribe (and from here deduct, deduce, define, differentiate,
                detail, design)
              </span>
            </div>
            <div className="flex">
              <span className="w-8 font-bold text-amber-600">E</span>
              <span>
                ngage (and do so by educating, exhibiting, explaining,
                empowering)
              </span>
            </div>
            <div className="flex">
              <span className="w-8 font-bold text-amber-600">A</span>
              <span>ccomplish</span>
            </div>
          </div>
        </div>
      </section>

      {/* Connecting the Dots Video */}
      <section
        className="gap-8 px-6 lg:px-24 py-16 items-start bg-white"
        data-aos="fade-up"
      >
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-[#004459] mb-6">
            Connecting the Dots
          </h2>
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            Each session in the{" "}
            <span className="italic">Connecting the Dots</span> series is
            thoughtfully tailored to its audience, whether it's medical
            professionals, legal teams, custodial staff, or executive
            leadership. Sessions are customized to reflect real-world scenarios
            relevant to each group, exploring practical questions such as: How
            can a team member recognize signs of vision loss? What is the
            appropriate way to address and assist patrons who are visually
            impaired? When and how should staff offer help to ensure dignity and
            independence are respected?
          </p>
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0 py-2">
            Click{" "}
            <a
              href="https://archive.org/search?query=title%3A%28Connecting+the+Dots%29+AND+creator%3A%28WCCA%29+AND+description%3A%28Myska%29"
              target="_blank"
              className="text-amber-600 hover:text-amber-800 underline transition"
            >
              here
            </a>{" "}
            to find many other informative sessions of{" "}
            <span className="italic">Connecting the Dots</span>.
          </p>
        </div>

        {/* Connecting the Dots Video */}
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div
            className="w-full"
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://ia801509.us.archive.org/25/items/CONNECTINGTHEDOTS60/CONNECTINGTHEDOTS60.mp4"
              title="Liz on Connecting the Dots #60"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /*autoplay - fix this*/
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
