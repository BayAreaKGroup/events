"use client";

import { Reveal } from "@/components/motion/Reveal";
import asanLogo from "@/assets/sponsors/asan-nanum-foundation.png";
import fastcampusLogo from "@/assets/sponsors/fastcampus.png";
import kcgsfEnLogo from "@/assets/sponsors/kcgsf-en.png";
import kcgsfKoLogo from "@/assets/sponsors/kcgsf-ko.png";
import kicLogo from "@/assets/sponsors/kic-silicon-valley.png";
import kdbLogo from "@/assets/sponsors/kdb-silicon-valley.png";
import likeLionLogo from "@/assets/sponsors/like-lion.png";
import naverD2sfLogo from "@/assets/sponsors/naver-d2sf.png";
import { sponsorCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

const inquiryEmail = "info@bayareakgroup.org";
const sponsorLogos = {
  kic: kicLogo,
  asan: asanLogo,
  fastcampus: fastcampusLogo,
  "kdb-sv": kdbLogo,
  "like-lion": likeLionLogo,
  "naver-d2sf": naverD2sfLogo,
} as const;

export default function SectionSponsor() {
  const locale = useLocale();
  const copy = sponsorCopy[locale];
  return (
    <section
      id="sponsor-list"
      className="section-sponsor section-viewport section-viewport-auto !py-0 relative bg-surface-elevated"
      aria-label="Sponsor categories"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-[2] hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6870"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col px-5 pb-8 pt-0 md:pb-12 lg:pb-16">
        <Reveal className="flex w-full flex-col">
          {copy.tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative grid w-full grid-cols-1 gap-8 py-8 md:gap-10 md:py-10 lg:grid-cols-3 lg:gap-12 ${index === 0 ? "pt-0" : "before:absolute before:left-1/2 before:top-0 before:z-[2] before:w-screen before:-translate-x-1/2 before:border-t before:border-line before:content-['']"} after:absolute after:inset-y-0 after:left-1/2 after:-z-0 after:w-screen after:-translate-x-1/2 after:content-[''] ${tier.id === "gold" || tier.id === "bronze" ? "after:bg-surface-elevated" : "after:bg-white"}`}
            >
              <h2 className="relative z-[1] type-h3 text-text lg:col-span-1">
                {tier.title}
              </h2>
              <ul className="relative z-[1] grid w-full list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:gap-6">
                {tier.sponsors.map((sponsor) => {
                  const logo =
                    sponsor.id === "kcgsf"
                      ? locale === "ko"
                        ? kcgsfKoLogo
                        : kcgsfEnLogo
                      : sponsorLogos[sponsor.id as keyof typeof sponsorLogos];

                  return (
                    <li key={sponsor.id} className="min-w-0">
                      <a
                        href={sponsor.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-[12px] border border-line bg-white px-4 shadow-none transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line focus-visible:ring-offset-2 sm:h-[140px] sm:px-8 lg:h-[153px]"
                      >
                        {logo ? (
                          <img
                            src={logo.src}
                            alt={sponsor.name}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span className="type-body text-center font-medium text-text">
                            {sponsor.name}
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={0.16}
          className="relative -mx-5 px-5 py-8 md:py-12 lg:py-16"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-surface-elevated"
            aria-hidden="true"
          />
          <div className="card-ui sponsor-inquiry-card relative z-[1] flex shrink-0 flex-col gap-6 bg-white p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
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
