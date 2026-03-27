"use client";

import React from "react";

type PageHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

export default function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <header className={className ?? "pt-40 text-center py-16 px-6 bg-pageHeaderBg text-pageHeaderText shadow-md"}>
      <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">{title}</h1>
      {subtitle ? (
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">{subtitle}</p>
      ) : null}
    </header>
  );
}


