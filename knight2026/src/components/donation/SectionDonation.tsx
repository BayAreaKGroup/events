'use client'

import card01 from '@/assets/donation/card-01.png'
import card02 from '@/assets/donation/card-02.png'
import card03 from '@/assets/donation/card-03.png'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { staggerContainerSlow } from '@/lib/motion'
import { DONATION_LINKS } from '@/lib/donationLinks'

/** Figma section-donation 570:89 / cards 570:117 — viewport 1440, content 1160 */
const benefits = [
  {
    title: '열린 커뮤니티 유지',
    description:
      '실리콘밸리에서 테크 관련 분야에 종사하는 한인이라면 누구나 가입비 없이 참여할 수 있는 기회의 장 제공',
    image: card01,
    artBg: '#F2F6F3',
    nodeId: '570:118',
  },
  {
    title: '전문 소모임 지원',
    description:
      '급변하는 테크 트렌드에 맞춘 직군별·기술별 전문 네트워크 활성화',
    image: card02,
    artBg: '#F3F6FF',
    nodeId: '570:137',
  },
  {
    title: '나눔과 연결',
    description: '다음 세대 한인 인재들에게 실리콘밸리의 노하우와 기회 전달',
    image: card03,
    artBg: '#F9F5FF',
    nodeId: '570:159',
  },
] as const

export default function SectionDonation() {
  return (
    <section
      id="donation"
      className="section-donation section-viewport section-viewport-auto section-page-start relative bg-white"
      aria-labelledby="donation-heading"
      data-node-id="570:89"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="570:90"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 py-12 md:gap-20 md:py-20 lg:gap-20 lg:py-[100px]"
        data-node-id="570:91"
      >
        {/* Header — title 741 / gap 48 / aside 371 */}
        <Stagger
          className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="570:92"
        >
          <StaggerItem
            className="w-full shrink-0 lg:w-[741px]"
            data-node-id="570:93"
          >
            <h2
              id="donation-heading"
              className="type-h2 text-text"
              data-node-id="570:94"
            >
              Donation
            </h2>
          </StaggerItem>

          <StaggerItem
            className="flex w-full shrink-0 flex-col justify-end lg:ml-auto lg:w-[371px]"
            data-node-id="570:95"
          >
            <p className="type-body" data-node-id="570:97">
              K-Group은 여러분의 후원으로 운영되는 비영리 단체입니다. 편리하신
              방법으로 따뜻한 마음을 전해 주세요.
            </p>
          </StaggerItem>
        </Stagger>

        {/* Intro — left 371 / gap 48 / right 741 */}
        <Reveal
          className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          delay={0.08}
          data-node-id="570:99"
        >
          <div className="w-full shrink-0 lg:w-[371px]" data-node-id="570:100">
            <h3 className="type-h3 text-text" data-node-id="570:102">
              Together, We Grow
            </h3>
          </div>

          <div
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="570:103"
          >
            <div className="flex flex-col gap-3" data-node-id="570:104">
              <p className="type-h4 text-text" data-node-id="570:105">
                Bay Area K-Group은 후원 규모와 관계없이 개인 및 기업 여러분의
                소중한 후원을 언제나 환영합니다.
              </p>
              <div className="type-body space-y-4" data-node-id="570:106">
                <p>
                  Bay Area K-Group(BAKG)은 2007년부터 회원들의 자발적인 참여와
                  선의(Goodwill)로 성장해 온 501(c)(3) 비영리 단체입니다. 가입비
                  없이 운영되는 K-Group이 지난 19년간 실리콘밸리 한인 테크 관련
                  분야 종사자들을 위한 다양한 세미나와 네트워킹 모임은 물론 AI,
                  반도체, 바이오, 모빌리티, 디자인 등 직군별 소모임을 이어올 수
                  있었던 것은 모두 여러분의 후원 덕분이었습니다.
                </p>
                <p>
                  여러분의 후원은 단순한 기부가 아닙니다. 오늘 K-Group 또는
                  K-Night에서 나눈 인사와 영감이 내일의 기회로 이어지도록
                  &apos;단단한 테크 생태계&apos;를 만드는 일입니다.
                </p>
              </div>
            </div>

            <div
              className="flex flex-wrap items-start gap-4 py-3 md:gap-6"
              data-node-id="570:107"
            >
              <a
                href={DONATION_LINKS.paypalVenmo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost type-button inline-flex h-11 items-center justify-center px-[21px]"
                data-node-id="570:108"
              >
                PayPal · Venmo
              </a>
              <a
                href={DONATION_LINKS.zeffy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost type-button inline-flex h-11 items-center justify-center px-[21px]"
                data-node-id="570:110"
              >
                Zeffy
              </a>
              <a
                href={DONATION_LINKS.getInTouch}
                className="btn-ghost type-button inline-flex h-11 items-center justify-center px-[21px]"
                data-node-id="570:112"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Reveal>

        {/* Impact — left title 371 / gap 48 / cards 741 */}
        <div
          className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="570:179"
        >
          <Reveal className="w-full shrink-0 lg:w-[371px]" data-node-id="570:180">
            <h3 className="type-h3 text-text" data-node-id="570:182">
              여러분의 후원이 만드는 변화
            </h3>
          </Reveal>

          <Stagger
            as="ul"
            variants={staggerContainerSlow}
            className="grid w-full min-w-0 list-none grid-cols-1 items-stretch gap-[18px] sm:grid-cols-2 lg:w-[741px] lg:grid-cols-3 lg:gap-[18px]"
            data-node-id="570:117"
          >
            {benefits.map((benefit, index) => (
              <StaggerItem as="li" key={benefit.title} className="h-full min-w-0">
                <article
                  className="flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-white"
                  data-node-id={benefit.nodeId}
                >
                  <div
                    className="relative h-[92px] w-full shrink-0 overflow-hidden"
                    style={{ backgroundColor: benefit.artBg }}
                    data-node-id={`${benefit.nodeId}-art`}
                  >
                    <img
                      src={benefit.image.src}
                      alt=""
                      width={705}
                      height={277}
                      className="size-full object-cover object-bottom"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 235px, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-[14px]">
                    <span className="type-h4 text-text">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="type-body font-normal text-text">
                        {benefit.title}
                      </h4>
                      <p className="type-body text-sm leading-[1.4] text-text">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
