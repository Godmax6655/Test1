type LogoProps = {
  /** "full" = mark + wordmark. "mark" = mark only (mobile, favicon, app icon). */
  variant?: "full" | "mark";
  /** Rendered height in px. Width follows the aspect ratio. */
  height?: number;
  className?: string;
};

/**
 * Asima Smrddhi logo. Inline SVG so the wordmark uses the loaded Playfair Display font.
 * Colors come from design tokens. No strapline (approved decision).
 */
export function Logo({ variant = "full", height = 44, className }: LogoProps) {
  const isFull = variant === "full";
  const viewBox = isFull ? "0 0 400 80" : "0 0 70 80";
  const width = isFull ? (height * 400) / 80 : (height * 70) / 80;

  return (
    <svg
      role="img"
      aria-label="Asima Smrddhi"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      fill="none"
      className={className}
    >
      <title>Asima Smrddhi</title>
      <g transform="translate(0, 2)">
        {/* Outer arc */}
        <path
          d="M35 8 C18 18 8 36 8 50 C8 62 18 70 35 70 C52 70 62 62 62 50 C62 36 52 18 35 8 Z"
          fill="var(--color-maroon)"
        />
        {/* Flame */}
        <path
          d="M35 15 C26 25 18 38 18 48 C18 58 25 64 35 64 C45 64 52 58 52 48 C52 38 44 25 35 15 Z"
          fill="var(--color-gold)"
        />
        {/* Inner light */}
        <path
          d="M35 24 C30 32 26 40 26 48 C26 54 30 58 35 58 C40 58 44 54 44 48 C44 40 40 32 35 24 Z"
          fill="var(--color-ivory)"
        />
        <circle cx="35" cy="46" r="3.5" fill="var(--color-maroon)" />
        {/* Accent dots */}
        <circle cx="35" cy="5" r="2.5" fill="var(--color-gold)" />
        <circle cx="7" cy="50" r="2" fill="var(--color-gold)" />
        <circle cx="63" cy="50" r="2" fill="var(--color-gold)" />
        {/* Base */}
        <path d="M22 66 Q35 72 48 66 L50 71 Q35 75 20 71 Z" fill="var(--color-gold)" />
      </g>
      {isFull && (
        <text
          x="84"
          y="52"
          fill="var(--color-maroon)"
          style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 700, letterSpacing: "3.5px" }}
        >
          ASIMA SMRDDHI
        </text>
      )}
    </svg>
  );
}
