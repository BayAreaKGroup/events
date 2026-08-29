"use client";

import { agendaCopy } from "@/content/agendaContent";
import EventBadge from "@/components/ui/EventBadge";
import { useLocale } from "@/lib/locale";

export default function SectionAgendaAfterParty() {
  const copy = agendaCopy[useLocale()];

  return (
    <section
      id="agenda-after-party"
      className="section-agenda-after-party relative bg-accent"
      aria-labelledby="agenda-after-party-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-white/25 md:block"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 px-5 py-8 md:gap-12 md:py-12 lg:grid-cols-[371px_741px] lg:py-16">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row">
            {copy.afterPartyBadges.map((badge) => (
              <EventBadge
                key={badge}
                label={badge}
                className="[&_.chip-badge-label]:!text-accent"
              />
            ))}
          </div>
          <h2
            id="agenda-after-party-heading"
            className="type-h3 whitespace-pre-line !text-white"
          >
            {copy.afterPartyTitle}
          </h2>
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <p className="type-h4 whitespace-pre-line !text-white">
            {copy.afterPartyDescription}
          </p>
          {copy.afterPartyBody ? (
            <p className="type-body whitespace-pre-line !text-white/80">
              {copy.afterPartyBody}
            </p>
          ) : null}
          <div className="flex flex-col items-start gap-6">
            <a
              className="group grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-3 text-text"
              href={copy.afterPartyLocationHref}
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="flex size-6 shrink-0 items-center justify-center text-white transition-colors"
                aria-hidden="true"
              >
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <span className="flex flex-col gap-2">
                <span className="type-body inline-flex items-center gap-2 !text-white">
                  {copy.afterPartyLocation}
                  <span aria-hidden="true">↗</span>
                </span>
                <span className="type-body !text-white/70">
                  {copy.afterPartyLocationCity}
                </span>
              </span>
            </a>
            <a
              className="btn btn-ghost-on-accent !text-accent w-fit max-md:w-full"
              href={copy.afterPartyRsvpHref}
              target="_blank"
              rel="noreferrer"
            >
              {copy.afterPartyRsvpLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
