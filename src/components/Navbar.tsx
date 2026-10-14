
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-[#3E2723]/10 bg-[#FFF8E7]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        <Link href="/" className="group flex flex-col">
          <span className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold tracking-wide text-[#3E2723]">
            ÌTURA
          </span>

          <span className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-[#C46A4A]">
            Coffee &amp; Comfort
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#3E2723]/80 transition-colors hover:text-[#C46A4A]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/menu"
          className="border border-[#3E2723] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#3E2723] transition-colors hover:bg-[#3E2723] hover:text-[#FFF8E7] md:hidden"
        >
          Explore
        </Link>

        <Link
          href="/menu"
          className="hidden border border-[#3E2723] px-5 py-3 text-xs font-medium uppercase tracking-wider text-[#3E2723] transition-colors hover:bg-[#3E2723] hover:text-[#FFF8E7] md:inline-flex"
        >
          Explore menu
        </Link>
      </nav>
    </header>
  );
}
