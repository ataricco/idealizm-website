"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Commingle() {
  return (
    <div className="bg-[#f6f5f0] text-[#004459]">
      {/* Header */}
      <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Commingle</h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          Be inspired by initiatives rooted in community, accessibility, and
          advocacy, and turn shared vision into collective action.
        </p>
      </header>

      {/* Text and Image */}
      <section className="flex flex-col lg:flex-row gap-8 px-6 lg:px-24 py-16 items-start">
        {/* Text */}
        <div
          className="flex-1 space-y-6 text-lg leading-relaxed"
          data-aos="fade-up"
        >
          <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0 py-4">
              Liz cultivates social connections and champions community
              building. Whether it be to bring awareness, advocate, teach and
              tutor to foster understanding and sideline myths and stereotypes,
              Liz seeks allies and alliances. Liz spotlights people, places and
              causes that would otherwise go unnoticed or be overlooked on her
              WCCA TV program Connecting the Dots.
            </p>

            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0 py-4">
              Itching to get involved and rub elbows with Liz M? Consider
              becoming an ambassador at Walkfit or Talkfit.
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex-shrink-0 w-full lg:w-[400px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            src="/FeelingPlantsTwoPeople.jpg"
            alt="Two People Feeling Plants"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Initiative Cards */}
      <section className="px-6 lg:px-24 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Walkfit",
              desc: "A walking initiative pairing sighted and non-sighted individuals.",
              link: "/walkfit",
            },
            {
              title: "Talkfit",
              desc: "Interactive workshops promoting accessibility and awareness.",
              link: "/talkfit",
            },
            {
              title: "White Cane Day",
              desc: "Description of White Cane Day",
              link: "/cane",
            },
            {
              title: "Vision Advocacy",
              desc: "Empowering voices to influence inclusive policy and spaces.",
              link: "/vision",
            },
            {
              title: "Tech for Inclusion",
              desc: "Exploring assistive technology that enhances daily life.",
              link: "/tech",
            },
            {
              title: "Youth Voices",
              desc: "Programs supporting advocacy and inclusion for young people.",
              link: "/youth",
            },
            {
              title: "People Health Communication",
              desc: "Add a description here.",
              link: "/health",
            },
            {
              title: "Community Spotlights",
              desc: "Highlighting efforts that promote access and equality locally.",
              link: "/community",
            },
          ].map((item, index) => (
            <Link href={`/commingle/${item.link}`} key={index}>
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
