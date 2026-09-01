"use client";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { sponsorCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

export default function SectionSponsorsHeader() {
  const copy = sponsorCopy[useLocale()];

  return (
    <section
      id="sponsors-header"
      className="section-sponsors-header section-compact-page-header section-viewport section-viewport-auto section-page-start relative !border-b-0 !pt-[80px] !pb-0 bg-white md:!pt-[172px] md:!pb-[52px] lg:!pt-[168px] lg:!pb-[48px]"
      aria-labelledby="sponsors-header-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />

      <Stagger className="section-compact-page-header-content relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col px-5 py-5 md:py-7 lg:py-8">
        <StaggerItem className="w-full shrink-0 lg:w-[741px]">
          <h1
            id="sponsors-header-heading"
            className="type-h2 whitespace-pre-line text-text max-md:whitespace-normal"
          >
            <span className="hidden md:inline">{copy.headerTitle}</span>
            <span className="whitespace-pre-line md:hidden">
              {copy.mobileHeaderTitle}
            </span>
          </h1>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
