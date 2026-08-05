"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { aboutCopy } from "@/content/siteContent";
import { useLocale } from "@/lib/locale";

/** Figma section-team 562:6820 — viewport 1440, content 1160 (1200−40)
 *  Editorial list layout: typography + spacing, no profile cards.
 */

type TeamMember = {
  name: string;
  role?: string;
};

function TeamMemberRow({ member }: { member: TeamMember }) {
  return (
    <li className="min-w-0">
      <div className="flex flex-col gap-1">
        <p className="type-body text-pretty text-text">{member.name}</p>
        {member.role ? (
          <p className="type-caption text-text-muted">{member.role}</p>
        ) : null}
      </div>
    </li>
  );
}

export default function SectionTeam() {
  const copy = aboutCopy[useLocale()];
  return (
    <section
      id="team"
      className="section-team section-viewport section-viewport-auto relative overflow-x-clip bg-[#FAFAF8]"
      aria-labelledby="team-heading"
      data-node-id="562:6820"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-[rgba(107,107,107,0.19)] lg:block"
        aria-hidden
        data-node-id="562:6821"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-5 py-8 md:gap-20 md:py-20 lg:gap-24 lg:py-[100px]"
        data-node-id="562:6822"
      >
        <Stagger
          className="flex w-full shrink-0 flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
          data-node-id="562:6834"
        >
          <StaggerItem
            className="w-full shrink-0 lg:max-w-[741px]"
            data-node-id="562:6835"
          >
            <h2
              id="team-heading"
              className="type-h2 text-text md:whitespace-nowrap"
              data-node-id="562:6836"
            >
              {copy.teamTitle}
            </h2>
          </StaggerItem>

          <StaggerItem
            className="w-full shrink-0 lg:max-w-[371px]"
            data-node-id="562:6837"
          >
            <p className="type-body text-text-muted" data-node-id="562:6839">
              {copy.teamDescription}
            </p>
          </StaggerItem>
        </Stagger>

        <Reveal
          className="flex w-full flex-col"
          delay={0.1}
          data-node-id="561:5316"
        >
          {copy.teamGroups.map((group, groupIndex) => (
            <div
              key={`${group.caption}-${group.heading}-${groupIndex}`}
              className={[
                "flex w-full flex-col gap-2 py-10 md:py-12",
                groupIndex === 0 ? "pt-0 md:pt-0" : "",
                groupIndex === copy.teamGroups.length - 1 ? "pb-0 md:pb-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <p
                className="type-caption text-text-muted"
                data-node-id={groupIndex === 0 ? "561:5319" : "561:5346"}
              >
                {group.caption}
              </p>

              {/* Heading + names share the same top line (1 : 2) */}
              <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-12">
                <h3 className="type-h5 w-full text-text lg:col-span-1">
                  {group.heading}
                </h3>

                <ul className="grid w-full list-none grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
                  {group.members.map((member, memberIndex) => (
                    <TeamMemberRow
                      key={`${group.heading}-${groupIndex}-${memberIndex}`}
                      member={member}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
