import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#behandlungen", label: "Behandlungen" },
  { href: "#preise", label: "Preise" },
  { href: "#galerie", label: "Eindrücke" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl tracking-wide text-primary sm:text-2xl">
            Sabai Dee
          </span>
          <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
            Thaimassage
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Anrufen
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
          aria-expanded={open}
          className="p-2 text-foreground md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-1 w-fit rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
            >
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
