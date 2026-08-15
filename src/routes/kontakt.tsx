import { createFileRoute } from "@tanstack/react-router";
import { hours, images, site } from "@/lib/site";

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

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Öffnungszeiten – Sabai Dee Thaimassage Münsingen" },
      {
        name: "description",
        content:
          "Sabai Dee Thaimassage, Bernstrasse 15, 3110 Münsingen. Mo–Do, Sa & So 10:00–20:00 Uhr. Telefon +41 77 482 89 92.",
      },
      { property: "og:title", content: "Kontakt – Sabai Dee Thaimassage Münsingen" },
      {
        property: "og:description",
        content: "Adresse, Öffnungszeiten und Telefonnummer für Ihren Termin in Münsingen.",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-serif text-4xl text-primary sm:text-5xl">Kontakt</h1>
          <div className="mt-4 h-px w-14 bg-accent" />
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Termine nach telefonischer Vereinbarung – gerne auch kurzfristig.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60">
            <h2 className="font-serif text-2xl text-primary">So erreichen Sie uns</h2>
            <address className="mt-6 space-y-1 not-italic text-muted-foreground">
              <p className="text-foreground">{site.name}</p>
              <p>{site.street}</p>
              <p>{site.city}</p>
            </address>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="rounded-full bg-primary px-6 py-3 text-center font-medium text-primary-foreground"
              >
                {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-6 py-3 text-center font-medium text-accent-foreground"
              >
                WhatsApp schreiben
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-center font-medium text-foreground"
              >
                Route auf Google Maps
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60">
            <h2 className="font-serif text-2xl text-primary">Öffnungszeiten</h2>
            <ul className="mt-6 space-y-2.5 text-sm">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between border-b border-border/50 pb-2 last:border-0"
                >
                  <span className={h.closed ? "text-muted-foreground" : "text-foreground"}>
                    {h.day}
                  </span>
                  <span className={h.closed ? "text-muted-foreground" : "font-medium text-foreground"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl shadow-xl">
          <img
            src={images.entrance}
            alt="Eingangsbereich von Sabai Dee Thaimassage mit Buddha-Statue"
            loading="lazy"
            className="h-[360px] w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
