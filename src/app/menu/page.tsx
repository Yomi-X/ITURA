import { menuItems } from "@/lib/menuData";

export default function MenuPage() {
  const categories = ["Coffee", "Bakery", "Food"] as const;

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
            Made with care in Abuja
          </p>

          <h1 className="font-[family-name:var(--font-fraunces)] text-5xl font-normal leading-[1.05] tracking-[-0.035em] text-[var(--color-espresso)] sm:text-6xl">
            Something to <span className="italic text-[var(--color-terracotta)]">savour.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-espresso)]/70">
            Something to sip, something to savour, and a reason to
            stay a little longer.
          </p>
        </header>

        {categories.map((category) => {
          const items = menuItems.filter(
            (item) => item.category === category,
          );

          if (items.length === 0) {
            return null;
          }

          return (
            <section key={category} className="mb-14">
              <h2 className="mb-6 border-b border-[var(--color-espresso)]/15 pb-3 font-[family-name:var(--font-fraunces)] text-3xl text-[var(--color-espresso)]">
                {category}
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {items.map((item, index) => (
                  <article
                    key={item.name}
                    className="group flex items-start justify-between gap-5 border-b border-[var(--color-espresso)]/15 py-6 transition-colors duration-300 hover:border-[var(--color-terracotta)]/60 sm:py-7"
                  >
                    <div className="flex gap-4">
                      <span className="pt-1 text-xs tracking-[0.15em] text-[var(--color-terracotta)]/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-[family-name:var(--font-fraunces)] text-xl text-[var(--color-espresso)] transition-colors duration-300 group-hover:text-[var(--color-terracotta)] sm:text-2xl">
                          {item.name}
                        </h3>

                        <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-espresso)]/70">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <p className="shrink-0 pt-1 text-sm font-semibold tabular-nums text-[var(--color-terracotta)]">
                      {item.price}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <p className="mt-10 text-xs text-[var(--color-espresso)]/60">
          Sample menu and prices for this website concept.
        </p>
      </div>
    </main>
  );
}
