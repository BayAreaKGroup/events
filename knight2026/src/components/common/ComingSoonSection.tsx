"use client";

import Button from "@/components/ui/Button";
import EventBadge from "@/components/ui/EventBadge";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { fadeUpHero, fadeUpScale, staggerContainerSlow } from "@/lib/motion";
import { socialChannels } from "@/lib/socialChannels";
import { comingSoonCopy } from "@/content/siteContent";
import { getLocalizedHref, useLocale } from "@/lib/locale";

type ComingSoonSectionProps = {
  id: string;
  headingId: string;
  headingLevel?: "h1" | "h2";
};

/** Figma 508:2058 — section fills 100svh; footer sits outside */
export default function ComingSoonSection({
  id,
  headingId,
  headingLevel = "h2",
}: ComingSoonSectionProps) {
  const Heading = headingLevel;
  const locale = useLocale();
  const copy = comingSoonCopy[locale];

  return (
    <section
      id={id}
      className="section-coming-soon section-viewport relative items-center justify-center overflow-x-clip px-[var(--space-page-x)] max-md:box-border max-md:h-[100dvh] max-md:min-h-[100dvh] max-md:py-6"
      aria-labelledby={headingId}
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
      />

      <Stagger
        variants={staggerContainerSlow}
        className="relative z-10 flex w-full max-w-[768px] flex-col items-center gap-6 px-4 text-center max-md:gap-4 md:px-10"
      >
        <StaggerItem>
          <EventBadge subdued />
        </StaggerItem>

        <StaggerItem variants={fadeUpHero} className="w-full">
          <Heading
            id={headingId}
            className="type-h2 text-balance text-text md:whitespace-nowrap"
          >
            Coming Soon
          </Heading>
        </StaggerItem>

        <StaggerItem className="w-full pt-6 max-md:pt-2">
          <p className="type-h5 whitespace-pre-line text-text">{copy.intro}</p>
        </StaggerItem>

        <StaggerItem
          variants={fadeUpScale}
          className="flex w-full flex-wrap items-center justify-center gap-3 pt-12 max-md:flex-col max-md:items-stretch max-md:gap-2 max-md:pt-6"
        >
          <Button
            href={getLocalizedHref(locale)}
            variant="ghost"
            className="h-10 w-full whitespace-nowrap px-4 py-2 text-center text-sm md:h-11 md:w-[11rem] md:px-6 md:py-3 md:text-base"
          >
            Back to Home
          </Button>
          <Button
            href={getLocalizedHref(locale, "ticket")}
            variant="accent"
            className="h-10 w-full whitespace-nowrap px-4 py-2 text-center text-sm md:h-11 md:w-[11rem] md:px-6 md:py-3 md:text-base"
          >
            Get a Ticket
          </Button>
        </StaggerItem>

        <StaggerItem className="flex w-full flex-col items-center pt-16 max-md:pt-8">
          <p className="type-body whitespace-pre-line">{copy.followIntro}</p>
          <ul className="mt-0 flex max-w-full flex-wrap items-center justify-center gap-1 sm:gap-[6.5px]">
            {socialChannels.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-[12px] transition-opacity hover:opacity-70 active:opacity-70 md:size-[52px]"
                  aria-label={social.label}
                >
                  <img
                    src={social.icon}
                    alt=""
                    width={52}
                    height={52}
                    className="asset-on-dark size-7 object-contain md:size-[52px]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
