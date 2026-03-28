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

          {/* High Contrast toggle (switch) */}
          <div className="flex flex-col items-center gap-0.5">
            <button
              id="high-contrast-switch"
              type="button"
              role="switch"
              aria-checked={isHighContrast}
              onClick={toggleHighContrast}
              className={`relative h-7 w-12 shrink-0 rounded-full border border-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navBg ${
                isHighContrast ? "bg-white" : "bg-white/10 hover:bg-white/20"
              }`}
              title={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
            >
              <span
                className={`pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-accentYellow shadow transition-[left] duration-200 ease-out ${
                  isHighContrast
                    ? "left-[calc(100%-1.375rem)]"
                    : "left-0.5"
                }`}
                aria-hidden="true"
              />
            </button>
            <label
              htmlFor="high-contrast-switch"
              className="max-w-[5.5rem] cursor-pointer select-none text-center text-[15px] font-medium leading-tight text-white/90 sm:max-w-none sm:text-xs mt-1"
            >
              High Contrast
            </label>
          </div>

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
