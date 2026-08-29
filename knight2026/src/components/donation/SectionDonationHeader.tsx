"use client";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { donationCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

export default function SectionDonationHeader() {
  const copy = donationCopy[useLocale()];

  return (
    <section
      id="donation-header"
      className="section-donation-header section-compact-page-header section-viewport section-viewport-auto section-page-start relative !border-b-0 !pt-[80px] !pb-0 bg-white md:!pt-[172px] md:!pb-[52px] lg:!pt-[168px] lg:!pb-[48px]"
      aria-labelledby="donation-header-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />

      <Stagger className="section-compact-page-header-content relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-5 py-5 md:gap-4 md:py-7 lg:py-8">
        <StaggerItem className="flex w-full shrink-0 flex-col gap-2">
          <p className="type-caption text-text-muted">{copy.title}</p>
          <h1
            id="donation-header-heading"
            className="type-h2 w-full max-w-[700px] text-text"
          >
            {copy.supportTitle}
          </h1>
          {copy.description ? (
            <h3 className="type-h3 w-full max-w-[700px] text-text">
              {copy.description}
            </h3>
          ) : null}
        </StaggerItem>
      </Stagger>
    </section>
  );
}
