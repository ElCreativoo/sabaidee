import { createFileRoute, Link } from "@tanstack/react-router";
import { gallery, hours, images, prices, site, treatments } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sabai Dee Thaimassage Münsingen – Traditionelle Thai-Massage" },
      {
        name: "description",
        content:
          "Traditionelle Thai-Massage in Münsingen. Öl-, Hot-Stone- und Fussmassage an der Bernstrasse 15. 60 Min ab CHF 100. Termine nach Vereinbarung.",
      },
      { property: "og:title", content: "Sabai Dee Thaimassage Münsingen" },
      {
        property: "og:description",
        content:
          "Traditionelle Thai-Massage in ruhiger Atmosphäre – Bernstrasse 15, 3110 Münsingen.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <img
          src={images.hero}
          alt="Inhaberin von Sabai Dee Thaimassage begrüsst Gäste im Behandlungsraum"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/25" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Münsingen</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
            Sabai Dee Thaimassage
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            Traditionelle Thai-Techniken mit Druck- und Dehnbewegungen, Öl-, Hot-Stone- und
            Fussmassage – ruhig, professionell und individuell auf Sie abgestimmt.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="rounded-full bg-accent px-8 py-3.5 text-center font-medium text-accent-foreground shadow-lg transition-colors hover:bg-accent/90"
            >
              Termin vereinbaren
            </a>
            <Link
              to="/behandlungen"
              className="rounded-full border border-primary-foreground/40 px-8 py-3.5 text-center font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Behandlungen & Preise
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-primary sm:text-4xl">Willkommen bei Sabai Dee</h2>
            <div className="mt-4 h-px w-14 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              „Sabai Dee" bedeutet Wohlbefinden. Genau darum geht es bei uns: Wir nehmen uns Zeit,
              suchen Verspannungen gezielt auf und passen den Druck Ihren Wünschen an.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Erfahrene Hände, warme Räume und eine ruhige Atmosphäre mitten in Münsingen – für
              spürbare Entlastung nach jeder Behandlung.
            </p>
            <Link
              to="/ueber-uns"
              className="mt-7 inline-block text-sm font-medium text-primary underline underline-offset-4"
            >
              Mehr über das Studio
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={images.reception}
              alt="Wartebereich mit Sofa und Buddha-Figur im Studio Sabai Dee"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-primary sm:text-4xl">Preise</h2>
            <div className="mx-auto mt-4 h-px w-14 bg-accent" />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {prices.map((p) => (
              <div
                key={p.duration}
                className="rounded-2xl bg-card p-8 text-center shadow-sm ring-1 ring-border/60"
              >
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  {p.duration}
                </p>
                <p className="mt-3 font-serif text-3xl text-primary">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Gilt für alle Behandlungen. Termine nach Vereinbarung.
          </p>
          <div className="mt-6 text-center">
            <Link
              to="/behandlungen"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Alle Behandlungen ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-primary sm:text-4xl">Unsere Behandlungen</h2>
          <div className="mx-auto mt-4 h-px w-14 bg-accent" />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border/60">
              <h3 className="font-serif text-xl text-primary">{t.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-primary sm:text-4xl">Eindrücke</h2>
            <div className="mx-auto mt-4 h-px w-14 bg-accent" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {gallery.map((img) => (
              <div key={img.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60">
            <h2 className="font-serif text-2xl text-primary">Öffnungszeiten</h2>
            <ul className="mt-6 space-y-2.5 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-border/50 pb-2 last:border-0">
                  <span className={h.closed ? "text-muted-foreground" : "text-foreground"}>{h.day}</span>
                  <span className={h.closed ? "text-muted-foreground" : "font-medium text-foreground"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-sm">
            <h2 className="font-serif text-2xl">Termin vereinbaren</h2>
            <p className="mt-4 text-primary-foreground/85">
              Rufen Sie uns an oder schreiben Sie uns kurz per WhatsApp – wir finden gemeinsam einen
              passenden Termin.
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70">
              {site.street}, {site.city}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="rounded-full bg-accent px-6 py-3 text-center font-medium text-accent-foreground"
              >
                {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-center font-medium"
              >
                Via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
