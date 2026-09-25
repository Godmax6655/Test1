import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text" | "danger";

const base =
  "inline-flex items-center justify-center gap-2 rounded-control px-5 min-h-11 text-sm font-semibold " +
  "transition-all duration-300 active:duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-maroon text-ivory hover:bg-maroon-hover active:bg-maroon-active",
  secondary: "border border-maroon text-maroon hover:bg-maroon/5 active:bg-maroon/10",
  tertiary: "bg-surface-muted text-charcoal hover:bg-border-subtle active:bg-border-strong",
  text: "px-2 text-maroon underline-offset-4 hover:underline",
  danger: "bg-error text-ivory hover:brightness-90 active:brightness-75",
};

type Common = { variant?: ButtonVariant; className?: string; children: ReactNode };

type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean; href?: never };

type AsLink = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = AsButton | AsLink;

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", className = "", children, href, ...rest } = props;
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant = "primary", loading = false, className = "", children, disabled, ...rest } = props;
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {children}
    </button>
  );
}

export const ButtonLink = Button;
export default Button;
