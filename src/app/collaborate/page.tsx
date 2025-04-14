"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Collaborate() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Collaborate</h1>
        <p className="mt-4 text-lg">We are open to collaboration.</p>
        </div>
    );
}