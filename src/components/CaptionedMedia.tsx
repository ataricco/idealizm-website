"use client";

import React from "react";

type CaptionedMediaProps = {
  media: React.ReactNode;
  caption: React.ReactNode;
  containerClassName?: string;
  captionClassName?: string;
};

export default function CaptionedMedia({
  media,
  caption,
  containerClassName,
  captionClassName,
}: CaptionedMediaProps) {
  return (
    <div className={containerClassName ?? "relative"}>
      {media}
      <div
        className={
          captionClassName ??
          "absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 text-sm"
        }
      >
        {caption}
      </div>
    </div>
  );
}


