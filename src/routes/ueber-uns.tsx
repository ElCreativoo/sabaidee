import { createFileRoute, Link } from "@tanstack/react-router";
import { gallery, images } from "@/lib/site";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Sabai Dee Thaimassage in Münsingen" },
      {
        name: "description",
        content:
          "Lernen Sie unser Studio in Münsingen kennen: erfahrene Thai-Massage, ruhige Räume und persönliche Betreuung an der Bernstrasse 15.",
      },
      { property: "og:title", content: "Über uns – Sabai Dee Thaimassage" },
      {
        property: "og:description",
        content: "Unser Studio, unsere Philosophie und Eindrücke aus den Räumen in Münsingen.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-serif text-4xl text-primary sm:text-5xl">Über uns</h1>
            <div className="mt-4 h-px w-14 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sabai Dee Thaimassage ist ein kleines, persönlich geführtes Studio in Münsingen. Wir
              arbeiten mit traditionellen thailändischen Techniken, die über Generationen
              weitergegeben wurden – ergänzt durch Öl-, Hot-Stone- und Fussreflexzonenmassage.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Bei uns gibt es keine Fliessbandtermine. Wir hören zu, arbeiten mit dem Druck, der
              Ihnen guttut, und nehmen uns die Zeit, die eine Behandlung braucht.
            </p>
            <Link
              to="/kontakt"
              className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Kontakt & Anfahrt
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={images.hero}
              alt="Inhaberin von Sabai Dee Thaimassage im Behandlungsraum"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
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
                <h2 className="font-serif text-xl text-primary">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-3xl text-primary">Eindrücke aus dem Studio</h2>
        <div className="mx-auto mt-4 h-px w-14 bg-accent" />
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
      </section>
    </div>
  );
}
