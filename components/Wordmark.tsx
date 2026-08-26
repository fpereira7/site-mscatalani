type WordmarkProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Wordmark({ variant = "light", className = "" }: WordmarkProps) {
  const ink = variant === "light" ? "#F6F1E8" : "#0E1C2F";
  const gold = "#C9A86A";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1.25"
          y="1.25"
          width="33.5"
          height="33.5"
          fill="none"
          stroke={gold}
          strokeWidth="1.25"
        />
        <rect
          x="4.5"
          y="4.5"
          width="27"
          height="27"
          fill="none"
          stroke={gold}
          strokeOpacity="0.45"
          strokeWidth="0.75"
        />
        <text
          x="18"
          y="23.5"
          textAnchor="middle"
          fill={gold}
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.04em"
        >
          MC
        </text>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-serif text-[1.05rem] font-semibold tracking-[0.12em]"
          style={{ color: ink }}
        >
          MS CATALANI
        </span>
        <span
          className="mt-1 text-[0.62rem] font-medium tracking-[0.32em] uppercase"
          style={{ color: gold }}
        >
          Contabilidade
        </span>
      </span>
    </span>
  );
}
