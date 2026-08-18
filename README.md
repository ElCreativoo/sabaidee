# Serene Spaces

SabiDeeWebsite                                                                                                                                      erstellen  - hast du alles oder fehlt etwas?package.json{
  "name": "app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.2",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "oxlint": "^1.71.0",
    "tailwindcss": "^4.3.2",
    "vite": "^8.1.1"
  }src
}import { useState } from 'react';

const services = [

  { name: 'Traditionelle Thai-Massage (Nuad Thai)', duration: '60 Min', price: 'CHF 90' },

  { name: 'Thai-Ölmassage', duration: '60 Min', price: 'CHF 90' },

  { name: 'Rücken-, Nacken- und Schultermassage', duration: '60 Min', price: 'CHF 90' },

  { name: 'Thai-Fussreflexzonenmassage', duration: '60 Min', price: 'CHF 90' },

  { name: 'Hot-Stone-Massage', duration: '60 Min', price: 'CHF 90' },

];

const reviews = [

  {

    name: 'Monika B.',

    date: 'März 2025',

    source: 'via Google',

    text: 'Excellent massage. Special technique. Pain points perfectly identified. Very friendly and a lovely studio. I will definitely book again. It was practically pain-free; I was really tense beforehand.',

  },

  {

    name: 'Marcel H.',

    date: 'Feb. 2025',

    source: 'via Google',

    text: 'My visit with Duang was an entirely positive experience. Her professional and friendly manner immediately created a pleasant atmosphere. Her attentive approach was particularly impressive – she actively asked if the pressure intensity was comfortable and adjusted it perfectly to my needs. With a trained eye and skillful hands, she precisely located my areas of tension. After the treatment, I left the studio with significantly less pain and felt noticeably more relaxed.',

  },

];

const hours = [

  { day: 'Montag', time: 'Geschlossen' },

  { day: 'Dienstag', time: '10:00 – 20:00' },

  { day: 'Mittwoch', time: '10:00 – 20:00' },

  { day: 'Donnerstag', time: '10:00 – 20:00' },

  { day: 'Freitag', time: '10:00 – 20:00' },

  { day: 'Samstag', time: '10:00 – 20:00' },

  { day: 'Sonntag', time: '10:00 – 20:00' },

];

function StarIcon() {

  return (

    <svg className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">

      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />

    </svg>

  );

}

function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          <a href="#" className="flex items-center gap-2 shrink-0">

            <img src="/logo.png?v=6" alt="DuangDee" className="h-10 w-auto" />

          </a>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8">

            <a href="#about" className="text-sm text-gray-600 hover:text-deep-teal transition-colors">Über uns</a>

            <a href="#services" className="text-sm text-gray-600 hover:text-deep-teal transition-colors">Services & Preise</a>

            <a href="#hours" className="text-sm text-gray-600 hover:text-deep-teal transition-colors">Öffnungszeiten</a>

            <a href="#contact" className="text-sm text-gray-600 hover:text-deep-teal transition-colors">Kontakt</a>

          </div>

          <div className="hidden md:flex items-center shrink-0">

            <a href="https://wa.me/41768140311" target="_blank" rel="noopener noreferrer" className="bg-deep-teal hover:bg-soft-teal text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">

              Via WhatsApp

            </a>

          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600" aria-label="Menü">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

              {open ? (

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

              ) : (

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

              )}

            </svg>

          </button>

        </div>

        {open && (

          <div className="md:hidden pb-4 flex flex-col gap-3">

            <a href="#about" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-deep-teal">Über uns</a>

            <a href="#services" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-deep-teal">Services & Preise</a>

            <a href="#hours" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-deep-teal">Öffnungszeiten</a>

            <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-deep-teal">Kontakt</a>

            <a href="https://wa.me/41768140311" target="_blank" rel="noopener noreferrer" className="bg-deep-teal text-white text-sm font-medium px-5 py-2 rounded-full text-center w-fit">Via WhatsApp</a>

          </div>

        )}

      </div>

    </nav>

  );

}

function Hero() {

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}

      <video

        autoPlay

        muted

        loop

        playsInline

        poster="/user-massage-room.jpg"

        className="absolute inset-0 w-full h-full object-cover"

        aria-hidden="true"

      >

        <source src="/user-hero-video.mp4" type="video/mp4" />

      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 opacity-10" style={{

        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,

      }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <img

          src="/logo.png?v=6"

          alt="DuangDee Traditionelle Thai-Massage"

          className="max-w-[220px] sm:max-w-[320px] md:max-w-[400px] w-full mx-auto mb-3"

          style={{ filter: 'drop-shadow(2px 0 0 rgba(255,255,255,0.9)) drop-shadow(-2px 0 0 rgba(255,255,255,0.9)) drop-shadow(0 2px 0 rgba(255,255,255,0.9)) drop-shadow(0 -2px 0 rgba(255,255,255,0.9))' }}

        />

        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-6">

          Klassische Thai-Techniken mit Druck- und Dehnbewegungen – professionell und individuell abgestimmt

        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a href="#contact" className="bg-gold-400 hover:bg-gold-300 text-warm-900 font-semibold px-8 py-3.5 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">

            Termin vereinbaren

          </a>

          <a href="#services" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-lg transition-all">

            Services & Preise

          </a>

        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />

        </svg>

      </div>

    </section>

  );

}

