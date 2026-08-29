"use client";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { agendaCopy } from "@/content/agendaContent";
import { useLocale } from "@/lib/locale";

export default function SectionAgendaHeader() {
  const copy = agendaCopy[useLocale()];

  return (
    <section
      id="agenda-header"
      className="section-agenda-header section-compact-page-header section-viewport section-viewport-auto section-page-start relative !border-b-0 !pt-[80px] !pb-0 bg-white md:!pt-[172px] md:!pb-[52px] lg:!pt-[168px] lg:!pb-[48px]"
      aria-labelledby="agenda-header-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />
      <Stagger className="section-compact-page-header-content relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-5 py-5 md:gap-4 md:py-7 lg:py-8">
        <StaggerItem className="flex w-full shrink-0 flex-col gap-2">
          <p className="type-caption text-text-muted">{copy.headerTitle}</p>
          <h1 id="agenda-header-heading" className="type-h2 text-text">
            {copy.headerDescription}
          </h1>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
