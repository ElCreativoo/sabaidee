# Sabai Dee Thaimassage – Website

Eine elegante, ruhige Website für das Massagestudio in Münsingen, aufgebaut nach dem Muster der gesendeten Vorlage, aber mit den Daten von Sabai Dee.

## Inhalte (bestätigt)

- Name: Sabai Dee Thaimassage
- Adresse: Bernstrasse 15, 3110 Münsingen
- Telefon / WhatsApp: +41 77 482 89 92
- Öffnungszeiten: Mo–Do, Sa & So 10:00–20:00 Uhr, Freitag geschlossen
- Preise: 60 Min 100 CHF · 90 Min 130 CHF · 120 Min 170 CHF

## Seitenstruktur

Separate Routen statt einer reinen Anker-Seite (besser für Google und zum Teilen):

- `/` – Startseite: Hero mit Studioname, Kurzvorstellung, Preis-Highlights, Öffnungszeiten-Box, Kontakt-Call-to-Action
- `/behandlungen` – Massagearten und Preistabelle (60/90/120 Min)
- `/ueber-uns` – Studio, Philosophie, Atmosphäre
- `/kontakt` – Adresse, Telefon, WhatsApp-Button, Öffnungszeiten, Anfahrt

Gemeinsame Kopfzeile mit Navigation und Fusszeile auf allen Seiten. Mobiles Menü als Burger.

## Behandlungen (Vorschlag, anpassbar)

Traditionelle Thai-Massage, Thai-Ölmassage, Rücken-/Nacken-/Schultermassage, Fussreflexzonenmassage, Hot-Stone-Massage, Aroma-Ölmassage – jeweils mit den drei Dauer-/Preisstufen.

## Design

Warme, ruhige Thai-Spa-Anmutung: tiefes Teal/Jade als Hauptfarbe, sanftes Gold als Akzent, cremefarbener Hintergrund, edle Serifen-Überschriften (Playfair Display) mit klarer Grotesk für Fliesstext. Grosszügige Abstände, abgerundete Karten, dezente Hover-Effekte.

## Bilder

Da noch keine eigenen Fotos vorliegen, generiere ich passende, stimmige Bilder (Massageraum, Kerzen/Öle, Detailaufnahmen) sowie ein schlichtes Wortmarken-Logo „Sabai Dee". Diese lassen sich später eins zu eins durch echte Studiofotos ersetzen. Kein Hintergrundvideo – stattdessen ein ruhiges Hero-Bild.

## Technisches

- TanStack-Start-Routen unter `src/routes/`, Platzhalter-Index wird ersetzt
- Farben und Schriften als Design-Tokens in `src/styles.css`, keine fest verdrahteten Farbklassen
- Eigene SEO-Metadaten (Titel, Beschreibung, og-Tags) pro Route, lokale Geschäftsdaten als JSON-LD auf der Kontaktseite
- Telefon- (`tel:`) und WhatsApp-Links (`wa.me/41774828992`), keine Formular-Backend-Logik nötig

## Offen

Falls eigene Fotos, ein bestehendes Logo oder ein anderer Behandlungskatalog existieren, jederzeit nachreichen – ich tausche sie aus.
