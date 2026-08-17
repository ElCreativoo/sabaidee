# Deployment auf Vercel

Diese App ist ein TanStack-Start-Projekt (Vite + Nitro). Standardmässig baut Lovable
für Cloudflare. Für Vercel wird der Nitro-Preset `vercel` verwendet – Nitro schreibt
dann direkt in `.vercel/output` (Vercel Build Output API), Vercel erkennt das automatisch.

## Schritte

1. **GitHub verbinden**
   In Lovable oben rechts auf `GitHub` → `Connect to GitHub` → Repo erstellen/pushen.

2. **Projekt in Vercel anlegen**
   vercel.com → `Add New…` → `Project` → das Repo importieren.

3. **Framework Preset**
   In den Vercel-Projekteinstellungen `Framework Preset: Other` wählen.
   Build/Install-Command kommen aus der `vercel.json` im Repo:
   - Install: `npm install`
   - Build: `npm run build`
   - Output Directory: leer lassen (Build Output API `.vercel/output`)

4. **Environment Variable setzen**
   Projekt → `Settings` → `Environment Variables` (für Production **und** Preview):

   ```
   NITRO_PRESET = vercel
   ```

   (steht auch in `vercel.json` unter `build.env`, doppelt schadet nicht)

   Falls du später weitere Variablen nutzt: Alles, was im Browser gebraucht wird,
   muss mit `VITE_` beginnen. Server-Secrets ohne Prefix.

5. **Deploy**
   `Deploy` klicken. Danach unter `Settings` → `Domains` deine Domain
   (z. B. `www.sabai-dee.ch`) hinzufügen und die DNS-Einträge bei deinem
   Domain-Anbieter setzen, die Vercel dort anzeigt.

## Lokal testen

```bash
npm install
NITRO_PRESET=vercel npm run build
npx vercel dev      # oder: npx vercel build && npx vercel deploy --prebuilt
```

## Hinweise

- Node-Version in Vercel: `22.x` (Settings → General → Node.js Version).
- Der Cloudflare-Preset wird nur innerhalb der Lovable-Umgebung erzwungen;
  ausserhalb greift `NITRO_PRESET`.
- Änderungen in Lovable landen weiterhin im GitHub-Repo – Vercel deployed
  bei jedem Push automatisch neu.
- Die Lovable-Publikation (`sabaidee.lovable.app`) funktioniert parallel weiter.
