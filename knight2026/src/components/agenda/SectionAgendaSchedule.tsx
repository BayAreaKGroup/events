"use client";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { agendaCopy } from "@/content/agendaContent";
import { useLocale } from "@/lib/locale";

const agendaTypeColors: Record<string, string> = {
  ARRIVAL: "#b8d9d8",
  OPENING: "#bdb9e3",
  KEYNOTE: "#e28aa3",
  CONVERSATION: "#aab9d8",
  NETWORKING: "#8fd1d0",
  TALKS: "#d7bce4",
  CLOSING: "#d2d4d8",
};

export default function SectionAgendaSchedule() {
  const copy = agendaCopy[useLocale()];

  return (
    <section
      id="agenda-schedule"
      className="section-agenda-schedule section-viewport section-viewport-auto !py-0 relative bg-white"
      aria-label="Agenda schedule"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-5 pb-8 pt-0 md:gap-12 md:pb-12 lg:gap-16 lg:pb-16">
        <Stagger
          as="ol"
          className="agenda-schedule-list flex w-full flex-col"
          amount={0.08}
        >
          {copy.items.map((item) => (
            <StaggerItem
              as="li"
              key={`${item.startTime}-${item.title}`}
              className="agenda-schedule-row first:border-t-0 grid w-full grid-cols-1 gap-x-4 gap-y-3 border-t border-line py-6 md:grid-cols-[160px_minmax(0,1fr)_max-content] md:gap-x-8 md:gap-y-0 md:py-8 lg:grid-cols-[180px_minmax(0,741px)_minmax(0,1fr)] lg:gap-x-12 lg:py-8"
            >
              <time className="type-caption text-sm pt-1 text-text-muted md:row-start-1 md:text-base">
                {item.startTime}
              </time>
              {item.type ? (
                <span
                  className="agenda-type-label type-caption row-start-2 self-start justify-self-start rounded-[12px] px-2 py-1 text-text md:col-start-3 md:row-start-1 md:justify-self-end"
                  style={{
                    background:
                      agendaTypeColors[item.type] ??
                      "rgb(var(--color-muted-surface))",
                  }}
                >
                  {item.type}
                </span>
              ) : null}
              <div className="flex min-w-0 flex-col gap-3 md:col-start-2 md:row-start-1">
                <h3 className="type-h4 text-text">
                  {item.title.includes(" — ") ? (
                    <>
                      {item.title.split(" — ")[0]}
                      <br className="md:hidden" />
                      {` — ${item.title.split(" — ")[1]}`}
                    </>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.description ? (
                  <p className="type-body">{item.description}</p>
                ) : null}
                {item.speakers?.length ? (
                  <p className="type-body whitespace-pre-line max-md:text-[12px]">
                    {item.speakers.join("\n")}
                  </p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="flex flex-col items-center gap-4">
          <p className="type-body text-center">{copy.scheduleNote}</p>
          <button
            type="button"
            disabled
            className="type-button btn-muted mx-auto inline-flex h-10 cursor-not-allowed items-center justify-center rounded-[12px] border px-4 py-2 text-center opacity-80 md:h-11 md:px-5 md:py-0"
          >
            {copy.downloadLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
