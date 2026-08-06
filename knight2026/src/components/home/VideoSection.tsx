"use client";

import { useEffect, useRef, useState } from "react";
import { homeCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

const videoBasePath = "/events/knight2026/videos/knight2023-review";

export default function VideoSection() {
  const copy = homeCopy[useLocale()].video;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (!video.muted && video.paused) {
      try {
        await video.play();
      } catch {
        // Playback may be blocked by the browser.
      }
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;
    video.volume = 1;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.intersectionRatio >= 0.3) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-video relative left-1/2 w-screen max-w-none -translate-x-1/2 bg-surface"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <video
          ref={videoRef}
          className="block h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={`${videoBasePath}.mp4`} type="video/mp4" />
        </video>
        <button
          type="button"
          className="absolute bottom-4 right-4 z-[1] flex size-11 items-center justify-center rounded-full border border-line bg-surface/90 text-text backdrop-blur-sm transition-colors hover:bg-surface"
          onClick={toggleMute}
          aria-label={isMuted ? copy.turnSoundOn : copy.turnSoundOff}
          aria-pressed={!isMuted}
        >
          {isMuted ? (
            <svg
              aria-hidden="true"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="m19 9-6 6" />
              <path d="m13 9 6 6" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
