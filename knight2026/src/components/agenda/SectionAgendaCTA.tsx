"use client";

import { agendaCopy } from "@/content/agendaContent";
import { useLocale } from "@/lib/locale";

export default function SectionAgendaCTA() {
  const locale = useLocale();
  const copy = agendaCopy[locale];

  return (
    <section
      id="agenda-cta"
      className="section-agenda-cta section-viewport section-viewport-auto relative bg-white !py-0"
      aria-labelledby="agenda-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-5 py-10 md:gap-12 md:py-16 lg:grid-cols-[371px_741px] lg:gap-12 lg:py-20">
        <h2 id="agenda-cta-heading" className="sr-only">
          K-Night attendees
        </h2>
        <div className="flex min-w-0 flex-col lg:pt-1">
          <p className="type-h4 text-text">{copy.attendeeDescription}</p>
        </div>
        <div className="flex min-w-0 flex-col lg:pt-1">
          <p className="type-h4 text-text">{copy.attendeeFields}</p>
        </div>
      </div>
    </section>
  );
}
