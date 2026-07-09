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
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
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

          {variant === "nisos" ? (
            <button
              type="button"
              onClick={() => setFullscreenOpen(true)}
              className="absolute right-1 top-1 z-20 flex h-8 w-8 items-center justify-center border border-black bg-white text-xl leading-none text-black hover:border-[#0000ee] hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
              aria-label="Open image fullscreen"
            >
              {"\u26f6"}
            </button>
          ) : null}

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
          {variant === "nisos"
            ? "Imaginary recipe handwritten by Eleni Papadopoulou, designed and aged by Molly"
            : `${currentPhotoNumber}/${totalPhotoNumber}`}
        </figcaption>
      </div>

      {fullscreenOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} fullscreen image`}
        >
          <button
            type="button"
            onClick={() => setFullscreenOpen(false)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-black bg-white text-2xl leading-none text-black hover:border-[#0000ee] hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
            aria-label="Close fullscreen image"
          >
            {"\u00d7"}
          </button>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[92vh] max-w-[96vw] object-contain"
          />
        </div>
      ) : null}
    </figure>
  );
}
