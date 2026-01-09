"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContentBlock from "@/components/ContentBlock";
import CaptionedMedia from "@/components/CaptionedMedia";

export default function Commingle() {
  return (
    <div className="bg-surfaceCream text-blueText">
      {/* Header */}
      <PageHeader
        title={"Ready to Get Involved?"}
        subtitle={
          "Be inspired by initiatives rooted in community, accessibility, and advocacy, and turn shared vision into collective action."
        }
      />

      {/* Text and Image */}
      <section className="flex flex-col lg:flex-row gap-8 px-6 lg:px-24 py-16 items-start">
        {/* Text */}
        <div
          className="flex-1 space-y-6 text-lg leading-relaxed order-2 lg:order-1"
          data-aos="fade-up"
        >
          <ContentBlock>
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0 py-4">
              There are many meaningful opportunities to connect, learn, and grow by joining 
              existing initiatives designed to foster inclusion and support. Instead of starting 
              something new, the focus is on coming alongside established programs where you can 
              experience firsthand the power of community and collaboration.
            </p>
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0 py-4">
              These programs offer a chance to engage with individuals of diverse abilities, share experiences, 
              and build lasting relationships. By participating, you become part of a vibrant network that values 
              every voice. Explore the opportunities available, join in, and help create a culture of understanding 
              and inclusion that benefits everyone.
            </p>
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0 py-4">
              Select a card below for more details about our current initiatives.
            </p>
          </ContentBlock>
        </div>

        {/* Image */}
        <div
          className="flex-shrink-0 w-full lg:w-[400px] order-1 lg:order-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CaptionedMedia
            caption={"Cultivating connection through the sense of touch"}
            captionClassName="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 text-sm rounded-b-2xl"
            media={
              <Image
                src="/FeelingPlantsTwoPeople.jpg"
                alt="Two People Feeling Plants"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            }
          />
        </div>
      </section>

      {/* Initiative Cards */}
      <section className="px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Walkfit",
              desc: "A walking initiative pairing sighted and non-sighted individuals.",
              link: "/walkfit",
            },
            {
              title: "Talkfit",
              desc: "A virtual gathering that keeps the community connected.",
              link: "/talkfit",
            },
            {
              title: (
                <>
                Youth Voices – <em>Coming Soon</em>
                </>
                ),
              desc: "Programs supporting advocacy and inclusion for young people.",
              link: "",
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
