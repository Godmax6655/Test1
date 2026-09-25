import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="Asima Smrddhi home" className="inline-block">
              <Logo variant="full" tone="inverse" height={36} />
            </Link>

            <p className="mt-4 max-w-md text-body-sm leading-6 text-ivory/70">
              Authentic puja and hawan samagri, traditional cow-dung
              products, and thoughtfully prepared spiritual essentials
              for modern Indian homes.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-label font-semibold uppercase text-ivory/90">
              Shop
            </h3>
            <div className="mt-4 space-y-3 text-body-sm text-ivory/70">
              <Link href="/products" className="block transition-colors duration-300 hover:text-ivory">
                All Products
              </Link>
              <Link href="/categories/puja-samagri" className="block transition-colors duration-300 hover:text-ivory">
                Puja Samagri
              </Link>
              <Link href="/categories/hawan-samagri" className="block transition-colors duration-300 hover:text-ivory">
                Hawan Samagri
              </Link>
              <Link href="/categories/cow-dung-products" className="block transition-colors duration-300 hover:text-ivory">
                Cow-Dung Products
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-label font-semibold uppercase text-ivory/90">
              Company
            </h3>
            <div className="mt-4 space-y-3 text-body-sm text-ivory/70">
              <Link href="/about" className="block transition-colors duration-300 hover:text-ivory">
                Our Story
              </Link>
              <Link href="/contact" className="block transition-colors duration-300 hover:text-ivory">
                Contact
              </Link>
              <Link href="/privacy" className="block transition-colors duration-300 hover:text-ivory">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block transition-colors duration-300 hover:text-ivory">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ivory/10 py-6 text-body-sm text-ivory/50">
          © {new Date().getFullYear()} Asima Smrddhi. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
