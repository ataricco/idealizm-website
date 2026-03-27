"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContentBlock from "@/components/ContentBlock";
import CaptionedMedia from "@/components/CaptionedMedia";

export default function WalkFit() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="bg-surfaceCream text-blueText">
      {/* Header */}
      <PageHeader
        title={"Walkfit - Inclusion in Motion"}
        subtitle={
          "A unique walking initiative that pairs sighted and non-sighted people to experience the world together - one step at a time."
        }
      />

      {/* Text and Image */}
      <section className="flex flex-col lg:flex-row gap-8 px-6 lg:px-24 py-16 items-start">
        {/* Text */}
        <div
          className="flex-1 space-y-6 text-lg leading-relaxed order-2 lg:order-1"
          data-aos="fade-up">

          <ContentBlock>
            <h2 className="text-2xl font-bold text-blueText mb-4">
              What is Walkfit?
            </h2>
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
              Walkfit is a unique walking initiative created in 2015 by a
              Visually Impaired Person (VIP) and an optometry student. Walkfit
              pairs a person who is sighted with a person who is non-sighted and
              just like it sounds, &quot;we walk.&quot; But that is not all. Walkfit is
              much more than that. Walkfit is a way to experience the world
              differently. It&apos;s about community, connection, and changing
              perspectives.
            </p>
          </ContentBlock>

          <ContentBlock>
            <h2 className="text-2xl font-bold text-blueText mb-4">
              Where and when does Walkfit take place?
            </h2>
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
              The location where the walks occur vary from week to week. The
              walks take place primarily on a Saturday, usually in the morning
              in the City of Worcester proper. Walkfit has a laser focus on
              inclusion and accessibility so that people of all backgrounds, all
              ages, and all abilities can partake if they so choose. There is
              usually an out of door component to each walk and therefore walks
              are weather dependent. That being said, Walkfit does have access
              to a few indoor spaces so that we do not necessarily have to
              cancel a walk due to inclement weather. We simply &quot;go in&quot; rather
              than &quot;go out.&quot;
            </p>
          </ContentBlock>

          <ContentBlock className="text-center lg:text-left mb-10 lg:mb-0 px-6 py-4 lg:px-12">
            <h2 className="text-2xl font-bold text-blueText mb-4">
              How do I sign up for Walkfit?
            </h2>
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
              If you or anyone you know is interested in Walkfit, reach out to
              VIP Liz M by email at{" "}
              <a className="underline" href="mailto:lizmyska@gmail.com?subject=Walkfit Sign-Up&body=Hi Liz M, I'm interested in joining Walkfit.">
                lizmyska@gmail.com
              </a>
              . Be sure to identify yourself and your interest in Walkfit in the
              email. Please note that you must sign up in advance of a walk.
            </p>
          </ContentBlock>

          <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
            <h2 className="text-2xl font-bold text-[#004459] mb-4">
              Why Join Walkfit?
            </h2>
            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
              Watch a short video of Walkfit in action, from participants moving together
              to enjoying the community around them.
            </p>
            
            {/* Walkfit GoPro Video */}
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full aspect-video">
                <video
                  controls
                  preload="metadata"
                  poster="/WalkfitGroupPhoto.png"
                  className="w-full h-full object-cover"
                >
                <source src="/WalkfitGoProVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
            <h2 className="text-2xl font-bold text-[#004459] mb-4">
              Why Join Walkfit?
            </h2>
            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
              Watch a short video of Walkfit in action, from participants moving together
              to enjoying the community around them.
            </p>
            
            {/* Walkfit GoPro Video */}
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full aspect-video">
                <video
                  controls
                  preload="metadata"
                  poster="/WalkfitGroupPhoto.png"
                  className="w-full h-full object-cover"
                >
                <source src="/WalkfitGoProVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex-shrink-0 w-full lg:w-[400px] cursor-pointer order-1 lg:order-2"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => setIsVideoPlaying(true)}
        >
        {!isVideoPlaying ? (
          <CaptionedMedia
            caption={"Meet Liz M and Hans, Walkfit's co-creators"}
            captionClassName="absolute bottom-0 w-full bg-captionBg text-white text-center py-2 text-sm rounded-b-2xl"
            media={
              <Image
                src="/LizAndWalkfitPioneer.jpeg"
                alt="Walkfit in Action"
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
                width={400}
                height={300}
              />
            }
          />
          ) : (
            <video
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              controls
              autoPlay
            >
            <source src="/HansMeetingLiz.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          )}
        </div>
      </section>

      {/* Google Calendar */}
      <section className="py-12 px-6 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-blueText mb-6">
          Upcoming Walkfit Events
        </h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=idealizmwebsite%40gmail.com&ctz=America%2FNew_York"
            title="Walkfit events calendar"
            style={{ border: 0 }}
            className="w-full h-[600px] rounded-xl shadow-md"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
