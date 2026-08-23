"use client";

import { Reveal } from "@/components/motion/Reveal";
import linkedinIcon from "@/assets/icons/icon-network-linkedin.svg";
import type { SpeakerGroup, SpeakerProfile } from "@/content/speakersContent";
import { speakersCopy } from "@/content/speakersContent";
import { useLocale } from "@/lib/locale";

function SpeakerProfile({ speaker }: { speaker: SpeakerProfile }) {
  return (
    <li className="min-w-0">
      <div className="flex flex-col gap-3">
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-surface-muted"
          aria-label={`${speaker.name} on LinkedIn`}
        >
          <img
            src={speaker.image.src}
            alt={speaker.imageAlt}
            width={speaker.image.width}
            height={speaker.image.height}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className="flex flex-col gap-1">
          <p className="type-h4 text-text">{speaker.name}</p>
          {speaker.bakgRole ? (
            <p className="type-body text-text-muted">{speaker.bakgRole}</p>
          ) : null}
          <p className="type-body text-text-muted">{speaker.role}</p>
          <p className="type-body text-text-subtle">{speaker.company}</p>
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-1.5 type-caption text-text-subtle transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line"
          >
            <span
              aria-hidden="true"
              className="size-3 shrink-0 bg-text-subtle transition-colors group-hover:bg-text"
              style={{
                WebkitMaskImage: `url(${linkedinIcon.src})`,
                maskImage: `url(${linkedinIcon.src})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </li>
  );
}

function SpeakerGroupRow({
  group,
  isFirst,
}: {
  group: SpeakerGroup;
  isFirst: boolean;
}) {
  return (
    <div
      className={`relative grid w-full grid-cols-1 gap-8 py-8 md:gap-10 md:py-10 lg:grid-cols-3 lg:gap-12 ${isFirst ? "pt-0" : "before:absolute before:left-1/2 before:top-0 before:w-screen before:-translate-x-1/2 before:border-t before:border-line before:content-['']"}`}
    >
      <h2 className="type-h3 text-text lg:col-span-1">{group.title}</h2>
      <ul className="grid w-full list-none grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:col-span-2 lg:gap-x-8 lg:gap-y-14">
        {group.speakers.map((speaker) => (
          <SpeakerProfile key={speaker.id} speaker={speaker} />
        ))}
      </ul>
    </div>
  );
}

export default function SectionSpeakerList() {
  const groups = speakersCopy[useLocale()].groups;

  return (
    <section
      id="speaker-list"
      className="section-speaker-list section-viewport section-viewport-auto !py-0 relative bg-surface-elevated"
      aria-label="Speaker categories"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col px-5 py-8 md:py-12 lg:py-16">
        <Reveal className="flex w-full flex-col">
          {groups.map((group, index) => (
            <SpeakerGroupRow
              key={group.id}
              group={group}
              isFirst={index === 0}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
