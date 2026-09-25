import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <p className="mb-3 text-label uppercase tracking-wide text-charcoal/60">
        Design System Check — Phase 2
      </p>

      <h1 className="mb-4 font-editorial text-h1 text-charcoal sm:text-display">
        Asima Smrddhi
      </h1>

      <p className="mb-8 max-w-xl text-body-lg text-charcoal/80">
        Authentic puja and hawan samagri, traditional cow-dung products, and
        thoughtfully prepared spiritual essentials for modern Indian homes.
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        <button className="rounded-control bg-maroon px-6 py-3 text-body font-medium text-ivory">
          Primary button (maroon)
        </button>
        <button className="rounded-control border border-border-strong bg-transparent px-6 py-3 text-body font-medium text-charcoal">
          Secondary button
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        <div className="rounded-card bg-maroon p-4 text-center text-body-sm text-ivory">
          maroon
        </div>
        <div className="rounded-card bg-gold p-4 text-center text-body-sm text-charcoal">
          gold
        </div>
        <div className="rounded-card bg-green p-4 text-center text-body-sm text-ivory">
          green
        </div>
        <div className="rounded-card border border-border-default bg-ivory p-4 text-center text-body-sm text-charcoal">
          ivory
        </div>
        <div className="rounded-card bg-charcoal p-4 text-center text-body-sm text-ivory">
          charcoal
        </div>
      </div>
    </Container>
  );
}
