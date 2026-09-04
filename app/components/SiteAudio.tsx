"use client";

import { useEffect, useRef, useState } from "react";

const audioStoppedKey = "artemis-site-audio-stopped";

export default function SiteAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStopped, setHasStopped] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(audioStoppedKey) === "true") {
        setHasStopped(true);
        return;
      }
    } catch {
      // Continue without persistence when storage is unavailable.
    }

    const audio = new Audio("/bbcmixkoltsida.mp3");

    audio.loop = true;
    audio.preload = "metadata";
    audio.volume = 0.55;
    audioRef.current = audio;

    const syncPlaying = () => setIsPlaying(!audio.paused);
    const startAudio = () => {
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
    };

    audio.addEventListener("play", syncPlaying);
    audio.addEventListener("pause", syncPlaying);
    window.addEventListener("pointerdown", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });

    startAudio();

    return () => {
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("keydown", startAudio);
      audio.removeEventListener("play", syncPlaying);
      audio.removeEventListener("pause", syncPlaying);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
      try {
        window.localStorage.setItem(audioStoppedKey, "true");
      } catch {
        // The stop still applies for this session when storage is unavailable.
      }
      setHasStopped(true);
    }
  };

  if (hasStopped) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleAudio}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-transparent p-0 text-[#0000ee] underline-offset-4 hover:underline focus-visible:underline sm:gap-3"
      aria-label={isPlaying ? "Pause audio" : "Resume audio"}
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
        {"♪₊˚⊘"}
      </span>
    </button>
  );
}
