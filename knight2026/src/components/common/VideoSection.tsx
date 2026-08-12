"use client";

import { useEffect, useRef, useState } from "react";
import { homeCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

type VideoSectionProps = {
  videoSrc: string;
  showBackground?: boolean;
};

export default function VideoSection({
  videoSrc,
  showBackground = true,
}: VideoSectionProps) {
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
      className={`section-video section-viewport section-viewport-auto relative py-6 md:py-8 lg:py-16${showBackground ? " bg-surface-elevated" : ""}`}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-5">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px]">
          <video
            ref={videoRef}
            className="block h-full w-full overflow-hidden object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
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
      </div>
    </section>
  );
}
