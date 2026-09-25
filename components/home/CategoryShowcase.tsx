import Link from "next/link";
import { Container } from "../layout/Container";

const categories = [
  {
    name: "Puja Samagri",
    description:
      "Essential items thoughtfully prepared for daily puja and sacred rituals.",
    href: "/categories/puja-samagri",
  },
  {
    name: "Hawan Samagri",
    description:
      "Traditional hawan essentials prepared for meaningful spiritual practices.",
    href: "/categories/hawan-samagri",
  },
  {
    name: "Gomaye Products",
    description:
      "Traditional cow-dung products rooted in timeless Indian practices.",
    href: "/categories/gomaye-products",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label font-medium uppercase tracking-[0.15em] text-maroon">
            Explore Our Collections
          </p>

          <h2 className="mt-4 font-editorial text-h2 font-medium leading-tight text-charcoal sm:text-h1">
            Rooted in tradition, prepared for today.
          </h2>

          <p className="mt-5 text-body text-charcoal/70">
            Explore our carefully selected collections of traditional
            spiritual essentials for everyday rituals and special occasions.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group overflow-hidden rounded-card border border-border-default bg-surface-muted transition-all hover:-translate-y-1 hover:shadow-elevated duration-500 ease-out"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-soft-beige">
                <div className="flex h-full items-center justify-center">
                  <span className="text-caption uppercase tracking-[0.15em] text-charcoal/50">
                    Collection Image
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-editorial text-h4 font-medium text-charcoal">
                  {category.name}
                </h3>

                <p className="mt-3 text-body-sm text-charcoal/70">
                  {category.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-body-sm font-medium text-maroon">
                  Explore Collection
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
