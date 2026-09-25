"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "B2B / Business", href: "/business" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

const iconBtn =
  "inline-flex size-11 items-center justify-center rounded-control text-charcoal transition-colors duration-300 hover:bg-surface-muted";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-ivory/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Mobile: menu */}
        <button
          type="button"
          className={`${iconBtn} lg:hidden`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand */}
        <Link href="/" aria-label="Asima Smrddhi home" className="shrink-0">
          <Logo variant="full" height={40} className="hidden sm:block" />
          <Logo variant="mark" height={40} className="sm:hidden" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-nav font-semibold uppercase text-charcoal transition-colors duration-300 hover:text-maroon"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Link href="/search" className={iconBtn} aria-label="Search">
            <Search size={20} />
          </Link>
          <Link href="/account" className={`${iconBtn} hidden lg:inline-flex`} aria-label="Account">
            <User size={20} />
          </Link>
          <Link href="/cart" className={iconBtn} aria-label="Cart">
            <ShoppingCart size={20} />
          </Link>
        </div>
      </Container>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border-subtle bg-ivory lg:hidden">
          <Container className="flex flex-col py-2">
            {[...NAV, { label: "Account", href: "/account" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="min-h-11 border-b border-border-subtle py-3 text-base font-medium transition-colors duration-300 last:border-0 hover:text-maroon"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
