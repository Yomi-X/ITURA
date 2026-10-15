import GalleryPreview from "@/components/GalleryPreview";
import { menuItems } from "@/lib/menuData";
import { experienceItems } from "@/lib/experienceData";

const featuredMenu = menuItems.slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-cream)]">
      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-8 sm:px-10 sm:pb-24 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-16 lg:pb-28"
      >
        <div className="relative z-10">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
            <span className="h-px w-8 bg-[var(--color-terracotta)]" />
            A softer kind of everyday
          </p>

          <h1 className="max-w-2xl font-[family-name:var(--font-fraunces)] text-6xl font-medium leading-[0.98] tracking-tight text-[var(--color-espresso)] sm:text-7xl lg:text-8xl">
            Your corner
            <br />
            of <span className="italic text-[var(--color-terracotta)]">calm.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-[var(--color-espresso)]/75 sm:text-lg">
            Good coffee, comforting plates, and room to just be.
            Come as you are. Stay a little longer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#rituals"
              className="rounded-full bg-[var(--color-espresso)] px-7 py-4 text-sm font-medium text-[var(--color-cream)] transition-transform hover:-translate-y-0.5"
            >
              Discover the experience <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#welcome"
              className="px-3 py-3 text-sm font-medium text-[var(--color-espresso)] underline decoration-[var(--color-gold)] underline-offset-8"
            >
              A little about us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[var(--color-espresso)]/15 pt-6">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="h-9 w-9 rounded-full border-2 border-[var(--color-cream)] bg-[var(--color-gold)]" />
              <span className="h-9 w-9 rounded-full border-2 border-[var(--color-cream)] bg-[var(--color-sage)]" />
              <span className="h-9 w-9 rounded-full border-2 border-[var(--color-cream)] bg-[var(--color-terracotta)]" />
            </div>
            <p className="text-xs leading-5 text-[var(--color-espresso)]/70">
              Made for slow sips
              <br />
              and good company.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-[var(--color-gold)]/70 sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
          <div className="relative min-h-[390px] overflow-hidden rounded-t-[48%] rounded-b-[48%] bg-[var(--color-espresso)] sm:min-h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#74513f] via-[var(--color-espresso)] to-[#211511]" />

            <div className="absolute left-[12%] top-[13%] h-28 w-28 rounded-full bg-[var(--color-terracotta)]/25 blur-2xl sm:h-40 sm:w-40" />
            <div className="absolute bottom-[12%] right-[8%] h-40 w-40 rounded-full bg-[var(--color-gold)]/15 blur-3xl sm:h-56 sm:w-56" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-xs">
                Your daily ritual
              </p>

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[var(--color-gold)]/50 sm:h-56 sm:w-56">
                <div className="absolute inset-3 rounded-full border border-[var(--color-cream)]/20" />
                <div className="relative flex h-28 w-32 items-center justify-center rounded-b-[42%] rounded-t-[30%] border border-[#e8d5b9] bg-gradient-to-br from-[#fff8e7] to-[#d6b99a] shadow-2xl sm:h-36 sm:w-40">
                  <div className="absolute -right-7 top-7 h-16 w-12 rounded-r-full border-[8px] border-[#e8d5b9] sm:-right-9 sm:h-20 sm:w-14" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#c8a77f] bg-[#5a3023] sm:h-16 sm:w-16">
                    <span className="font-[family-name:var(--font-fraunces)] text-3xl italic text-[#f1d6a9]">
                      Ì
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-9 font-[family-name:var(--font-fraunces)] text-2xl italic text-[var(--color-cream)] sm:text-3xl">
                Coffee. Comfort. Community.
              </p>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-[9px] uppercase tracking-[0.3em] text-[var(--color-cream)]/55">
              Thoughtfully made in Abuja
            </div>
          </div>

          <div className="absolute -bottom-5 -left-2 rotate-[-6deg] bg-[var(--color-gold)] px-5 py-3 text-xs font-medium text-[var(--color-espresso)] shadow-lg sm:-left-6">
            Take your time. Stay awhile.
          </div>
        </div>
      </section>

      <section id="welcome" className="border-y border-[var(--color-espresso)]/10 bg-[#f4ead5] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
            A place to exhale
          </p>
          <div>
            <h2 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-3xl leading-tight text-[var(--color-espresso)] sm:text-5xl">
              Not just somewhere to get coffee. Somewhere to feel at home.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-espresso)]/75 sm:text-base">
              ÌTURA is imagined as a welcoming Abuja café where thoughtful
              details, familiar flavours, and unhurried moments make ordinary
              days feel a little more special.
            </p>
          </div>
        </div>
      </section>

      <section id="rituals" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
              The ÌTURA feeling
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-4xl text-[var(--color-espresso)] sm:text-5xl">
              Little things, well made.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[var(--color-espresso)]/70">
            A good day can start with something simple. Here is what we believe in.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {experienceItems.map((item) => (
            <article
              key={item.number}
              className="border-t border-[var(--color-espresso)]/20 py-6 sm:py-8"
            >
              <p className="mb-8 text-xs tracking-[0.2em] text-[var(--color-terracotta)]">
                {item.number}
              </p>
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl text-[var(--color-espresso)]">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-espresso)]/70">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="menu"
        className="bg-[#f4ead5] px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
                A taste of ÌTURA
              </p>

              <h2 className="font-[family-name:var(--font-fraunces)] text-4xl text-[var(--color-espresso)] sm:text-5xl">
                Made to be savoured.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[var(--color-espresso)]/70">
              From your first sip to your last bite, find a little something
              to make the moment yours.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredMenu.map((item, index) => (
              <article
                key={item.name}
                className="group flex min-h-64 flex-col justify-between border border-[var(--color-espresso)]/15 bg-[var(--color-cream)] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-[var(--color-terracotta)]">
                      0{index + 1}
                    </span>

                    <span className="rounded-full border border-[var(--color-sage)]/50 px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--color-espresso)]/75">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl text-[var(--color-espresso)]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-espresso)]/70">
                    {item.description}
                  </p>
                </div>

                <p className="mt-8 border-t border-[var(--color-espresso)]/15 pt-4 text-lg font-medium text-[var(--color-terracotta)]">
                  {item.price}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs text-[var(--color-espresso)]/60">
            Sample menu and prices for this website concept.
          </p>
        </div>
      </section>

      <GalleryPreview />

      <footer id="visit" className="bg-[var(--color-espresso)] px-6 py-10 text-[var(--color-cream)] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-[family-name:var(--font-fraunces)] text-2xl">
              ÌTURA.
            </p>
            <p className="mt-2 text-xs text-[var(--color-cream)]/65">
              Coffee. Comfort. Community.
            </p>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[var(--color-cream)]/75 sm:text-right">
            A café concept rooted in comfort, connection, and the pleasure of slowing down.
            <span className="mt-1 block text-xs text-[var(--color-cream)]/50">
              Abuja, Nigeria · Website concept
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
