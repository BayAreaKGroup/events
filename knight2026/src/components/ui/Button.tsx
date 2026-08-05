import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "accent" | "ghost" | "ghost-on-accent";

const variantClassName: Record<ButtonVariant, string> = {
  accent: "btn-accent",
  ghost: "btn-ghost",
  "ghost-on-accent": "btn-ghost-on-accent",
};

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

type ButtonAsLink = SharedProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function joinClassName(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({
  variant = "accent",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = joinClassName("btn", variantClassName[variant], className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
