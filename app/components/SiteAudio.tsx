"use client";

import { useEffect, useRef, useState } from "react";

const audioStoppedKey = "artemis-site-audio-stopped";

export default function SiteAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const cancelAutoStartRef = useRef<(() => void) | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStopped, setHasStopped] = useState(false);

  useEffect(() => {
    let wasStopped = false;

    try {
      wasStopped = window.localStorage.getItem(audioStoppedKey) === "true";
    } catch {
      // Continue without persistence when storage is unavailable.
    }

    setHasStopped(wasStopped);

    const audio = new Audio();

    audio.loop = true;
    audio.preload = wasStopped ? "none" : "metadata";
    audio.volume = 0.55;
    audioRef.current = audio;

    if (!wasStopped) {
      audio.src = "/bbcmixkoltsida.mp3";
    }

    const syncPlaying = () => setIsPlaying(!audio.paused);
    const cancelAutoStart = () => {
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
    const startAudio = (event?: Event) => {
      if (event?.target instanceof Node && buttonRef.current?.contains(event.target)) {
        return;
      }
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
    };
    cancelAutoStartRef.current = cancelAutoStart;

    audio.addEventListener("play", syncPlaying);
    audio.addEventListener("play", cancelAutoStart);
    audio.addEventListener("pause", syncPlaying);
    if (!wasStopped) {
      window.addEventListener("pointerdown", startAudio, { once: true });
      window.addEventListener("keydown", startAudio, { once: true });
      startAudio();
    }

    return () => {
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("keydown", startAudio);
      audio.removeEventListener("play", syncPlaying);
      audio.removeEventListener("play", cancelAutoStart);
      audio.removeEventListener("pause", syncPlaying);
      audio.pause();
      audioRef.current = null;
      cancelAutoStartRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    cancelAutoStartRef.current?.();

    if (hasStopped) {
      audio.src = "/bbcmixkoltsida.mp3";
      try {
        window.localStorage.removeItem(audioStoppedKey);
      } catch {
        // Manual playback still works when storage is unavailable.
      }
      setHasStopped(false);
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
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

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleAudio}
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-transparent p-0 text-[#0000ee] underline-offset-4 hover:underline focus-visible:underline sm:gap-3 ${
        hasStopped ? "opacity-45" : ""
      }`}
      aria-label={
        hasStopped ? "Restart audio" : isPlaying ? "Pause audio" : "Start audio"
      }
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
