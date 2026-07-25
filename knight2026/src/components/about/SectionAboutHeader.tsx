'use client'

import Smooth3DSlideshow from '@/components/common/Smooth3DSlideshow'
import EventBadge from '@/components/ui/EventBadge'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpHero, fadeUpScale, staggerContainerSlow } from '@/lib/motion'

/** Figma section-about-header 562:6754 — viewport 1440, content 1160 (1200−40) */

const tags = ['Founded 2007', 'Non-Profit'] as const

export default function SectionAboutHeader() {
  return (
    <section
      id="about-header"
      className="section-about-header section-viewport section-viewport-auto section-page-start relative overflow-x-clip bg-white"
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
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-12 md:py-20 lg:py-[100px]"
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
              {tags.map((tag) => (
                <EventBadge key={tag} label={tag} />
              ))}
            </div>
          </StaggerItem>

          <StaggerItem variants={fadeUpHero} className="w-full min-w-0">
            <h2
              id="about-header-heading"
              className="type-h1 text-text md:whitespace-nowrap"
              data-node-id="561:5867"
            >
              Bay Area K-Group
            </h2>
          </StaggerItem>

          <StaggerItem className="w-full min-w-0">
            <p
              className="type-body mx-auto w-full max-w-[654px] text-center"
              data-node-id="561:5868"
            >
              Bay Area K-Group(BAKG)은 실리콘밸리 지역에서 테크 분야에 종사하는
              한인들의 자발적 조직입니다. 정기적으로 컨퍼런스와 네트워킹 행사를
              통해 회원들간의 기술 교류와 친목도모를 돕고 있으며, 다양한
              기술분야와 취미에 따라 여러 소모임들이 자율적으로 운영되고
              있습니다.
            </p>
          </StaggerItem>
        </div>

        {/* 80px gap below text — keep slideshow placement */}
        <div className="h-20 w-full shrink-0" aria-hidden />

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
            transition={{ duration: 0.45, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            fitContainer
            className="mx-auto w-full"
          />
        </StaggerItem>
      </Stagger>
    </section>
  )
}
