"use client";

import { agendaCopy } from "@/content/agendaContent";
import { useLocale } from "@/lib/locale";

export default function SectionAgendaGroups() {
  const copy = agendaCopy[useLocale()];

  return (
    <section
      id="agenda-groups"
      className="section-agenda-groups relative bg-surface-elevated"
      aria-labelledby="agenda-groups-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-5 py-8 md:flex-row md:items-start md:justify-between md:gap-12 md:py-12">
        <h2 id="agenda-groups-heading" className="type-h3 text-text">
          <span className="md:hidden">
            {copy.mobileGroupsTitle ?? copy.groupsTitle}
          </span>
          <span className="hidden md:inline">{copy.groupsTitle}</span>
        </h2>
        <div className="flex w-full flex-col gap-4 md:max-w-[741px]">
          <p className="type-h4 hidden text-text md:block">
            {copy.groupsDescription}
          </p>
          <p className="type-body whitespace-pre-line">
            {copy.mobileGroupsList ?? copy.groupsList}
          </p>
        </div>
      </div>
    </section>
  );
}
