"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useEffect, useState, type ElementType, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

type MotionTag =
  "div" | "section" | "dl" | "ul" | "ol" | "li" | "footer" | "header";

const motionTags: Record<MotionTag, ElementType> = {
  div: motion.div,
  section: motion.section,
  dl: motion.dl,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  footer: motion.footer,
  header: motion.header,
};

type CommonProps = {
  as?: MotionTag;
  children: ReactNode;
  className?: string;
  variants?: Variants;
} & Omit<
  HTMLMotionProps<"div">,
  | "children"
  | "variants"
  | "initial"
  | "animate"
  | "whileInView"
  | "viewport"
  | "transition"
>;

type RevealProps = CommonProps & {
  delay?: number;
  amount?: number;
};

function withDelay(variants: Variants, delay: number): Variants {
  if (delay <= 0) return variants;

  const visible = variants.visible;
  const base =
    typeof visible === "object" && visible !== null ? visible : { opacity: 1 };
  const existingTransition =
    typeof visible === "object" &&
    visible !== null &&
    "transition" in visible &&
    visible.transition
      ? visible.transition
      : {};

  return {
    ...variants,
    visible: {
      ...base,
      transition: { ...existingTransition, delay },
    },
  };
}

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}

export function Reveal({
  as = "div",
  children,
  className,
  variants = fadeUp,
  delay = 0,
  amount = viewportOnce.amount,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const hydrated = useHydrated();
  const Component = motionTags[as];

  if (reduceMotion || isMobile) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...(rest as object)}>
        {children}
      </StaticTag>
    );
  }

  return (
    <Component
      className={className}
      variants={withDelay(variants, delay)}
      initial={hydrated ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </Component>
  );
}

type StaggerProps = CommonProps & {
  amount?: number;
};

export function Stagger({
  as = "div",
  children,
  className,
  variants = staggerContainer,
  amount = viewportOnce.amount,
  ...rest
}: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const hydrated = useHydrated();
  const Component = motionTags[as];

  if (reduceMotion || isMobile) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...(rest as object)}>
        {children}
      </StaticTag>
    );
  }

  return (
    <Component
      className={className}
      variants={variants}
      initial={hydrated ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = CommonProps;

export function StaggerItem({
  as = "div",
  children,
  className,
  variants = staggerItem,
  ...rest
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const Component = motionTags[as];

  if (reduceMotion || isMobile) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...(rest as object)}>
        {children}
      </StaticTag>
    );
  }

  return (
    <Component className={className} variants={variants} {...rest}>
      {children}
    </Component>
  );
}
