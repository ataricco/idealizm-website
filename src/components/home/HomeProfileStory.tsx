"use client";

import React from "react";
import Link from "next/link";

export default function HomeProfileStory() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-16 w-full max-w-7xl bg-amber-100 rounded-xl shadow-lg">
        <div className="text-gray-700 text-lg leading-relaxed space-y-4 px-12">
          <p className="font-extrabold text-2xl text-center pb-4">
            When you viewed the picture shown above, what did you see?
          </p>
          <p>
            My name is <span className="font-bold">Liz Myska</span>. I am the Liz M of
            IdeaLizm. Here is my sighted answer to the question above: &quot;I see a
            streetscape. There is a crosswalk and a pedestrian.&quot; This is what first
            met my eye. I would not necessarily have commented further unless prodded
            to do so.
          </p>
          <p>
            If prompted to examine the picture in more detail, I might have volunteered
            that the pedestrian was a blind person who was at risk of a collision with a
            motor vehicle. How did I know it was a blind person in the picture? The
            white cane that the pedestrian was holding identified her as a blind person.
            I might have commented further that the motor vehicle looks poised to turn
            into the path of the unsuspecting walker. I might have registered concern
            for the blind person's safety. Was she aware of the danger?
          </p>
          <p>
            I have just described what a sighted person might perceive and identify in
            this photo. I can no longer see pictures. Why? Because I am now blind. In
            fact, I am the blind person depicted in the picture. I now see places,
            spaces, and situations differently. Everything changed for me in 2008 when
            I was deemed legally blind. Since then I learned and continue to learn about
            blindness and &quot;how to be blind.&quot;
          </p>
          <p>
            I am eager to share my lived experiences, my findings, and my analysis with
            you. Why? Because it benefits us both. How? That depends on YOU.
          </p>
          <p>
            Let's{" "}
            <Link href="/consult" className="hover:text-amber-600">
              <strong>Consult</strong>
            </Link>
            ,{" "}
            <Link href="/collaborate" className="hover:text-amber-600">
              <strong>Collaborate</strong>
            </Link>
            , and{" "}
            <Link href="/commingle" className="hover:text-amber-600">
              <strong>Commingle</strong>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}


