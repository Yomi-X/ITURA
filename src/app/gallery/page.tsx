
import Image from "next/image";
import { galleryImages } from "@/lib/galleryData";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
            A glimpse of our world
          </p>

          <h1 className="font-[family-name:var(--font-fraunces)] text-5xl font-normal leading-[1.05] tracking-[-0.035em] text-[var(--color-espresso)] sm:text-6xl lg:text-7xl">
            Little moments,{" "}
            <span className="italic text-[var(--color-terracotta)]">
              warmly made.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-espresso)]/70">
            A closer look at the coffee, comforting details, and quiet
            corners that make ÌTURA feel like a place to call your own.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <article key={image.src} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f4ead5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-[var(--color-espresso)]/15 py-4">
                <div>
                  <h2 className="font-[family-name:var(--font-fraunces)] text-xl text-[var(--color-espresso)] sm:text-2xl">
                    {image.title}
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-[var(--color-espresso)]/65">
                    {image.description}
                  </p>
                </div>

                <span className="pt-1 text-xs tracking-widest text-[var(--color-terracotta)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--color-espresso)]/15 pt-6">
          <p className="font-[family-name:var(--font-fraunces)] text-2xl italic text-[var(--color-espresso)] sm:text-3xl">
            Coffee. Comfort. Community.
          </p>
          <p className="mt-2 text-sm text-[var(--color-espresso)]/65">
            Thoughtfully imagined in Abuja, Nigeria.
          </p>
        </div>
      </div>
    </main>
  );
}
