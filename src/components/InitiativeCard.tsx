"use client";

import Link from "next/link";
import React from "react";

interface InitiativeCardProps {
  title: string | React.ReactNode;
  desc: string;
  link?: string;
  index: number;
}

export default function InitiativeCard({
  title,
  desc,
  link,
  index,
}: InitiativeCardProps) {
  const href = link
    ? link.startsWith("/")
      ? `/commingle${link}`
      : `/commingle/${link}`
    : null;

  const card = (
    <div
      className={[
        "bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition",
        href ? "cursor-pointer" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );

  return (
    href ? (
      <Link href={href}>{card}</Link>
    ) : (
      card
    )
  );
}

