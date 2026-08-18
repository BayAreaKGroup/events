"use client";

import { useEffect, useRef } from "react";
import type { StaticImageData } from "next/image";
import ticketEarly from "@/assets/ticket/ticket-early.png";
import ticketRegular from "@/assets/ticket/ticket-regular.png";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import EventBadge from "@/components/ui/EventBadge";
import { ticketCopy } from "@/content/siteContent";
import {
  trackTicketEvent,
  type TicketAnalyticsParams,
} from "@/lib/ticketAnalytics";
import { useLocale } from "@/lib/locale";

/** Figma section-ticket-header 562:6586 — viewport 1440, content 1160 (1200−40) */

type TicketOption = {
  id: string;
  image: StaticImageData;
  imageAlt: string;
  price: string;
  buttonLabel: string;
  variant: "regular" | "early";
};

const ticketOptions: TicketOption[] = [
  {
    id: "early-bird",
    image: ticketEarly,
    imageAlt: "K-Night 2026 Early Bird Ticket",
    price: "$70",
    buttonLabel: "GET EARLY BIRD TICKETS",
    variant: "early",
  },
  {
    id: "regular",
    image: ticketRegular,
    imageAlt: "K-Night 2026 Regular Ticket",
    price: "$80",
    buttonLabel: "Buy regular Ticket",
    variant: "regular",
  },
];

const ticketsOpeningSoon = true;
const ticketDestinationUrl =
  "https://www.zeffy.com/en-US/ticketing/k-night--2026";

function TicketLink({
  analytics,
  children,
  className,
}: {
  analytics: TicketAnalyticsParams;
  children: string;
  className: string;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const hasImpressedRef = useRef(false);

  useEffect(() => {
    const link = linkRef.current;
    if (!link || hasImpressedRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasImpressedRef.current) {
          hasImpressedRef.current = true;
          trackTicketEvent("ticket_impression", analytics);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(link);
    return () => observer.disconnect();
  }, [analytics]);

  return (
    <a
      ref={linkRef}
      href={ticketDestinationUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => trackTicketEvent("ticket_click", analytics)}
    >
      {children}
    </a>
  );
}

export default function SectionTicketHeader() {
  const locale = useLocale();
  const copy = ticketCopy[locale];
  return (
    <section
      id="ticket-header"
      className="section-ticket-header section-viewport section-viewport-auto section-page-start relative bg-white"
      aria-labelledby="ticket-header-heading"
      data-node-id="562:6586"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6587"
      />

      <div
        className="section-text relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 py-8 md:gap-16 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="562:6697"
      >
        {/* Header — title 741 / gap 48 / aside 371 */}
        <Stagger
          className="flex w-full shrink-0 flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="562:6698"
        >
          <StaggerItem
            className="w-full shrink-0 lg:w-[741px]"
            data-node-id="562:6699"
          >
            <div className="flex flex-col gap-4">
              <EventBadge label={copy.badge} />
              <h2
                id="ticket-header-heading"
                className="type-h2 text-text md:whitespace-nowrap"
                data-node-id="562:6700"
              >
                {copy.title}
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem
            className="flex w-full shrink-0 flex-col justify-end lg:ml-auto lg:w-[371px] lg:pt-11"
            data-node-id="562:6701"
          >
            <p className="type-body" data-node-id="562:6703">
              <span className="block">{copy.eventDetails[0]}</span>
              <span className="mt-2 block md:mt-4">
                {copy.eventDetails[1]}
                <br />
                {copy.eventDetails[2]}
              </span>
            </p>
          </StaggerItem>
        </Stagger>

        {/* Ticket options — gap 64 between cards */}
        <Stagger
          className="ticket-options flex w-full shrink-0 flex-col gap-6 md:flex-row md:items-stretch md:gap-10 lg:gap-16"
          amount={0.2}
          data-node-id="562:6710"
        >
          {ticketOptions.map((option, index) => {
            const isEarly = option.variant === "early";

            return (
              <StaggerItem
                key={option.id}
                className="min-h-0 min-w-0 flex-1"
                data-node-id={isEarly ? "562:6719" : "562:6711"}
              >
                <div
                  className={[
                    "surface-card flex h-full min-h-0 flex-col items-center gap-5 px-5 py-8 sm:gap-6 sm:px-8 sm:py-10 md:px-[33px] md:py-[49px]",
                    isEarly ? "bg-surface-elevated" : "bg-white",
                  ].join(" ")}
                >
                  <div className="relative h-[120px] w-full max-w-[500px] shrink overflow-hidden sm:h-[160px] md:h-[220px]">
                    <img
                      src={option.image.src}
                      alt={option.imageAlt}
                      width={500}
                      height={220}
                      className="absolute left-1/2 top-1/2 h-auto w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "low"}
                    />
                  </div>

                  <div className="flex w-full shrink-0 items-end justify-center gap-2 pb-4 md:pb-6">
                    <p className="type-h3 text-text">{copy.prices[index]}</p>
                    <p className="type-caption">{copy.perPerson}</p>
                  </div>

                  <TicketLink
                    analytics={{
                      ticket_type: isEarly ? "early_bird" : "regular",
                      button_location: "ticket_section",
                      language: locale,
                      button_text: isEarly
                        ? copy.earlyBirdButton
                        : ticketsOpeningSoon
                          ? copy.openingSoon
                          : option.buttonLabel,
                      destination_url: ticketDestinationUrl,
                    }}
                    className={[
                      "type-button inline-flex h-10 max-md:w-full shrink-0 items-center justify-center px-4 py-2 text-center text-sm md:h-11 md:px-5 md:py-0 md:text-base",
                      ticketsOpeningSoon && !isEarly
                        ? "cursor-pointer rounded-[12px] border btn-muted"
                        : isEarly
                          ? "btn-home-cta"
                          : "btn-ghost",
                    ].join(" ")}
                  >
                    {isEarly
                      ? copy.earlyBirdButton
                      : ticketsOpeningSoon
                        ? copy.openingSoon
                        : option.buttonLabel}
                  </TicketLink>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
