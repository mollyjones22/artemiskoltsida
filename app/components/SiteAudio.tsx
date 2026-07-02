"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/bbcmixkoltsida.mp3");

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.55;
    audioRef.current = audio;

    const syncPlaying = () => setIsPlaying(!audio.paused);
    const playAudio = () => {
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
    };

    audio.addEventListener("play", syncPlaying);
    audio.addEventListener("pause", syncPlaying);
    window.addEventListener("pointerdown", playAudio, { once: true });
    window.addEventListener("keydown", playAudio, { once: true });

    playAudio();

    return () => {
      window.removeEventListener("pointerdown", playAudio);
      window.removeEventListener("keydown", playAudio);
      audio.removeEventListener("play", syncPlaying);
      audio.removeEventListener("pause", syncPlaying);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const stopAudio = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <button
      type="button"
      onClick={stopAudio}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-transparent p-0 text-[#0000ee] underline-offset-4 hover:underline focus-visible:underline sm:gap-3"
      aria-label="Stop audio"
      aria-pressed={isPlaying}
    >
      <img
        src="/artlogo.png"
        alt=""
        className={`block h-16 w-16 object-contain transition-opacity duration-200 sm:h-20 sm:w-20 ${
          isPlaying ? "opacity-100" : "opacity-55"
        }`}
      />
      <span className="text-xl leading-none sm:text-2xl" aria-hidden="true">
        {")))"}
      </span>
    </button>
  );
}
