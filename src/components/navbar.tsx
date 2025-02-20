"use client";

import { useState } from "react";
import BarIcon from "./barIcon";

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

  return (
    <>
      <div
        className={`fixed top-0 left-0 flex flex-col items-center justify-center w-72 h-screen bg-black bg-opacity-60 text-white z-50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <BarIcon icon="close.svg" handleClick={toggle} />
        <ul className="text-2xl space-y-12 mt-16 ml-8">
          {pages.map((page, i) => (
            <li key={i}>{page}</li>
          ))}
        </ul>
      </div>

      {!isOpen && <BarIcon icon="menu.svg" handleClick={toggle} />}
    </>
  );
}
