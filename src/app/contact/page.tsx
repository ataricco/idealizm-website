"use client";
import React from "react";
import ContactForm from "@/components/contactForm";

export default function Contact() {
  return (
    <div className="bg-[#f6f5f0] text-[#004459]">
      <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Liaison with Liz M</h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          Together, we create more informed, inclusive solutions.
        </p>
      </header>

      <section className="gap-8 px-6 lg:px-24 py-16 items-start">
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12 space-y-6">
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            Connect with Liz M for real-world insight, thoughtful guidance, and meaningful collaboration. 
            No matter the project, challenge, or initiative, Liz M brings a distinctive perspective and 
            unmatched expertise that make her services truly invaluable.
          </p>
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            Looking to consult, collaborate, or commingle?  Fill out the form below and let&apos;s talk.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
