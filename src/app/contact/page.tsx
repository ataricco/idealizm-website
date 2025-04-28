"use client";
import React from "react";
import ContactForm from "@/components/contactForm";

export default function Contact() {
  return (
    <div className="bg-[#f6f5f0] text-[#004459]">
      <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Contact</h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          How can IdeaLizm help you?
        </p>
      </header>

      <ContactForm />
    </div>
  );
}
