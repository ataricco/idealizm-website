"use client";

import { useState } from "react";

const pages = [
  "Home",
  "My Story",
  "Hiking in the Dark",
  "White Cane Day",
  "WalkFit",
  "Public Health",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const barIcon = (icon: string) => {
    return (
      <div className="fixed top-0 left-0 w-16 h-16" onClick={toggle}>
        <img
          className="w-full, h-full object-contain"
          src={icon}
          alt="menu icon"
        />
      </div>
    );
  };

  const expandedBar = (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-72 h-screen bg-black bg-opacity-60 text-white z-10">
      {barIcon("close.svg")}
      <ul className="text-2xl space-y-12">
        {pages.map((page, i) => (
          <li key={i}>{page}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div
        className={`fixed top-0 left-0 flex flex-col items-center justify-center w-72 h-screen bg-black bg-opacity-60 text-white z-10 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {barIcon("close.svg")}
        <ul className="text-2xl space-y-12 mt-16 ml-8">
          {pages.map((page, i) => (
            <li key={i}>{page}</li>
          ))}
        </ul>
      </div>

      {!isOpen && barIcon("menu.svg")}
    </>
  );
}
