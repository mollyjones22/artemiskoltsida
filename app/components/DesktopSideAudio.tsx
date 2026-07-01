"use client";

import { useEffect, useRef } from "react";

type ActiveSide = "day" | "night" | null;

export default function DesktopSideAudio() {
  const activeSide = useRef<ActiveSide>(null);
  const pendingSide = useRef<ActiveSide>(null);
  const audioUnlocked = useRef(false);
  const dayAudio = useRef<HTMLAudioElement | null>(null);
  const nightAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!desktopQuery.matches) {
      return;
    }

    const day = new Audio("/day.mp3");
    const night = new Audio("/night.mp3");

    day.loop = true;
    night.loop = true;
    day.preload = "auto";
    night.preload = "auto";
    day.volume = 0.55;
    night.volume = 0.55;

    dayAudio.current = day;
    nightAudio.current = night;

    const stopAudio = (audio: HTMLAudioElement) => {
      audio.pause();
      audio.currentTime = 0;
    };

    const playSide = (side: ActiveSide) => {
      if (!side || activeSide.current === side) {
        return;
      }

      pendingSide.current = side;

      if (!audioUnlocked.current) {
        return;
      }

      activeSide.current = side;

      if (side === "day") {
        stopAudio(night);
        void day.play().catch(() => {
          activeSide.current = null;
        });
      } else {
        stopAudio(day);
        void night.play().catch(() => {
          activeSide.current = null;
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      playSide(event.clientX < window.innerWidth / 2 ? "day" : "night");
    };

    const unlockAudio = () => {
      audioUnlocked.current = true;
      playSide(pendingSide.current);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAudio(day);
        stopAudio(night);
        activeSide.current = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopAudio(day);
      stopAudio(night);
      dayAudio.current = null;
      nightAudio.current = null;
    };
  }, []);

  return null;
}
