"use client";
import React from "react";
import { useState, useEffect } from "react";
import ContactForm from "@/components/contactForm";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="bg-[#f6f5f0] text-[#004459]">
            <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Contact</h1>
                <p className="text-lg lg:text-xl max-w-2xl mx-auto">
                Interested? Reach out! We'll respond as quickly as we can.
                </p>
            </header>

            <ContactForm />


        </div>

    );
    
    {/* template
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-lg">Contact us here.</p>
        </div>
    );
    */}
}