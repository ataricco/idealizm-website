"use client";
import React from "react";
import ContactForm from "@/components/contactForm";
import PageHeader from "@/components/PageHeader";
import ContentBlock from "@/components/ContentBlock";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-surfaceCream text-blueText">
      <PageHeader
        title={"Liaison with Liz"}
        subtitle={"Together, we create more informed, inclusive solutions."}
      />

      <section className="gap-8 px-6 lg:px-24 py-16 items-start">
        <ContentBlock className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12 space-y-6">
          <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
            Connect with Liz M for real-world insight, thoughtful guidance, and meaningful collaboration. 
            No matter the project, challenge, or initiative, Liz M brings a distinctive perspective and 
            unmatched expertise that make her services truly invaluable.
          </p>
          <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
            Looking to{" "}
            <Link href="/consult" className="hover:text-amber-600 underline font-bold">
              Consult
            </Link>
            ,{" "}
            <Link href="/collaborate" className="hover:text-amber-600 underline font-bold">
              Collaborate
            </Link>
            , or{" "}
            <Link href="/commingle" className="hover:text-amber-600 underline font-bold">
              Commingle
            </Link>
            ? Fill out the form below and let&apos;s talk.
          </p>
        </ContentBlock>
      </section>

      <ContactForm />
    </div>
  );
}
