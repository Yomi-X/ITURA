import Image from "next/image";
import { galleryImages } from "@/lib/galleryData";

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="bg-[var(--color-cream)] px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-terracotta)]">
              A glimpse of our world
            </p>

            <h2 className="font-[family-name:var(--font-fraunces)] text-4xl text-[var(--color-espresso)] sm:text-5xl">
              Little moments, warmly made.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--color-espresso)]/70">
            From the first pour to the last crumb, there is always
            something worth slowing down for.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className={`group ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f4ead5]">
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
                  <h3 className="font-[family-name:var(--font-fraunces)] text-xl text-[var(--color-espresso)]">
                    {image.title}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--color-espresso)]/65">
                    {image.description}
                  </p>
                </div>

                <span className="pt-1 text-xs tracking-widest text-[var(--color-terracotta)]">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
