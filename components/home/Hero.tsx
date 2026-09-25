import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-muted">
      <Container>
        <div className="grid min-h-[640px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="mb-5 text-label font-medium uppercase tracking-[0.15em] text-maroon">
              Rooted in Tradition
            </p>

            <h1 className="font-editorial text-h1 font-semibold leading-[1.08] tracking-tight text-charcoal sm:text-display">
              Sacred essentials for the modern home.
            </h1>

            <p className="mt-6 max-w-xl text-body text-charcoal/75 sm:text-body-lg">
              Discover thoughtfully prepared puja and hawan samagri,
              traditional gomaye products, and spiritual essentials
              inspired by timeless Indian traditions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/products">Explore Collection</Button>
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-body-sm text-charcoal/60">
              <span>Authentically Prepared</span>
              <span>Thoughtfully Sourced</span>
              <span>Made for Modern Rituals</span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-soft-beige">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-caption uppercase tracking-[0.15em] text-charcoal/50">
                  Hero Image
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-overlay bg-surface p-5 shadow-elevated sm:block">
              <p className="font-editorial text-h4 font-medium text-charcoal">
                Tradition,
                <br />
                thoughtfully preserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
