"use client";

import { useState } from "react";
import type { ProjectPhoto } from "../gallery";

type ProjectCarouselProps = {
  id?: string;
  images: ProjectPhoto[];
  mediaLinks?: {
    afterPhoto?: number;
    href: string;
    label: string;
  }[];
  variant?: "default" | "nisos";
  title: string;
};

export default function ProjectCarousel({
  id,
  images,
  mediaLinks = [],
  title,
  variant = "default",
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const currentImage = images[index];
  const hasMultipleImages = images.length > 1;
  const currentPhotoNumber = String(index + 1).padStart(2, "0");
  const totalPhotoNumber = String(images.length).padStart(2, "0");
  const caption =
    variant === "nisos"
      ? currentImage.caption ?? "Legend placeholder"
      : `${currentPhotoNumber}/${totalPhotoNumber}`;

  const showPrevious = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  if (variant === "nisos") {
    return (
      <div id={id} className="mb-6 space-y-4" aria-label={`${title} media`}>
        {images.map((image, imageIndex) => {
          const imageCaption = image.caption ?? "Legend placeholder";
          const imageNumber = imageIndex + 1;
          const linksAfterImage = mediaLinks.filter(
            (link) => (link.afterPhoto ?? 1) === imageNumber,
          );

          return (
            <div
              key={image.src}
              className={`space-y-3 ${linksAfterImage.length > 0 ? "pb-6" : ""}`}
            >
              <figure>
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[70vh] w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIndex(imageIndex);
                      setFullscreenOpen(true);
                    }}
                    className="absolute right-1 top-1 z-20 flex h-8 w-8 items-center justify-center border border-black bg-white text-xl leading-none text-black hover:border-[#0000ee] hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                    aria-label="Open image fullscreen"
                  >
                    {"\u26f6"}
                  </button>
                </div>
                <figcaption className="mt-2 text-center text-sm leading-normal text-[#0000ee]">
                  {imageCaption}
                </figcaption>
              </figure>

              {linksAfterImage.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-black bg-white px-3 py-2 text-sm leading-none text-black no-underline hover:border-[#0000ee] hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                >
                  <span aria-hidden="true">{"\u25b6"}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          );
        })}

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
      </div>
    );
  }

  return (
    <figure
      id={id}
      className="mb-6 flex min-h-48 items-center justify-center sm:-ml-24 sm:w-[calc(100%+6rem)]"
      aria-label={`${title} photo gallery`}
    >
      <div className="w-[55%]">
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
          {caption}
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
