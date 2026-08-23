"use client";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { speakersCopy } from "@/content/speakersContent";
import { useLocale } from "@/lib/locale";

export default function SectionSpeakersHeader() {
  const copy = speakersCopy[useLocale()];

  return (
    <section
      id="speakers-header"
      className="section-speakers-header section-compact-page-header section-viewport section-viewport-auto section-page-start relative bg-white"
      aria-labelledby="speakers-header-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />

      <Stagger className="section-compact-page-header-content relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-5 py-4 md:gap-12 md:py-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:py-8">
        <StaggerItem className="w-full shrink-0 lg:w-[741px]">
          <h1 id="speakers-header-heading" className="type-h2 text-text">
            {copy.headerTitle}
          </h1>
        </StaggerItem>

        <StaggerItem className="w-full shrink-0 lg:w-[371px] lg:pb-1">
          <p className="type-body text-text-muted">{copy.headerDescription}</p>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
