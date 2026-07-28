'use client'

import IconInfo from '@/assets/icons/icon-info.svg'
import ctaGraphicRight from '@/assets/donation/cta-graphic-right.png'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { fadeUpScale, staggerContainerSlow } from '@/lib/motion'
import { DONATION_LINKS } from '@/lib/donationLinks'

/** Figma section-donation-support 562:7233 — viewport 1440, content 1160 (1200−40) */
export default function SectionDonationSupport() {
  return (
    <section
      id="donation-support"
      className="section-donation-support section-viewport section-viewport-auto relative bg-[#FAFAFA]"
      aria-labelledby="donation-support-heading"
      data-node-id="562:7233"
    >
      {/* Decorative vertical strokes — Figma bg-stroke 1200px */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[min(1200px,100%)] -translate-x-1/2 border-x border-line lg:block"
        aria-hidden
        data-node-id="562:7234"
      />

      <div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 py-10 md:gap-20 md:py-[100px]"
        data-node-id="562:7235"
      >
        {/* Title 371 / gap 48 / methods 741 */}
        <div
          className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12"
          data-node-id="562:7243"
        >
          <Reveal className="w-full shrink-0 lg:w-[371px]">
            <h2
              id="donation-support-heading"
              className="type-h3 text-text"
              data-node-id="562:7246"
            >
              How to Support
              <br />
              Bay Area K-Group
            </h2>
          </Reveal>

          <Stagger
            variants={staggerContainerSlow}
            className="flex w-full min-w-0 shrink-0 flex-col gap-6 lg:w-[741px]"
            data-node-id="562:7323"
          >
            <StaggerItem>
              <div
                className="flex flex-col gap-2 border-b border-line py-6"
                data-node-id="562:7324"
              >
                <h3
                  className="type-h4 text-text"
                  data-node-id="562:7325"
                >
                  간편한 온라인 기부 · Online Donation
                </h3>
                <div
                  className="type-body"
                  data-node-id="562:7326"
                >
                  <p>원하시는 플랫폼을 선택하시면 바로 기부 페이지로 연결됩니다.</p>
                  <p>(Zeffy 수수료 전액 면제 플랫폼)</p>
                </div>
                <div
                  className="flex flex-wrap items-start gap-4 py-3 md:gap-6"
                  data-node-id="562:7327"
                >
                  <a
                    href={DONATION_LINKS.paypalVenmo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost type-button inline-flex h-10 items-center px-4 py-2 text-sm md:h-11 md:px-[21px] md:py-0 md:text-base"
                    data-node-id="562:7328"
                  >
                    PayPal · Venmo
                  </a>
                  <a
                    href={DONATION_LINKS.zeffy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost type-button inline-flex h-10 items-center px-4 py-2 text-sm md:h-11 md:px-[21px] md:py-0 md:text-base"
                    data-node-id="562:7330"
                  >
                    Zeffy
                  </a>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex flex-col gap-2 border-b border-line py-6 text-text"
                data-node-id="562:7332"
              >
                <h3
                  className="type-h4"
                  data-node-id="562:7333"
                >
                  수표 기부 · Check Donation
                </h3>
                <div
                  className="type-body"
                  data-node-id="562:7334"
                >
                  <p>K-Group 앞으로 수표를 보내실 수 있습니다.</p>
                  <ul className="list-disc space-y-0 pl-[27px]">
                    <li>Payee (수취인): Bay Area K-Group</li>
                    <li>
                      Mailing Address (주소): P.O Box 60424, 209 East Java Dr.,
                      Sunnyvale, CA 94086
                    </li>
                  </ul>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex flex-col gap-6 border-b border-line py-6 text-text"
                data-node-id="562:7335"
              >
                <h3
                  className="type-h4"
                  data-node-id="562:7336"
                >
                  기부금 매칭 · Corporate Matching
                </h3>

                <div
                  className="flex flex-col gap-3 rounded-[12px] border border-line bg-white p-6"
                  data-node-id="562:7337"
                >
                  <h4
                    className="type-h4"
                    data-node-id="562:7338"
                  >
                    회사 베네핏으로 후원 효과 200% 높이기
                  </h4>
                  <p
                  className="type-body"
                  data-node-id="562:7339"
                >
                    실리콘밸리에 있는 기업들이 제공하는 기부 매칭 프로그램을
                    활용해 보세요. 여러분의 후원금이 2배, 3배가 되어 K-Group에
                    전달됩니다.
                  </p>
                </div>

                <div
                  className="type-body"
                  data-node-id="562:7340"
                >
                  <p>
                    많은 기업이 직원의 기부액만큼 추가로 기부해 주는 Gift-Matching
                    프로그램을 운영하고 있습니다.
                  </p>
                  <ul className="list-disc space-y-0 pl-[27px]">
                    <li>
                      예시: 사내 Giving Portal을 통해 K-Group에 $50을 기부하고
                      매칭을 신청하면, 회사에서 $50(또는 그 이상)을 추가로 기부해
                      총 $100 이상의 후원 효과가 발생합니다.
                    </li>
                    <li>
                      지금 다니시는 회사의 인사 시스템(HR/Giving Portal)에서
                      &apos;Bay Area K-Group&apos;을 검색해 보세요.
                    </li>
                  </ul>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex flex-col gap-2 border-b border-line py-6 text-text"
                data-node-id="562:7341"
              >
                <h3
                  className="type-h4"
                  data-node-id="562:7342"
                >
                  자원봉사 지원금 · Volunteer Grant
                </h3>
                <p
                  className="type-body"
                  data-node-id="562:7343"
                >
                  돈을 기부하지 않더라도, 여러분의 &apos;시간&apos;이 기부금이
                  됩니다. K-Group에서 스태프나 자원봉사자로 활동하신 경우, 기업의
                  Volunteer Grant 제도를 통해 봉사 시간만큼의 지원금을
                  K-Group으로 요청하실 수 있습니다.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="flex items-start gap-3 rounded-[12px] border border-line px-[25px] py-[13px]"
                data-node-id="562:7344"
              >
                <img
                  src={IconInfo.src}
                  alt=""
                  width={14}
                  height={14}
                  className="mt-[3px] size-[14px] shrink-0"
                  data-node-id="562:7346"
                />
                <p
                  className="type-footer min-w-0 flex-1 leading-[1.4] text-text"
                  data-node-id="562:7351"
                >
                  Bay Area K-Group은 미국세청에 등록된 501(c)(3) 비영리 단체(EIN:
                  51-0656931)로, 보내주신 후원금은 전액 커뮤니티 운영에 투명하게
                  사용되며 세금 공제(Tax-deductible) 혜택을 받으실 수 있습니다.
                  (기업/개인 후원 모두 가능)
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        {/* CTA — Figma 561:5255 (no stroke; graphic blends into #F4F5F9) */}
        <Reveal variants={fadeUpScale} delay={0.08}>
          <div
            className="section-donation-cta relative isolate min-h-[17.5rem] overflow-hidden rounded-[12px] border border-line bg-white sm:min-h-[19rem] md:min-h-[21.125rem]"
            data-node-id="561:5255"
          >
            <img
              src={ctaGraphicRight.src}
              alt=""
              width={579}
              height={306}
              className="donation-cta-graphic-right pointer-events-none absolute bottom-0 right-0 z-0 select-none object-contain object-right-bottom"
              aria-hidden
              loading="lazy"
              decoding="async"
              data-node-id="561:5258"
            />

            <div className="relative z-10 flex w-full max-w-[578px] flex-col items-start gap-8 px-5 py-10 text-left sm:gap-12 sm:px-8 sm:py-12 md:gap-12 md:px-[97px] md:py-[49px]">
              <div
                className="type-body w-full"
                data-node-id="561:5257"
              >
                <p>
                  K-Group을 통해 좋은 인연을 만나고 함께 성장한 경험이 있다면,
                  이제 그 기회를 다음 사람에게 이어주세요.
                </p>
                <p className="mt-4">
                  여러분의 작은 후원이 실리콘밸리에서 더 많은 연결을 만들고, 더
                  큰 성장의 계기가 됩니다.
                </p>
              </div>

              <a
                href="https://bayareakgroup.org/events/support-bay-area-k-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-home-cta type-button group inline-flex h-10 items-center gap-2 px-4 py-2 text-sm md:h-11 md:px-5 md:py-0 md:text-base"
                data-node-id="561:5301"
              >
                Support K-Group
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
