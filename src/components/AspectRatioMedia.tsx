"use client";

import React from "react";

type AspectRatioMediaProps = {
  children: React.ReactNode;
  /** e.g. 56.25% for 16:9 */
  paddingBottom?: string;
  outerClassName?: string;
  innerClassName?: string;
};

export default function AspectRatioMedia({
  children,
  paddingBottom,
  outerClassName,
  innerClassName,
}: AspectRatioMediaProps) {
  return (
    <div className={outerClassName ?? "max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"}>
      <div
        className={innerClassName ?? "w-full"}
        style={{ position: "relative", paddingBottom: paddingBottom ?? "56.25%", height: 0 }}
      >
        {children}
      </div>
    </div>
  );
}


