"use client";
import React from "react";
import { useState } from "react";

export default function Hiking() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Hiking in the Dark</h1>
        <p className="mt-4 text-lg">Hiking in the Dark is ...</p>
        </div>
    );
}