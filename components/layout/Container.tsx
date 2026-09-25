import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Standard centered content container.
 * Every major page section should be wrapped in this rather than
 * defining its own max-width — keeps every page aligned to the
 * same horizontal rhythm across breakpoints.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
