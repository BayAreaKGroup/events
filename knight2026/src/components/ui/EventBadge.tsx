type EventBadgeProps = {
  className?: string
  /** @deprecated No longer changes appearance — kept for call-site compatibility */
  subdued?: boolean
  label?: string
}

/** Status / event chip — leading accent mark + label (Material / HIG style) */
export default function EventBadge({
  className = '',
  label = 'K-Night 2026',
}: EventBadgeProps) {
  return (
    <div className={['chip-badge', className].filter(Boolean).join(' ')}>
      <span className="chip-badge-mark" aria-hidden="true" />
      <span className="chip-badge-label type-button whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
