"use client";
import React from "react";
import { useState, useEffect } from "react";
import { CheckCircle, Link } from 'lucide-react'; 

export default function Collaborate() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const points = [
        "Advocacy-centered approach to accessibility",
        "Community-led and impact-driven programs",
        "Customized guidance for diverse organizations",
        "Empowering staff through practical tools and training",
    ];
    
    return (
        <div className="bg-[#f6f5f0] text-[#004459]">
        {/* Header */}
        <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Trainings</h1>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          Be inspired by initiatives rooted in community, accessibility, and advocacy, and turn shared vision into collective action.
          </p>
        </header>

        <section className="gap-8 px-6 lg:px-24 py-16 items-start">
          <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0 py-4">
            Liz cultivates social connections and champions community building. Whether it be to bring awareness,
            advocate, teach and tutor to foster understanding and sideline myths and stereotypes, Liz seeks allies
            and alliances.  Liz spotlights people, places and causes that would otherwise go unnoticed or be overlooked
            on her WCCA TV program Connecting the Dots.
            </p>
          </div>
          </section>

          <div className="max-w-3xl mx-auto py-12 px-6 bg-white rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-[#004459] mb-6 text-center">Why It Matters</h2>
            <ul className="space-y-4">
                {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                    <   CheckCircle className="text-amber-500 w-6 h-6 mt-1" />
                        <span className="text-lg text-[#004459] leading-relaxed">{point}</span>
                    </li>
                ))}
            </ul>
            </div>



        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Collaborate</h1>
        <p className="mt-4 text-lg">We are open to collaboration.</p>
        </div>
        </div>
    );
}