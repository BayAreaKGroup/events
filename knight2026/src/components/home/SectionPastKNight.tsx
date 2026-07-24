'use client'

import img1 from '@/assets/past-knight/img1.jpg'
import img2 from '@/assets/past-knight/img2.jpg'
import img3 from '@/assets/past-knight/img3.jpg'
import img4 from '@/assets/past-knight/img4.jpg'
import img5 from '@/assets/past-knight/img5.jpg'
import img6 from '@/assets/past-knight/img6.jpg'
import IconArrow from '@/assets/icons/icon-arrow.svg'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpSubtle } from '@/lib/motion'

/** Figma 561:5619 — landscape ~462×347, portrait ~347×462 / 355×462 */
const images = [
  { src: img1, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]' },
  { src: img2, className: 'h-[266px] w-[200px] sm:h-[370px] sm:w-[280px] md:h-[462px] md:w-[347px]' },
  { src: img3, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]' },
  { src: img4, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]' },
  { src: img5, className: 'h-[266px] w-[200px] sm:h-[370px] sm:w-[280px] md:h-[462px] md:w-[355px]' },
  { src: img6, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]' },
] as const

const loopImages = [...images, ...images]

/** Figma section-past-k-night 561:6267 — viewport 1440, content 1160 (1200−40) */
export default function SectionPastKNight() {
  return (
    <section
      id="past-k-night"
      className="section-past-k-night section-viewport relative bg-[#ffffff]"
      aria-labelledby="past-k-night-heading"
      data-node-id="561:6267"
    >
      {/* Decorative vertical strokes — full section height including area below images */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="561:6268"
      />

      <Stagger
        className="relative z-[1] mx-auto w-full max-w-[1200px] shrink-0 px-5"
        data-node-id="561:5639"
      >
        <div
          className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="561:5639-inner"
        >
          <StaggerItem
            className="w-full shrink-0 lg:w-[741px]"
            data-node-id="561:5640"
          >
            <h2
              id="past-k-night-heading"
              className="type-h2 text-text md:whitespace-nowrap"
              data-node-id="561:5641"
            >
              K-Night Highlights
            </h2>
          </StaggerItem>

          <StaggerItem
            className="flex w-full shrink-0 flex-col gap-6 lg:w-[371px]"
            data-node-id="561:5642"
          >
            <p className="type-body" data-node-id="561:5644">
              Explore highlights from previous years.
            </p>
            <a
              href="https://bayareakgroup.org/category/k-night/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost type-button inline-flex h-11 w-fit items-center gap-2 px-6 py-3"
              data-node-id="561:5645"
            >
              View more
              <img
                src={IconArrow.src}
                alt=""
                width={15}
                height={15}
                className="size-[15px] shrink-0 opacity-70"
                aria-hidden
                style={{ filter: 'brightness(0) saturate(100%)' }}
              />
            </a>
          </StaggerItem>
        </div>
      </Stagger>

      <Reveal
        className="container-img marquee relative z-[1] flex w-full shrink-0 md:mt-0"
        variants={fadeUpSubtle}
        delay={0.1}
        aria-hidden="true"
        data-node-id="561:5619"
      >
        <div className="marquee-track last-knight-track items-end gap-6">
          {loopImages.map((image, i) => (
            <div
              key={`${image.src.src}-${i}`}
              className={[
                'visual-lift relative shrink-0 overflow-hidden bg-text',
                image.className,
              ].join(' ')}
            >
              <img
                src={image.src.src}
                alt=""
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-black/[0.06]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
