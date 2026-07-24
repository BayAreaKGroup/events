'use client'

import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import type { CSSProperties } from 'react'

type HeroCell = {
  id: string
  nodeId: string
  /** Text tiles shrink to content; empty tiles fill remaining space */
  flex: 'content' | 'fill'
  label?: string
  style: CSSProperties
}

const rows: {
  id: string
  nodeId: string
  cells: HeroCell[]
}[] = [
  {
    id: 'row-1',
    nodeId: '486:761',
    cells: [
      {
        id: 'title',
        nodeId: '486:762',
        flex: 'content',
        label: 'K-Night 2026',
        style: {
          backgroundImage:
            'linear-gradient(166.63deg, rgb(174, 209, 207) 0%, rgb(214, 221, 213) 100%)',
        },
      },
      {
        id: 'r1-empty',
        nodeId: '486:764',
        flex: 'fill',
        style: {
          backgroundImage:
            'linear-gradient(147.79deg, rgb(149, 139, 192) 2%, rgb(173, 181, 216) 51%, rgb(214, 221, 213) 100%)',
        },
      },
    ],
  },
  {
    id: 'row-2',
    nodeId: '486:769',
    cells: [
      {
        id: 'r2-empty',
        nodeId: '486:770',
        flex: 'fill',
        style: {
          backgroundImage:
            'linear-gradient(162.52deg, rgb(224, 109, 144) 59.2%, rgb(244, 248, 220) 161.3%)',
        },
      },
      {
        id: 'date',
        nodeId: '486:771',
        flex: 'content',
        label: '09.12',
        style: {
          backgroundImage:
            'linear-gradient(154.32deg, rgb(224, 226, 253) 0%, rgb(214, 221, 213) 100%)',
        },
      },
    ],
  },
  {
    id: 'row-3',
    nodeId: '486:765',
    cells: [
      {
        id: 'location',
        nodeId: '486:766',
        flex: 'content',
        label: 'Mountain View',
        style: {
          backgroundImage:
            'linear-gradient(167.76deg, rgb(214, 167, 248) 0%, rgb(214, 221, 213) 100%)',
        },
      },
      {
        id: 'r3-empty',
        nodeId: '486:768',
        flex: 'fill',
        style: {
          backgroundImage:
            'linear-gradient(139.38deg, rgb(215, 219, 191) 2%, rgb(251, 250, 221) 100%)',
        },
      },
    ],
  },
]

export default function SectionHero() {
  return (
    <section
      id="hero"
      className="hidden section-hero section-viewport bg-surface"
      aria-label="K-Night 2026"
      data-node-id="486:760"
    >
      <Stagger className="flex h-full min-h-0 w-full flex-col gap-5" amount={0.15}>
        {rows.map((row) => (
          <StaggerItem
            key={row.id}
            className="flex min-h-0 w-full flex-1 items-stretch gap-5"
            data-node-id={row.nodeId}
          >
            {row.cells.map((cell) => (
              <div
                key={cell.id}
                className={[
                  'hero-tile relative flex h-full min-h-[7.5rem] min-w-0 items-center justify-center overflow-hidden rounded-[4px] sm:min-h-0',
                  cell.label ? '' : 'visual-lift',
                  cell.flex === 'content'
                    ? 'w-fit shrink-0 px-3 sm:px-8 md:px-[60px]'
                    : 'min-w-px flex-1',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={cell.style}
                data-node-id={cell.nodeId}
              >
                {cell.label ? (
                  <p className="type-h1 relative shrink-0 whitespace-nowrap text-text">
                    {cell.label}
                  </p>
                ) : null}
              </div>
            ))}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
