"use client";  // ensure this is a client component

import Link from "next/link";

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Consult', href: '/consult' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Commingle', href: '/commingle' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkClasses = (href: string) =>
    `hover:text-gray-300 transition ${
      pathname === href ? 'text-amber-100 font-semibold underline' : ''
    }`;

  return (

    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-900 bg-opacity-80 text-white md:px-8 py-4 duration-300 transform transition-all ease-in-out shadow-lg shadow-slate-900 hover:shadow-slate-900/50">
      <div className="w-full flex justify-between items-center md:px-8 py-2">
        
        {/* Left Item */}
        <div className="text-4xl font-bold">
          <a href="/" className="hover:text-gray-300">IdeaLizm</a>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-xl space-x-16">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClasses(item.href)}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-4 text-xl px-6">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClasses(item.href)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
