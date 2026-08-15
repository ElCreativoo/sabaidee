import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { hours, images, prices, site, treatments, openWhatsApp } from "@/lib/site";
import heroVideo from "@/assets/user-hero-video.mp4.asset.json";
import contactVideo from "@/assets/sabaidee-video.mp4.asset.json";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: "3110",
    addressLocality: "Münsingen",
    addressCountry: "CH",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  priceRange: "CHF 100–170",
};

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
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-transparent" />

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
              href="#kontakt"
              className="rounded-full bg-accent px-8 py-3.5 text-center font-medium text-accent-foreground shadow-lg transition-colors hover:bg-accent/90"
            >
              Termin vereinbaren
            </a>
            <a
              href="#eindruecke"
              className="rounded-full border border-primary-foreground/40 px-8 py-3.5 text-center font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Eindrücke
            </a>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-primary sm:text-4xl">Willkommen bei Sabai Dee</h2>
            <div className="mt-4 h-px w-14 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              „Sabai Dee" bedeutet Wohlbefinden. Genau darum geht es bei uns: Wir nehmen uns Zeit,
              suchen Verspannungen gezielt auf und passen den Druck Ihren Wünschen an.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sabai Dee ist ein kleines, persönlich geführtes Studio in Münsingen. Wir arbeiten mit
              traditionellen thailändischen Techniken, die über Generationen weitergegeben wurden –
              ergänzt durch Öl-, Hot-Stone- und Fussreflexzonenmassage. Keine Fliessbandtermine,
              sondern die Zeit, die eine Behandlung wirklich braucht.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={images.hero}
              alt="Inhaberin von Sabai Dee Thaimassage begrüsst Gäste im Behandlungsraum"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Erfahrung",
              text: "Ausgebildete Therapeutinnen mit langjähriger Praxis in traditioneller Thai-Massage.",
            },
            {
              title: "Ruhe",
              text: "Warme, saubere Räume, gedämpftes Licht und ein Empfang, an dem man ankommen darf.",
            },
            {
              title: "Individuell",
              text: "Jede Behandlung wird auf Ihre Verspannungen und Ihr Druckempfinden abgestimmt.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border/60">
              <h3 className="font-serif text-xl text-primary">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services-preise" className="scroll-mt-24 bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-primary sm:text-4xl">Services & Preise</h2>
            <div className="mx-auto mt-4 h-px w-14 bg-accent" />
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Jede Behandlung beginnt mit einem kurzen Gespräch: Wo drückt es, wie viel Druck ist
              angenehm? So passen wir die Massage genau an Sie an.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <div key={t.name} className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border/60">
                <h3 className="font-serif text-xl text-primary">{t.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                  60 · 90 · 120 Minuten
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60">
              <div className="border-b border-border/50 px-7 py-4">
                <h3 className="font-serif text-xl text-primary">Preise</h3>
              </div>
              {prices.map((p) => (
                <div
                  key={p.duration}
                  className="flex items-center justify-between border-b border-border/50 px-7 py-5 last:border-0"
                >
                  <span className="text-base text-foreground">{p.duration}</span>
                  <span className="font-serif text-2xl text-primary">{p.price}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border/60">
              <h3 className="font-serif text-xl text-primary">Weitere Dienstleistungen</h3>
              <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                {[
                  "Ayurvedische Massage",
                  "Chinesische Massage",
                  "Entspannende Massage",
                  "Fussmassage",
                  "Ganzkörpermassage",
                  "Heilmassage",
                  "Paarmassage",
                  "Schwedische Massage",
                  "Tiefengewebemassage",
                  "Therapeutische Massage",
                ].map((service) => (
                  <div key={service} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="break-words">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Preise gelten für alle Behandlungsarten. Barzahlung vor Ort.
          </p>
          <div className="mt-8 text-center">
            <a
              href={site.phoneHref}
              className="rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Termin unter {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section id="eindruecke" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-primary sm:text-4xl">Eindrücke</h2>
            <div className="mx-auto mt-4 h-px w-14 bg-accent" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {/* Reihe 1 – Buddha mittig */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.reception}
                alt="Empfangs- und Wartebereich mit Sofa"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.buddha}
                alt="Goldene Buddha-Statue mit Kerzenlicht im Studio"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.room}
                alt="Behandlungsraum mit traditioneller Thai-Matte"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Reihe 2 – Kerzenbild mittig unter dem Buddha */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.lounge}
                alt="Ruhebereich mit Vorhang und Sitzecke"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.hero}
                alt="Inhaberin im Behandlungsraum von Sabai Dee"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.entrance}
                alt="Eingangsbereich mit goldener Buddha-Statue"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Reihe 3 – links, Mitte, rechts */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.footMassage}
                alt="Fussmassage bei Kerzenlicht"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.candles}
                alt="Handtücher, Kerzen und Orchidee im Studio"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl hidden md:block">
              <img
                src={images.backMassage}
                alt="Rückenmassage im Studio Sabai Dee"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-primary sm:text-4xl">Kontakt & Öffnungszeiten</h2>
          <div className="mx-auto mt-4 h-px w-14 bg-accent" />
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Termine nach telefonischer Vereinbarung – gerne auch kurzfristig.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60">
              <h3 className="font-serif text-2xl text-primary">So erreichen Sie uns</h3>
              <address className="mt-6 space-y-1 not-italic text-muted-foreground">
                <p className="text-foreground">{site.name}</p>
                <p>{site.street}</p>
                <p>{site.city}</p>
              </address>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  Anrufen
                </a>
                <a
                  href={site.whatsapp}
                  onClick={openWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp schreiben
                </a>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground"
                >
                  <MapPin className="h-4 w-4" />
                  Route auf Google Maps
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60">
              <h3 className="font-serif text-2xl text-primary">Öffnungszeiten</h3>
              <ul className="mt-6 space-y-2.5 text-sm">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between border-b border-border/50 pb-2 last:border-0"
                  >
                    <span className={h.closed ? "text-muted-foreground" : "text-foreground"}>
                      {h.day}
                    </span>
                    <span
                      className={h.closed ? "text-muted-foreground" : "font-medium text-foreground"}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <video
              src={contactVideo.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-[360px] w-full object-cover"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
