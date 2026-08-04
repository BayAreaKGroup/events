"use client";

import IconInfo from "@/assets/icons/icon-info.svg";
import ctaGraphicRight from "@/assets/donation/cta-graphic-right.png";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { fadeUpScale, staggerContainerSlow } from "@/lib/motion";
import { DONATION_LINKS } from "@/lib/donationLinks";
import { donationSupportCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

/** Figma section-donation-support 562:7233 — viewport 1440, content 1160 (1200−40) */
export default function SectionDonationSupport() {
  const copy = donationSupportCopy[useLocale()];
  return (
    <section
      id="donation-support"
      className="section-donation-support section-viewport section-viewport-auto relative bg-surface-elevated"
      aria-labelledby="donation-support-heading"
      data-node-id="562:7233"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:7234"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 py-10 md:gap-20 md:py-[100px]"
        data-node-id="562:7235"
      >
        {/* Title 371 / gap 48 / methods 741 */}
        <div
          className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="562:7243"
        >
          <Reveal className="w-full shrink-0 lg:w-[371px]">
            <h2
              id="donation-support-heading"
              className="type-h3 whitespace-pre-line text-text"
              data-node-id="562:7246"
            >
              {copy.heading}
            </h2>
          </Reveal>

          <Stagger
            variants={staggerContainerSlow}
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="562:7323"
          >
            <StaggerItem>
              <div
                className="flex flex-col gap-2 border-b border-line py-6 lg:pt-0"
                data-node-id="562:7324"
              >
                <h3 className="type-h4 text-text" data-node-id="562:7325">
                  {copy.onlineTitle}
                </h3>
                <div className="type-body" data-node-id="562:7326">
                  <p>{copy.onlineBody}</p>
                  <p>{copy.onlineNote}</p>
                </div>
                <div
                  className="flex flex-wrap items-start gap-4 py-3 max-md:flex-col max-md:items-stretch md:gap-6"
                  data-node-id="562:7327"
                >
                  <a
                    href={DONATION_LINKS.paypalVenmo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost type-button inline-flex h-10 max-md:w-full items-center justify-center px-4 py-2 text-center text-sm md:h-11 md:px-[21px] md:py-0 md:text-base"
                    data-node-id="562:7328"
                  >
                    PayPal · Venmo
                  </a>
                  <a
                    href={DONATION_LINKS.zeffy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost type-button inline-flex h-10 max-md:w-full items-center justify-center px-4 py-2 text-center text-sm md:h-11 md:px-[21px] md:py-0 md:text-base"
                    data-node-id="562:7330"
                  >
                    Zeffy
                  </a>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex flex-col gap-2 border-b border-line py-6 text-text"
                data-node-id="562:7332"
              >
                <h3 className="type-h4" data-node-id="562:7333">
                  {copy.checkTitle}
                </h3>
                <div className="type-body" data-node-id="562:7334">
                  <p>{copy.checkBody}</p>
                  <ul className="list-disc space-y-0 pl-[27px]">
                    <li>{copy.payee}</li>
                    <li>{copy.address}</li>
                  </ul>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex flex-col gap-6 border-b border-line py-6 text-text"
                data-node-id="562:7335"
              >
                <h3 className="type-h4" data-node-id="562:7336">
                  {copy.matchingTitle}
                </h3>

                <div
                  className="flex flex-col gap-3 rounded-[12px] border border-line bg-white p-6"
                  data-node-id="562:7337"
                >
                  <h4 className="type-h4" data-node-id="562:7338">
                    {copy.matchingHighlight}
                  </h4>
                  <p className="type-body" data-node-id="562:7339">
                    {copy.matchingHighlightBody}
                  </p>
                </div>

                <div className="type-body" data-node-id="562:7340">
                  <p>{copy.matchingBody}</p>
                  <ul className="list-disc space-y-0 pl-[27px]">
                    <li>{copy.matchingExample}</li>
                    <li>{copy.matchingSearch}</li>
                  </ul>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex flex-col gap-2 border-b border-line py-6 text-text"
                data-node-id="562:7341"
              >
                <h3 className="type-h4" data-node-id="562:7342">
                  {copy.volunteerTitle}
                </h3>
                <p className="type-body" data-node-id="562:7343">
                  {copy.volunteerBody}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex items-start gap-3 rounded-[12px] border border-line px-[25px] py-[13px]"
                data-node-id="562:7344"
              >
                <img
                  src={IconInfo.src}
                  alt=""
                  width={14}
                  height={14}
                  className="mt-[3px] size-[14px] shrink-0"
                  data-node-id="562:7346"
                />
                <p
                  className="type-footer min-w-0 flex-1 leading-[1.4] text-text"
                  data-node-id="562:7351"
                >
                  {copy.taxNote}
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        {/* CTA — Figma 561:5255 (no stroke; graphic blends into #F4F5F9) */}
        <Reveal variants={fadeUpScale} delay={0.08}>
          <div
            className="section-donation-cta relative isolate min-h-[17.5rem] overflow-hidden rounded-[12px] border border-line bg-white sm:min-h-[19rem] md:min-h-[21.125rem]"
            data-node-id="561:5255"
          >
            <img
              src={ctaGraphicRight.src}
              alt=""
              width={579}
              height={306}
              className="donation-cta-graphic-right pointer-events-none absolute bottom-0 right-0 z-0 select-none object-contain object-right-bottom"
              aria-hidden
              loading="lazy"
              decoding="async"
              data-node-id="561:5258"
            />

            <div className="relative z-10 flex w-full max-w-[578px] flex-col items-start gap-8 px-5 py-10 text-left sm:gap-12 sm:px-8 sm:py-12 md:gap-12 md:px-[97px] md:py-[49px]">
              <div className="type-body w-full" data-node-id="561:5257">
                <p>{copy.ctaBody[0]}</p>
                <p className="mt-4">{copy.ctaBody[1]}</p>
              </div>

              <a
                href="https://bayareakgroup.org/events/support-bay-area-k-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-home-cta type-button group inline-flex h-10 max-md:w-full items-center justify-center gap-2 px-4 py-2 text-center text-sm md:h-11 md:px-5 md:py-0 md:text-base"
                data-node-id="561:5301"
              >
                {copy.ctaButton}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
