import { createFileRoute } from "@tanstack/react-router";
import { images, prices, site, treatments } from "@/lib/site";

export const Route = createFileRoute("/behandlungen")({
  head: () => ({
    meta: [
      { title: "Behandlungen & Preise – Sabai Dee Thaimassage Münsingen" },
      {
        name: "description",
        content:
          "Thai-Massage, Ölmassage, Fussreflexzonen- und Hot-Stone-Massage in Münsingen. 60 Min CHF 100, 90 Min CHF 130, 120 Min CHF 170.",
      },
      { property: "og:title", content: "Behandlungen & Preise – Sabai Dee Thaimassage" },
      {
        property: "og:description",
        content: "Unsere Massagen und Preise im Studio an der Bernstrasse 15 in Münsingen.",
      },
    ],
  }),
  component: Treatments,
});

function Treatments() {
  return (
    <div>
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-serif text-4xl text-primary sm:text-5xl">Behandlungen & Preise</h1>
          <div className="mt-4 h-px w-14 bg-accent" />
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Jede Behandlung beginnt mit einem kurzen Gespräch: Wo drückt es, wie viel Druck ist
            angenehm? So passen wir die Massage genau an Sie an.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border/60">
              <h2 className="font-serif text-xl text-primary">{t.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <p className="mt-5 text-xs uppercase tracking-widest text-accent-foreground/70">
                60 · 90 · 120 Minuten
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl text-primary">Preisübersicht</h2>
          <div className="mx-auto mt-4 h-px w-14 bg-accent" />
          <div className="mt-10 overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60">
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={images.room}
            alt="Behandlungsraum mit Massagematte im Studio Sabai Dee"
            loading="lazy"
            className="h-[380px] w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
