"use client";

import { Reveal } from "@/components/motion/Reveal";
import { sponsorCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

/** Figma section-sponsor 562:6869 — viewport 1440, content 1160 */

const inquiryEmail = "info@bayareakgroup.org";

export default function SectionSponsor() {
  const copy = sponsorCopy[useLocale()];
  return (
    <section
      id="sponsor"
      className="section-sponsor section-viewport relative h-[100svh] min-h-[100svh] overflow-x-clip bg-white"
      aria-labelledby="sponsor-heading"
      data-node-id="562:6869"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6870"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center gap-6 px-5 py-8 md:gap-16 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="562:6871"
      >
        <Reveal className="shrink-0" data-node-id="562:6872">
          <h2
            id="sponsor-heading"
            className="type-h2 max-w-[741px] whitespace-pre-line text-text"
            data-node-id="562:6874"
          >
            {copy.title}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="card-ui bg-surface-muted flex shrink-0 flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <h3 className="type-h5 text-text">{copy.subtitle}</h3>
              <p className="type-body max-w-[42rem] text-pretty text-text-muted">
                {copy.body}
              </p>
            </div>

            <a
              href={`mailto:${inquiryEmail}`}
              className="btn-accent type-button inline-flex h-10 w-fit max-md:w-full shrink-0 items-center justify-center gap-2 rounded-[12px] px-4 py-2 text-center text-sm md:h-11 md:px-6 md:py-3 md:text-base"
            >
              {copy.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
