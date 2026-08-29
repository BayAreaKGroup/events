"use client";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { speakersCopy } from "@/content/speakersContent";
import { useLocale } from "@/lib/locale";

export default function SectionSpeakersHeader() {
  const copy = speakersCopy[useLocale()];

  return (
    <section
      id="speakers-header"
      className="section-speakers-header section-compact-page-header section-viewport section-viewport-auto section-page-start relative !border-b-0 !pt-[80px] !pb-0 bg-white md:!pt-[172px] md:!pb-[52px] lg:!pt-[168px] lg:!pb-[48px]"
      aria-labelledby="speakers-header-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-[2] hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />

      <Stagger className="section-compact-page-header-content relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-5 py-5 md:gap-4 md:py-7 lg:py-8">
        <StaggerItem className="flex w-full shrink-0 flex-col gap-2">
          <p className="type-caption text-text-muted">{copy.headerTitle}</p>
          <h1
            id="speakers-header-heading"
            className="type-h2 whitespace-pre-line text-text md:whitespace-normal"
          >
            {copy.headerDescription}
          </h1>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
