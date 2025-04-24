"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type LandingPageContextType = {
  final: boolean;
  setFinal: (value: boolean) => void;
};

// Create the context for the landing page state
const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined
);

//custom hook that returns the context, os a final bool and the setter
export const useLandingPageFinal = () => {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error("useLandingPage must be used within a LandingPageProvider");
  }
  return context;
};

//provider component that wraps the app and provides the context
export const LandingPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [final, setFinal] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    // Show footer on all non-home pages, reset on home page
    if (pathname !== "/") {
      setFinal(true);
    } else {
      setFinal(false);
    }
  }, [pathname]);

  return (
    <LandingPageContext.Provider value={{ final, setFinal }}>
      {children}
    </LandingPageContext.Provider>
  );
};
