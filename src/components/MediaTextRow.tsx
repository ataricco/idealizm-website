"use client";

import React from "react";

type MediaTextRowProps = {
  media: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  textContainerClassName?: string;
};

export default function MediaTextRow({
  media,
  title,
  children,
  className,
  textContainerClassName,
}: MediaTextRowProps) {
  return (
    <div className={className ?? "flex flex-col md:flex-row items-center"}>
      <div className="w-full md:w-1/4">{media}</div>
      <div className={textContainerClassName ?? "w-full md:w-3/4 md:pl-8 mt-4 md:mt-0"}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
}


