"use client";

import React from "react";
import Image from "next/image";

export default function TalkFit() {
  return (
    <div className="bg-[#f6f5f0] text-[#004459]">
      {/* Header */}
      <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
          Talkfit
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          A virtual gathering that keeps the Walkfit community connected — one conversation at a time.
        </p>
      </header>

      {/* Text and Image */}
      <section className="flex flex-col lg:flex-row gap-8 px-6 lg:px-24 py-16 items-start">
        {/* Text */}
        <div
          className="flex-1 space-y-6 text-lg leading-relaxed order-2 lg:order-1"
          data-aos="fade-up"
        >
          <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
            <h2 className="text-2xl font-bold text-[#004459] mb-4">
              What is Talkfit?
            </h2>
            <div className="space-y-6">
              <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Talkfit is the virtual companion to Walkfit; a monthly online gathering designed 
                to keep the spirit of connection alive when meeting in person isn&apos;t possible. While 
                Walkfit brings people together through physical and social activity in outdoor settings, 
                Talkfit offers a physically distanced way to stay engaged, build friendships, and share 
                experiences from the comfort of home.
              </p>
              <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Born out of the challenges of the COVID-19 pandemic, Talkfit was launched to support Walkfit
                participants, both visually impaired individuals and volunteers, who were suddenly cut off from
                regular in-person interactions. As Walkfit adapted to changing circumstances, not everyone was 
                able to join those transitions. Talkfit was created as a response to that reality, offering a way 
                to maintain connection, combat social isolation, and ensure no one felt left behind.
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
            <h2 className="text-2xl font-bold text-[#004459] mb-4">
              Where and when does Talkfit take place?
            </h2>
            <div className="space-y-6">
              <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Talkfit takes place the old-fashioned way - over the phone. With no visual components, these audio-only
                conversations create a level playing field where all participants can engage equally.
              </p>
              <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Talkfit calls are held on the third Monday of every month from 7:00 PM to 8:30 PM EST. Just pick up the
                phone and join the conversation.
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left mb-10 lg:mb-0 px-6 py-4 lg:px-12">
            <h2 className="text-2xl font-bold text-[#004459] mb-4">
              How do I sign up for Talkfit?
            </h2>
            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
              If you or anyone you know is interested in Talkfit, reach out to
              VIP Liz M by email at{" "}
              <a className="underline" href="mailto:lizmyska@gmail.com?subject=Walkfit Sign-Up&body=Hi Liz M, I'm interested in joining Talkfit.">
                lizmyska@gmail.com
              </a>
              . Be sure to identify yourself and your interest in Talkfit in the email. 
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex-shrink-0 w-full lg:w-[400px] order-1 lg:order-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            src="/LizAndWalkfitPioneer.jpeg"
            alt="Walkfit in Action"
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
            width={400}
            height={300}
          />
        </div>
      </section>
    </div>
  );
}
