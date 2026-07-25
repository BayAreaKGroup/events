export type SocialCardProps = {
  name: string
  action: string
  href: string
  icon: string
  /** Accessible name; defaults to `${action} ${name}` */
  ariaLabel?: string
  className?: string
}

/**
 * Compact social channel CTA — icon, name, action, trailing arrow.
 * Entire card is one focusable link (Google-product list-tile tone).
 */
export default function SocialCard({
  name,
  action,
  href,
  icon,
  ariaLabel,
  className = '',
}: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? `${action} ${name}`}
      className={['social-card', className].filter(Boolean).join(' ')}
    >
      <span className="social-card-icon" aria-hidden>
        <img
          src={icon}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </span>

      <span className="social-card-copy">
        <span className="social-card-name">{name}</span>
        <span className="social-card-action">{action}</span>
      </span>

      <span className="social-card-arrow" aria-hidden>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}