function About() {

  return (

    <section id="about" className="py-20 sm:py-28 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-deep-teal mb-4">Willkommen bei DuangDee</h2>

          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />

        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Image */}

          <div className="relative overflow-hidden rounded-2xl shadow-lg min-h-[300px]">

            <img

              src="/user-back-massage.jpg"

              alt="Traditionelle Thai-Massage"

              className="absolute inset-0 w-full h-full object-cover"

              loading="lazy"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 to-transparent" />

          </div>

          {/* Text */}

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col justify-center">

            <p className="text-gray-700 text-lg leading-relaxed mb-5">

              DuangDee Traditionelle Thai-Massage in Wohlen bei Bern setzt auf klassische Thai-Techniken mit Druck- und Dehnbewegungen sowie ergänzende Behandlungen wie Öl-, Hot-Stone- und Thai-Fuss-Massage.

            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">

              Unsere Arbeit ist professionell und individuell abgestimmt. Wir legen grossen Wert darauf, auf Ihre persönlichen Bedürfnisse einzugehen – von der genauen Suche nach Verspannungen bis zum gewünschten Druck.

            </p>

            <p className="text-gray-700 text-lg leading-relaxed">

              Geniessen Sie eine angenehme und ruhige Atmosphäre mit spürbarer Entlastung nach der Behandlung.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

function Services() {

  return (

    <section id="services" className="py-20 sm:py-28 px-4 bg-warm-50 relative overflow-hidden">

      {/* Decorative background image */}

      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">

        <img

          src="/user-buddha.jpg"

          alt=""

          className="w-full h-full object-cover object-top"

          loading="lazy"

          aria-hidden="true"

        />

      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-deep-teal mb-4">Services & Preise</h2>

          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />

        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {services.map((s, i) => (

            <div key={i} className={`flex items-center justify-between p-5 sm:p-6 ${i < services.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-warm-50/50 transition-colors`}>

              <div className="flex-1">

                <h3 className="font-semibold text-gray-800">{s.name}</h3>

                <span className="text-sm text-gray-500">{s.duration}</span>

              </div>

              <span className="text-xl font-bold text-deep-teal whitespace-nowrap ml-4">{s.price}</span>

            </div>

          ))}

        </div>

        <p className="text-center text-gray-500 text-sm mt-4">

          Änderungen vorbehalten. Termine nur nach Vereinbarung.

        </p>

      </div>

    </section>

  );

}

function Reviews() {

  return (

    <section id="reviews" className="py-12 px-4 bg-warm-50">

      <div className="max-w-3xl mx-auto text-center">

        <div className="flex items-center justify-center gap-1 mb-3">

          {[...Array(5)].map((_, i) => <StarIcon key={i} />)}

          <span className="text-gray-600 ml-2 text-sm">5.0 · Hervorragend</span>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {reviews.map((r, i) => (

            <div key={i} className="bg-white rounded-xl shadow-sm p-4 sm:p-5 flex-1 max-w-md">

              <p className="text-gray-600 text-sm leading-relaxed">"{r.text}"</p>

              <p className="text-xs text-gray-400 mt-2">— {r.name}, {r.date}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

function Gallery() {

  const images = [

    { src: '/user-foot-massage.jpg', alt: 'Fussmassage mit Aromatherapie' },

    { src: '/user-back-massage.jpg', alt: 'Rückenmassage' },

    { src: '/user-massage-room.jpg', alt: 'Massage-Behandlung' },

    { src: '/user-massage-candles.jpg?v=2', alt: 'Entspannungsatmosphäre' },

    { src: '/user-buddha.jpg', alt: 'Meditation und Ruhe', position: 'object-top' },

    { src: '/user-leg-massage.jpg', alt: 'Beinmassage' },

  ];

  return (

    <section id="gallery" className="py-20 sm:py-28 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-deep-teal mb-4">Eindrücke</h2>

          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />

          <p className="text-gray-600 mt-4 text-lg">Entdecken Sie die entspannende Atmosphäre</p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">

          {images.map((img, i) => (

            <div key={i} className="relative overflow-hidden rounded-xl shadow-md group aspect-[4/3]">

              <img

                src={img.src}

                alt={img.alt}

                className={`absolute inset-0 w-full h-full object-cover ${img.position || 'object-center'} transition-transform duration-500 group-hover:scale-110`}

                loading="lazy"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">

                {img.alt}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

function Hours() {

  return (

    <section id="hours" className="py-20 sm:py-28 px-4 bg-warm-50">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-deep-teal mb-4">Öffnungszeiten</h2>

          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">

          <div className="text-center mb-6">

            <span className="inline-block bg-lotus/10 text-lotus rounded-full px-4 py-1.5 text-sm font-medium">

              Geschlossen · öffnet Di 10:00

            </span>

          </div>

          <div className="space-y-3">

            {hours.map((h, i) => (

              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">

                <span className={`font-medium ${h.day === 'Montag' ? 'text-gray-400' : 'text-gray-700'}`}>{h.day}</span>

                <span className={`${h.day === 'Montag' ? 'text-gray-400' : 'text-gray-800 font-semibold'}`}>{h.time}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

function Contact() {

  return (

    <section id="contact" className="py-20 sm:py-28 px-4">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-deep-teal mb-4">Kontakt</h2>

          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />

        </div>

        <div className="grid sm:grid-cols-2 gap-8">

          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-bold text-deep-teal mb-6">Adresse</h3>

              <div className="space-y-4">

                <div className="flex items-start gap-3">

                  <svg className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />

                  </svg>

                  <div>

                    <p className="font-semibold text-gray-800">DuangDee Traditionelle Thai-Massage</p>

                    <p className="text-gray-600">Bernstrasse 13</p>

                    <p className="text-gray-600">3032 Wohlen bei Bern</p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <svg className="w-5 h-5 text-deep-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />

                  </svg>

                  <a href="tel:+41768140311" className="text-deep-teal hover:text-soft-teal font-semibold transition-colors">+41 76 814 03 11</a>

                  <span className="text-gray-300">|</span>

                  <a href="https://wa.me/41768140311" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors">Via WhatsApp</a>

                </div>

              </div>

              <a href="tel:+41768140311" className="mt-6 inline-block w-full bg-deep-teal hover:bg-soft-teal text-white font-semibold text-center py-3.5 rounded-full transition-all shadow-md">

                Jetzt anrufen

              </a>

            </div>

            {/* Studio image */}

            <div className="relative overflow-hidden rounded-2xl shadow-lg min-h-[200px]">

              <video

                autoPlay

                muted

                loop

                playsInline

                poster="/user-massage-candles.jpg?v=2"

                className="absolute inset-0 w-full h-full object-cover"

              >

                <source src="/contact-video.mp4?v=1" type="video/mp4" />

              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/40 to-transparent" />

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-xl font-bold text-deep-teal mb-6">Weitere Dienstleistungen</h3>

            <ul className="space-y-2.5 text-gray-700">

              {[

                'Ayurvedische Massage',

                'Chinesische Massage',

                'Entspannende Massage',

                'Fussmassage',

                'Ganzkörpermassage',

                'Heilmassage',

                'Paarmassage',

                'Schwedische Massage',

                'Tiefengewebemassage',

                'Therapeutische Massage',

              ].map((item, i) => (

                <li key={i} className="flex items-center gap-2">

                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />

                  {item}

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>

  );

}

function Footer() {

  return (

    <footer className="bg-deep-teal text-white/80 py-12 px-4">

      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 px-4">

        <div className="shrink-0">

          <img

            src="/logo.png?v=6"

            alt="DuangDee"

            className="h-20 sm:h-24 w-auto"

            style={{ filter: 'drop-shadow(1px 0 0 rgba(255,255,255,0.6)) drop-shadow(-1px 0 0 rgba(255,255,255,0.6)) drop-shadow(0 1px 0 rgba(255,255,255,0.6)) drop-shadow(0 -1px 0 rgba(255,255,255,0.6))' }}

          />

        </div>

        <div className="text-center sm:text-right ml-auto">

          <p className="text-lg font-bold text-white font-['Playfair_Display']">DuangDee</p>

          <p className="text-sm text-white/70">Traditionelle Thai-Massage</p>

          <p className="text-sm mt-2">Bernstrasse 13, 3032 Wohlen bei Bern</p>

          <p className="text-sm mt-1">

            <a href="https://wa.me/41768140311" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+41 76 814 03 11 (WhatsApp)</a>

          </p>

          <div className="w-12 h-0.5 bg-gold-400/50 my-4" />

          <p className="text-xs text-white/60">

            &copy; {new Date().getFullYear()} DuangDee Traditionelle Thai-Massage

          </p>

        </div>

      </div>

    </footer>

  );

}

export default function App() {

  return (

    <div className="min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Gallery />

      <Hours />

      <Contact />

      <Reviews />

      <Footer />

    </div>

  );

}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sabaidee.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/49542b79-8405-4eaa-b20d-ad20e230cb5e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
