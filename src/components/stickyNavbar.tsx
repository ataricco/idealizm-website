"use client";  // ensure this is a client component
import Link from "next/link";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage for high contrast preference on mount
    const savedTheme = localStorage.getItem('highContrast');
    if (savedTheme === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add('high-contrast');
        localStorage.setItem('highContrast', 'true');
      } else {
        document.documentElement.classList.remove('high-contrast');
        localStorage.setItem('highContrast', 'false');
      }
      return newVal;
    });
  };

  const menuItems = [
    { name: 'Consult', href: '/consult' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Commingle', href: '/commingle' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkClasses = (href: string) =>
    `hover:text-gray-300 transition ${
      pathname === href ? 'text-navCurrent font-semibold underline' : ''
    }`;

  return (

    <nav className="fixed top-0 left-0 z-50 w-full bg-navBg text-white md:px-8 py-4 duration-300 transform transition-all ease-in-out shadow-lg shadow-navShadow hover:shadow-navShadowHover">
      <div className="w-full flex justify-between items-center px-4 md:px-8 py-2">
        
        {/* Left Item */}
        <div className="text-4xl font-bold pl-2 md:pl-0">
          <Link href="/" className="hover:text-gray-300">IdeaLizm</Link>
        </div>

        {/* Right Items Container */}
        <div className="flex items-center space-x-4 lg:space-x-16">
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex text-xl space-x-16">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className={linkClasses(item.href)}>
                {item.name}
              </a>
            ))}
          </div>

          {/* High Contrast Toggle Button */}
          <button
            onClick={toggleHighContrast}
            className="group relative flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-slate-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-pressed={isHighContrast}
            aria-label={isHighContrast ? "Disable High Contrast" : "Enable High Contrast"}
            title={isHighContrast ? "Disable High Contrast" : "Enable High Contrast"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 3.5a8.5 8.5 0 0 1 0 17V3.5Z" fill="currentColor" />
            </svg>
            <span className="sr-only">
              {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
            </span>
          </button>

          {/* Hamburger Button for Mobile */}
          <button
            className="lg:hidden text-white pr-2 md:pr-0 text-3xl leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Main menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 flex flex-col space-y-4 text-xl px-6">
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
