import { site } from "@/lib/site";
import logoAsset from "@/assets/logo.webp.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Sabai Dee</p>
          <p className="text-sm text-primary-foreground/70">Thaimassage · Münsingen</p>
          <div className="mt-4 h-px w-12 bg-accent/70" />
          <p className="mt-4 text-sm text-primary-foreground/80">
            Traditionelle Thai-Massage in ruhiger Atmosphäre – individuell auf Sie abgestimmt.
          </p>
        </div>

        <div className="text-sm text-primary-foreground/80">
          <p className="mb-3 font-medium text-primary-foreground">Kontakt</p>
          <p>{site.street}</p>
          <p>{site.city}</p>
          <p className="mt-2">
            <a href={site.phoneHref} className="hover:text-accent">
              {site.phone}
            </a>
          </p>
          <p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              WhatsApp
            </a>
          </p>
        </div>

        <div className="text-sm text-primary-foreground/80">
          <p className="mb-3 font-medium text-primary-foreground">Übersicht</p>
          <ul className="space-y-1.5">
            <li>
              <a href="#ueber-uns" className="hover:text-accent">
                Über uns
              </a>
            </li>
            <li>
              <a href="#services-preise" className="hover:text-accent">
                Services & Preise
              </a>
            </li>
            <li>
              <a href="#eindruecke" className="hover:text-accent">
                Eindrücke
              </a>
            </li>
            <li>
              <a href="#kontakt" className="hover:text-accent">
                Kontakt & Öffnungszeiten
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-4 py-5 text-center text-xs text-primary-foreground/60">
        &copy; {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
