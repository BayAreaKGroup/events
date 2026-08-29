"use client";

import Smooth3DSlideshow from "@/components/common/Smooth3DSlideshow";
import EventBadge from "@/components/ui/EventBadge";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { fadeUpHero, fadeUpScale, staggerContainerSlow } from "@/lib/motion";
import { aboutCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

/** Figma section-about-header 562:6754 — viewport 1440, content 1160 (1200−40) */

export default function SectionAboutHeader() {
  const copy = aboutCopy[useLocale()];
  return (
    <section
      id="about-header"
      className="section-about-header section-viewport section-viewport-auto section-page-start relative !pt-[80px] !pb-0 overflow-x-clip bg-white md:!pt-[172px] md:!pb-[52px] lg:!pt-[168px] lg:!pb-[48px]"
      aria-labelledby="about-header-heading"
      data-node-id="562:6754"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6755"
      />

      <Stagger
        variants={staggerContainerSlow}
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-5 md:py-7 lg:py-8"
        data-node-id="562:6796"
      >
        {/* Text block — Figma container 784, gap 32 */}
        <div
          className="flex w-full max-w-[784px] flex-col items-center gap-6 text-center md:gap-8"
          data-node-id="561:5856"
        >
          <StaggerItem className="flex w-full flex-col items-center justify-end">
            <div
              className="flex flex-wrap items-start justify-center gap-4"
              data-node-id="561:5858"
            >
              {copy.tags.map((tag) => (
                <EventBadge key={tag} label={tag} />
              ))}
            </div>
          </StaggerItem>

          <StaggerItem variants={fadeUpHero} className="w-full min-w-0">
            <h2
              id="about-header-heading"
              className="type-h2 text-text md:whitespace-nowrap"
              data-node-id="561:5867"
            >
              Bay Area K-Group
            </h2>
          </StaggerItem>

          <StaggerItem className="w-full min-w-0">
            <p
              className="type-body mx-auto w-full max-w-[654px] whitespace-pre-line text-center"
              data-node-id="561:5868"
            >
              {copy.body}
            </p>
          </StaggerItem>
        </div>

        {/* Mobile spacing follows the 24px rhythm; larger layouts keep 80px. */}
        <div className="h-6 w-full shrink-0 md:h-20" aria-hidden />

        <StaggerItem
          variants={fadeUpScale}
          className="container-images relative -mx-5 flex w-[calc(100%+2.5rem)] min-w-0 max-w-none shrink-0 justify-center md:mx-0 md:w-full md:max-w-full"
          data-name="container-images"
        >
          <Smooth3DSlideshow
            showTitle={false}
            cardWidth={400}
            cardHeight={400}
            radius={12}
            opacity={100}
            sideTilt={0}
            autoplay
            autoplayDirection="rightToLeft"
            mobileSideTilt={0}
            transition={{
              duration: 0.45,
              delay: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            fitContainer
            className="mx-auto w-full"
          />
        </StaggerItem>
      </Stagger>
    </section>
  );
}
