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

          <h1 className="font-[family-name:var(--font-fraunces)] text-5xl text-[var(--color-espresso)] sm:text-6xl">
            The menu.
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
                {items.map((item) => (
                  <article
                    key={item.name}
                    className="flex items-start justify-between gap-5 border border-[var(--color-espresso)]/15 bg-white/40 p-5 sm:p-6"
                  >
                    <div>
                      <h3 className="font-[family-name:var(--font-fraunces)] text-xl text-[var(--color-espresso)]">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--color-espresso)]/70">
                        {item.description}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-[var(--color-terracotta)]">
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
