"use client";

import React from "react";

type ContentBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentBlock({ children, className }: ContentBlockProps) {
  return (
    <div className={className ?? "text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12"}>
      {children}
    </div>
  );
}


