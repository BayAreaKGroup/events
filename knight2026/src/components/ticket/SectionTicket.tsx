'use client'

import IconArrowMuted from '@/assets/icons/icon-arrow-muted.svg'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpSubtle } from '@/lib/motion'

/** Figma section-ticket 562:6728 — viewport 1440, content 1160 (1200−40) */

const noticeIntro =
  'K-Night에 관심을 가져주셔서 감사합니다. 본 행사는 사전 예약제로 운영되며, 원활한 진행을 위해 아래 안내 사항을 반드시 확인해 주시기 바랍니다.'

const noticeItems = [
  {
    title: '티켓',
    description: '모든 티켓에는 식사 및 음료가 포함되어 있습니다.',
  },
  {
    title: '좌석',
    description: '본 행사는 지정 좌석이 없는 자유석 행사입니다.',
  },
  {
    title: '매진 유의',
    description:
      '준비된 티켓이 조기에 마감 될 수 있으니 구매를 서둘러 주세요.',
  },
  {
    title: '사전 예매 및 환불',
    description:
      ' 9/10(목) 오후 5시까지만 가능합니다.',
  },
  {
    title: '현장 판매 없음',
    description:
      '모든 티켓은 사전 구매로만 판매되며, 행사 당일 현장 판매는 진행하지 않습니다.',
  },
  {
    title: '미성년자 입장 불가',
    description: '본 행사에는 미성년자가 동반 및 입장할 수 없습니다.(No Minors Allowed)',
  },
  {
    title: '진행 언어',
    description: '본 행사는 한국어로 진행되며, 부분적으로 영어를 사용합니다.',
  },
  {
    title: '스트리밍 및 녹화본 미제공',
    description:
      'K-Night은 유튜브 스트리밍 및 행사 후 녹화본을 공유하지 않습니다. 모든 세션은 오직 행사 당일 현장에서만 공개됩니다.',
  },
] as const

const carpoolIntro =
  'K-Night 행사장까지 교통편이 불편하신 분들을 위해 참가자 간 카풀을 지원합니다. 주변 참여자들과 매칭을 원하시는 분들은 아래 공유 리스트를 이용해 주세요.'

export default function SectionTicket() {
  return (
    <section
      id="ticket"
      className="section-ticket section-viewport section-viewport-auto relative bg-[#F8F8FA]"
      aria-labelledby="ticket-notice-heading"
      data-node-id="562:6728"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:6729"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-5 py-12 md:gap-20 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="561:5110"
      >
        {/* section-notice — title 371 / gap 48 / content 741 */}
        <Reveal
          className="section-notice flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="561:5111"
        >
          <div
            className="w-full shrink-0 lg:w-[371px]"
            data-node-id="561:5112"
          >
            <h3
              id="ticket-notice-heading"
              className="type-h3 text-text"
              data-node-id="561:5114"
            >
              Notice
            </h3>
          </div>

          <div
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="561:5115"
          >
            <p className="type-h4 text-text" data-node-id="561:5117">
              {noticeIntro}
            </p>

            <Stagger as="dl" className="flex flex-col" amount={0.1}>
              {noticeItems.map((item) => (
                <StaggerItem
                  key={item.title}
                  as="div"
                  className="flex flex-col gap-2 border-b border-line py-6"
                >
                  <dt className="type-h4 text-text">{item.title}</dt>
                  <dd className="type-body">{item.description}</dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* section-carpool — title 371 / gap 48 / content 741 */}
        <Reveal
          variants={fadeUpSubtle}
          delay={0.12}
          className="section-carpool flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="561:5137"
        >
          <div
            className="w-full shrink-0 lg:w-[371px]"
            data-node-id="561:5138"
          >
            <h3
              id="ticket-carpool-heading"
              className="type-h3 text-text"
              data-node-id="561:5140"
            >
              Carpool
            </h3>
          </div>

          <div
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="561:5141"
          >
            <p className="type-h4 text-text" data-node-id="561:5144">
              {carpoolIntro}
            </p>

            <button
              type="button"
              className="btn-ghost type-button inline-flex h-10 w-fit items-center gap-2 px-4 py-2 text-sm md:h-11 md:px-5 md:text-base"
              data-node-id="561:5145"
            >
              Coming soon
              <img
                src={IconArrowMuted.src}
                alt=""
                width={15}
                height={15}
                className="size-[15px] shrink-0"
                aria-hidden
              />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
