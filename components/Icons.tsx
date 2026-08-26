type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBuilding({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M4 20V7l8-3 8 3v13" />
      <path {...stroke} d="M9 20v-6h6v6" />
      <path {...stroke} d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}

export function IconId({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...stroke} x="3" y="5" width="18" height="14" rx="1.5" />
      <circle {...stroke} cx="9" cy="12" r="2" />
      <path {...stroke} d="M13.5 11h5M13.5 14h3.5" />
    </svg>
  );
}

export function IconLedger({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M7 4h11v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path {...stroke} d="M9 8h7M9 12h7M9 16h4" />
    </svg>
  );
}

export function IconPeople({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...stroke} cx="9" cy="8" r="2.4" />
      <path {...stroke} d="M4.5 18.5c.6-3 2.4-4.5 4.5-4.5s3.9 1.5 4.5 4.5" />
      <circle {...stroke} cx="16.5" cy="8.5" r="2" />
      <path {...stroke} d="M15 14.2c1.7.2 3.2 1.4 3.8 4.3" />
    </svg>
  );
}

export function IconScale({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M12 4v16M8 20h8" />
      <path {...stroke} d="M12 7h8l-2.5 5.5a2.6 2.6 0 1 1-5.2 0L12 7Z" />
      <path {...stroke} d="M12 7H4l2.5 5.5a2.6 2.6 0 1 0 5.2 0L12 7Z" />
    </svg>
  );
}

export function IconChart({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M4 19h16" />
      <path {...stroke} d="M7 16v-5M12 16V8M17 16v-8" />
    </svg>
  );
}

export function IconInstagram({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...stroke} x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle {...stroke} cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconChat({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...stroke}
        d="M5 18.5 6.2 15A7.5 7.5 0 1 1 12 19.5a7.4 7.4 0 0 1-3.1-.7L5 18.5Z"
      />
    </svg>
  );
}

export function IconArrow({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path {...stroke} strokeWidth={1.5} d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" />
    </svg>
  );
}
