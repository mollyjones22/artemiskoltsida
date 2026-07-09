"use client";

import { useState } from "react";
import type { ProjectPhoto } from "../gallery";

type ProjectCarouselProps = {
  id?: string;
  images: ProjectPhoto[];
  variant?: "default" | "nisos";
  title: string;
};

export default function ProjectCarousel({
  id,
  images,
  title,
  variant = "default",
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const currentImage = images[index];
  const hasMultipleImages = images.length > 1;
  const currentPhotoNumber = String(index + 1).padStart(2, "0");
  const totalPhotoNumber = String(images.length).padStart(2, "0");

  const showPrevious = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <figure
      id={id}
      className={`mb-6 flex min-h-48 items-center justify-center ${
        variant === "nisos" ? "" : "sm:-ml-24 sm:w-[calc(100%+6rem)]"
      }`}
      aria-label={`${title} photo gallery`}
    >
      <div className={variant === "nisos" ? "w-full" : "w-[55%]"}>
        <div className="relative">
          {hasMultipleImages ? (
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 px-2 py-4 text-3xl leading-none text-black hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
              aria-label="Previous photo"
            >
              {"<"}
            </button>
          ) : null}

          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[70vh] w-full object-contain px-8"
          />

          {hasMultipleImages ? (
            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 px-2 py-4 text-3xl leading-none text-black hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
              aria-label="Next photo"
            >
              {">"}
            </button>
          ) : null}
        </div>
        <figcaption className="mt-2 text-center text-sm leading-normal text-[#0000ee]">
          {currentPhotoNumber}/{totalPhotoNumber}
        </figcaption>
      </div>
    </figure>
  );
}
