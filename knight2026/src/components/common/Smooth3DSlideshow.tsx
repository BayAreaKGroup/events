"use client";

import {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import slide7 from "@/assets/about/7.jpg";
import slide8 from "@/assets/about/8.jpg";
import slide9 from "@/assets/about/9.jpg";
import slide10 from "@/assets/about/10.jpg";
import slide11 from "@/assets/about/11.jpg";
import slide12 from "@/assets/about/12.jpg";
import slide13 from "@/assets/about/13.jpg";
import slide14 from "@/assets/about/14.jpg";
import slide15 from "@/assets/about/15.jpg";
import mobileSlide7 from "@/assets/about/mobile/7.jpg";
import mobileSlide8 from "@/assets/about/mobile/8.jpg";
import mobileSlide9 from "@/assets/about/mobile/9.jpg";
import mobileSlide10 from "@/assets/about/mobile/10.jpg";
import mobileSlide11 from "@/assets/about/mobile/11.jpg";
import mobileSlide12 from "@/assets/about/mobile/12.jpg";
import mobileSlide13 from "@/assets/about/mobile/13.jpg";
import mobileSlide14 from "@/assets/about/mobile/14.jpg";
import mobileSlide15 from "@/assets/about/mobile/15.jpg";
import { useIsMobile } from "@/hooks/useMediaQuery";

type AutoplayDir = "leftToRight" | "rightToLeft";
type TitleCorner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

interface Slide {
  image?: { src?: string; mobileSrc?: string; alt?: string };
  title?: string;
}

interface Smooth3DSlideshowProps {
  slides?: Slide[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tilt?: number;
  sideTilt?: number;
  gap?: number;
  opacity?: number;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: number[];
  };
  autoplay?: boolean;
  autoplayDirection?: AutoplayDir;
  showTitle?: boolean;
  titleFont?: CSSProperties;
  titleColor?: string;
  titlePosition?: {
    position?: TitleCorner;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
  };
  style?: CSSProperties;
  className?: string;
  /** Scale cards and fan spread to stay centered within the parent width */
  fitContainer?: boolean;
  /** Override side-card tilt on mobile without changing larger viewports. */
  mobileSideTilt?: number;
}

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const MAX_VISIBLE = 3;
const DEPTH = 240;
/** fitContainer: compact fan below 1280px; desktop uses original wide spread */
const FIT_COMPACT_MAX_WIDTH = 1280;
const FIT_FAN_OFFSET = 0.18;
const FIT_FAN_OFFSET_BUDGET = 0.22;
const FIT_FAN_DEPTH = 1.2;
const DESKTOP_FAN_GAP_MULTIPLIER = 30;
const SWIPE_THRESHOLD = 40;

const DEFAULT_SLIDES: Slide[] = [
  {
    image: {
      src: slide7.src,
      mobileSrc: mobileSlide7.src,
      alt: "K-Night audience cheering",
    },
    title: "Title 1",
  },
  {
    image: {
      src: slide8.src,
      mobileSrc: mobileSlide8.src,
      alt: "K-Night highlights collage",
    },
    title: "Title 2",
  },
  {
    image: {
      src: slide9.src,
      mobileSrc: mobileSlide9.src,
      alt: "K-Night panel discussion",
    },
    title: "Title 3",
  },
  {
    image: {
      src: slide10.src,
      mobileSrc: mobileSlide10.src,
      alt: "K-Night workshop session",
    },
    title: "Title 4",
  },
  {
    image: {
      src: slide11.src,
      mobileSrc: mobileSlide11.src,
      alt: "K-Night group photo",
    },
    title: "Title 5",
  },
  {
    image: {
      src: slide12.src,
      mobileSrc: mobileSlide12.src,
      alt: "K-Night 2025 volunteer group photo",
    },
    title: "Title 6",
  },
  {
    image: {
      src: slide13.src,
      mobileSrc: mobileSlide13.src,
      alt: "K-Night event welcome reception",
    },
    title: "Title 7",
  },
  {
    image: {
      src: slide14.src,
      mobileSrc: mobileSlide14.src,
      alt: "K-Night volunteer group photo",
    },
    title: "Title 8",
  },
  {
    image: {
      src: slide15.src,
      mobileSrc: mobileSlide15.src,
      alt: "K-Night audience group photo",
    },
    title: "Title 9",
  },
];

const COMPONENT_DEFAULTS = {
  cardWidth: 400,
  cardHeight: 400,
  radius: 12,
  tilt: 12,
  sideTilt: 8,
  gap: 8,
  opacity: 100,
  autoplay: false,
} as const;

function titleCornerStyle(
  position: TitleCorner = "bottomLeft",
  padding: {
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
  } = {},
): CSSProperties {
  const {
    paddingLeft = 20,
    paddingRight = 20,
    paddingTop = 20,
    paddingBottom = 20,
  } = padding;

  const base: CSSProperties = { position: "absolute" };

  switch (position) {
    case "topLeft":
      return { ...base, top: paddingTop, left: paddingLeft };
    case "topRight":
      return { ...base, top: paddingTop, right: paddingRight };
    case "bottomRight":
      return { ...base, bottom: paddingBottom, right: paddingRight };
    case "bottomLeft":
    default:
      return { ...base, bottom: paddingBottom, left: paddingLeft };
  }
}

export default function Smooth3DSlideshow(props: Smooth3DSlideshowProps) {
  const mergedProps = { ...COMPONENT_DEFAULTS, ...props };
  const {
    slides = DEFAULT_SLIDES,
    cardWidth = 400,
    cardHeight = 400,
    radius = 12,
    tilt = 12,
    sideTilt = 8,
    gap = 8,
    opacity = 100,
    transition = { duration: 0.6, delay: 2.5, ease: [0.22, 1, 0.36, 1] },
    autoplay = false,
    autoplayDirection = "rightToLeft",
    showTitle = true,
    titleFont,
    titleColor = "#ffffff",
    titlePosition = { position: "bottomLeft" },
    style,
    className,
    fitContainer = false,
    mobileSideTilt,
  } = mergedProps;

  const [active, setActive] = useState(0);
  const [size, setSize] = useState({ width: cardWidth, height: cardHeight });
  const [isCompactViewport, setIsCompactViewport] = useState(() =>
    typeof window !== "undefined"
      ? window.innerWidth < FIT_COMPACT_MAX_WIDTH
      : true,
  );
  const isMobileViewport = useIsMobile();
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const n = slides.length;
  const moveDur = transition?.duration ?? 0.6;
  const autoplayDelay = (transition?.delay ?? 2.5) * 1000;

  const measureSize = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;

    const containerW = el.clientWidth;
    if (containerW <= 0) return;

    const isCompactFit = fitContainer && isCompactViewport;

    let maxW: number;
    if (isCompactFit) {
      const sideScale = 1 - SCALE_STEP;
      const maxFromSpread =
        containerW / (2 * (FIT_FAN_OFFSET_BUDGET + sideScale / 2));
      maxW = Math.min(cardWidth, containerW * 0.88, maxFromSpread);
    } else {
      maxW = Math.min(cardWidth, containerW);
    }

    const scale = maxW / cardWidth;
    setSize({
      width: Math.max(1, Math.round(cardWidth * scale)),
      height: Math.max(1, Math.round(cardHeight * scale)),
    });
  }, [cardWidth, cardHeight, fitContainer, isCompactViewport]);

  useLayoutEffect(() => {
    measureSize();
  }, [measureSize]);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${FIT_COMPACT_MAX_WIDTH}px)`);
    const update = () => setIsCompactViewport(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new ResizeObserver(measureSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measureSize]);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(
      () => {
        lockRef.current = false;
      },
      Math.max(50, moveDur * 1000),
    );
  }, [moveDur]);

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current || n === 0) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock],
  );

  useEffect(() => {
    if (!autoplay || n <= 1) return;
    const id = window.setInterval(() => {
      step(autoplayDirection === "leftToRight" ? -1 : 1);
    }, autoplayDelay);
    return () => window.clearInterval(id);
  }, [autoplay, autoplayDirection, autoplayDelay, n, step]);

  const handleCardClick = (i: number) => {
    if (autoplay || lockRef.current || suppressClickRef.current) return;
    lock();
    setActive(i === active ? (active + 1) % n : i);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      !isMobileViewport ||
      n <= 1 ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      moved: false,
    };
    suppressClickRef.current = false;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    if (Math.abs(deltaX) > 4) {
      drag.moved = true;
      event.preventDefault();
    }
    setDragOffset(deltaX);
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const didSwipe = drag.moved && Math.abs(deltaX) >= SWIPE_THRESHOLD;
    dragRef.current = null;
    setIsDragging(false);
    setDragOffset(0);

    if (drag.moved) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 250);
    }

    if (didSwipe && !lockRef.current) {
      lock();
      setActive((current) => (((current + (deltaX < 0 ? 1 : -1)) % n) + n) % n);
    }
  };

  const stageHeight = Math.max(size.height, Math.round(size.height * 1.15));
  const sizeScale = size.width / cardWidth;
  const isCompactFit = fitContainer && isCompactViewport;
  const offsetStep = isCompactFit
    ? size.width * FIT_FAN_OFFSET
    : gap * DESKTOP_FAN_GAP_MULTIPLIER * sizeScale;
  const depthStep = isCompactFit ? DEPTH * sizeScale * FIT_FAN_DEPTH : DEPTH;
  const resolvedSideTilt =
    isMobileViewport && mobileSideTilt !== undefined
      ? mobileSideTilt
      : sideTilt;
  const stageWidth = isCompactFit
    ? "100%"
    : Math.round(size.width + 2 * MAX_VISIBLE * offsetStep + size.width * 0.2);

  return (
    <div
      ref={rootRef}
      className={[
        "smooth-3d-slideshow w-full",
        fitContainer ? "mx-auto flex justify-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...style,
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        height: stageHeight,
        perspective: `${PERSPECTIVE}px`,
        overflow: isCompactFit ? "hidden" : "visible",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
    >
      <div
        style={{
          position: "relative",
          width: stageWidth,
          height: size.height,
          transformStyle: "preserve-3d",
          margin: "0 auto",
        }}
      >
        {slides.map((slide, i) => {
          let rel = i - active;
          if (rel > n / 2) rel -= n;
          if (rel < -n / 2) rel += n;

          const ax = Math.abs(rel);
          const visible = ax <= MAX_VISIBLE;
          const isActive = rel === 0;
          const sideOpacity = Math.max(
            0,
            Math.min(1, 1 - (ax * (100 - opacity)) / 100),
          );

          return (
            <div
              key={`${slide.image?.src ?? "slide"}-${i}`}
              role="button"
              tabIndex={visible ? 0 : -1}
              aria-label={slide.title ?? slide.image?.alt ?? `Slide ${i + 1}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => handleCardClick(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(i);
                }
              }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: size.width,
                height: size.height,
                borderRadius: radius,
                overflow: "hidden",
                transform: `translate(-50%, -50%) translateX(${rel * offsetStep + (isDragging ? dragOffset : 0)}px) translateZ(${-ax * depthStep}px) rotateY(${-rel * tilt}deg) rotateZ(${rel * resolvedSideTilt}deg) scale(${Math.max(0.4, 1 - ax * SCALE_STEP)})`,
                transition: isDragging
                  ? "none"
                  : `transform ${moveDur}s cubic-bezier(0.22, 1, 0.36, 1), opacity ${moveDur}s cubic-bezier(0.22, 1, 0.36, 1)`,
                opacity: visible ? sideOpacity : 0,
                cursor: "pointer",
                pointerEvents: visible ? "auto" : "none",
                backgroundColor: "#1a1a1a",
                boxShadow: isActive
                  ? "0 24px 48px rgb(0 0 0 / 0.45)"
                  : "0 12px 28px rgb(0 0 0 / 0.3)",
              }}
            >
              <picture className="block size-full">
                {slide.image?.mobileSrc ? (
                  <source
                    media="(max-width: 767px)"
                    srcSet={slide.image.mobileSrc}
                  />
                ) : null}
                <img
                  src={slide.image?.src}
                  alt={slide.image?.alt ?? slide.title ?? ""}
                  width={1024}
                  height={1024}
                  sizes={`${Math.max(size.width, 1)}px`}
                  className="smooth-3d-slideshow-image size-full object-cover"
                  draggable={false}
                  loading={isActive ? "eager" : "lazy"}
                  decoding={isActive ? "sync" : "async"}
                  fetchPriority={isActive ? "high" : "low"}
                />
              </picture>

              {showTitle && slide.title ? (
                <div
                  style={{
                    ...titleCornerStyle(titlePosition?.position, titlePosition),
                    color: titleColor,
                    ...titleFont,
                  }}
                >
                  <h3 className="m-0 type-h5">{slide.title}</h3>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { DEFAULT_SLIDES };
export type { Slide, Smooth3DSlideshowProps };
