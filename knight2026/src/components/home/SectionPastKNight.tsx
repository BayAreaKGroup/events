'use client'

import img4 from '@/assets/past-knight/new/k-night-4.jpg'
import img7 from '@/assets/past-knight/new/k-night-7.jpg'
import img8 from '@/assets/past-knight/new/k-night-8.jpg'
import img2 from '@/assets/past-knight/new/k-night-2.jpg'
import img1 from '@/assets/past-knight/new/k-night-1.jpg'
import img5 from '@/assets/past-knight/new/k-night-5.jpg'
import img3 from '@/assets/past-knight/new/k-night-3.jpg'
import event7 from '@/assets/past-knight/new/events/event-7.jpg'
import event2 from '@/assets/past-knight/new/events/event-2.jpg'
import event1 from '@/assets/past-knight/new/events/event-1.jpg'
import event6 from '@/assets/past-knight/new/events/event-6.jpg'
import event3 from '@/assets/past-knight/new/events/event-3.jpg'
import event4 from '@/assets/past-knight/new/events/event-4.jpg'
import mobileImg4 from '@/assets/past-knight/mobile/k-night-4.jpg'
import mobileImg7 from '@/assets/past-knight/mobile/k-night-7.jpg'
import mobileImg8 from '@/assets/past-knight/mobile/k-night-8.jpg'
import mobileImg2 from '@/assets/past-knight/mobile/k-night-2.jpg'
import mobileImg1 from '@/assets/past-knight/mobile/k-night-1.jpg'
import mobileImg5 from '@/assets/past-knight/mobile/k-night-5.jpg'
import mobileImg3 from '@/assets/past-knight/mobile/k-night-3.jpg'
import mobileEvent2 from '@/assets/past-knight/mobile/event-2.jpg'
import mobileEvent7 from '@/assets/past-knight/mobile/event-7.jpg'
import mobileEvent1 from '@/assets/past-knight/mobile/event-1.jpg'
import mobileEvent6 from '@/assets/past-knight/mobile/event-6.jpg'
import mobileEvent3 from '@/assets/past-knight/mobile/event-3.jpg'
import mobileEvent4 from '@/assets/past-knight/mobile/event-4.jpg'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpSubtle } from '@/lib/motion'
import { useRef, useState, type PointerEvent } from 'react'
import { homeCopy } from '@/content/siteContent'
import { useLocale } from '@/lib/locale'
import { useIsMobile } from '@/hooks/useMediaQuery'

/** Figma 561:5619 — landscape ~462×347, portrait ~347×462 / 355×462 */
const images = [
  { src: img4, className: 'h-[266px] w-[200px] sm:h-[370px] sm:w-[280px] md:h-[462px] md:w-[347px]', imageClassName: '' },
  { src: img7, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  {
    src: img8,
    className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]',
    imageClassName: 'origin-bottom scale-[1.15] object-bottom',
  },
  { src: img2, className: 'h-[266px] w-[200px] sm:h-[370px] sm:w-[280px] md:h-[462px] md:w-[347px]', imageClassName: '' },
  { src: img1, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  { src: img5, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  {
    src: img3,
    className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]',
    imageClassName: 'origin-bottom scale-[1.15] object-bottom',
  },
  { src: event2, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  { src: event7, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  { src: event1, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  { src: event6, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  { src: event3, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
  { src: event4, className: 'h-[200px] w-[266px] sm:h-[280px] sm:w-[370px] md:h-[347px] md:w-[462px]', imageClassName: '' },
] as const

const mobileImages = [
  mobileImg4,
  mobileImg7,
  mobileImg8,
  mobileImg2,
  mobileImg1,
  mobileImg5,
  mobileImg3,
  mobileEvent2,
  mobileEvent7,
  mobileEvent1,
  mobileEvent6,
  mobileEvent3,
  mobileEvent4,
] as const

const imagesWithMobileSources = images.map((image, index) => ({
  ...image,
  mobileSrc: mobileImages[index],
}))

const loopImages = [...imagesWithMobileSources, ...imagesWithMobileSources]

/** Figma section-past-k-night 561:6267 — viewport 1440, content 1160 (1200−40) */
export default function SectionPastKNight() {
  const copy = homeCopy[useLocale()].past
  const isMobile = useIsMobile()
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ pointerId: -1, x: 0, offset: 0 })

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      !isMobile ||
      (event.pointerType === 'mouse' && event.button !== 0)
    ) {
      return
    }

    dragStart.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      offset: 0,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current.pointerId !== event.pointerId) return

    setDragOffset(
      dragStart.current.offset + event.clientX - dragStart.current.x,
    )
  }

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current.pointerId !== event.pointerId) return

    dragStart.current.pointerId = -1
    setIsDragging(false)
    setDragOffset(0)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <section
      id="past-k-night"
      className="section-past-k-night section-viewport relative bg-surface"
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
        className="section-past-k-night-copy relative z-[1] mx-auto w-full max-w-[1200px] shrink-0 px-5"
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
              {copy.title}
            </h2>
          </StaggerItem>

          <StaggerItem
            className="flex w-full shrink-0 flex-col gap-6 lg:w-[371px]"
            data-node-id="561:5642"
          >
            <p className="type-body" data-node-id="561:5644">
              {copy.description}
            </p>
            <a
              href="https://bayareakgroup.org/category/k-night/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost type-button inline-flex h-10 w-fit max-md:w-full items-center justify-center gap-2 px-4 py-2 text-center text-sm md:h-11 md:px-6 md:py-3 md:text-base"
              data-node-id="561:5645"
            >
              {copy.cta}
            </a>
          </StaggerItem>
        </div>
      </Stagger>

      <Reveal
        className="section-past-k-night-gallery container-img marquee relative z-[1] flex w-full shrink-0 md:mt-0"
        variants={fadeUpSubtle}
        delay={0.1}
        style={{ ['--marquee-duration' as string]: '36s' }}
        aria-hidden="true"
        data-node-id="561:5619"
      >
        <div
          className={[
            'marquee-track last-knight-track items-end gap-6',
            isDragging ? 'is-dragging' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          <div
            className="last-knight-track-content flex items-end gap-6"
            style={{ transform: `translate3d(${dragOffset}px, 0, 0)` }}
          >
            {loopImages.map((image, i) => (
              <div
                key={`${image.src.src}-${i}`}
                className={[
                  'visual-lift relative shrink-0 overflow-hidden bg-text',
                  image.className,
                ].join(' ')}
              >
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={image.mobileSrc.src}
                  />
                  <img
                    src={image.src.src}
                    alt=""
                    className={[
                      'absolute inset-0 size-full object-cover',
                      image.imageClassName,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    width={image.src.width}
                    height={image.src.height}
                    style={{
                      filter: 'saturate(0.92) sepia(0.1) brightness(1.04) contrast(0.96)',
                    }}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </picture>
                <div
                  className="pointer-events-none absolute inset-0 bg-[#f3ddc8]/[0.1] mix-blend-color"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
