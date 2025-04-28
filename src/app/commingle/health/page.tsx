"use client";
import React from "react";
import { useState } from "react";

export default function Health() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Public Health</h1>
        <p className="mt-4 text-lg">How do VIP standards and public health coincide? ...</p>
        </div>
    );
}