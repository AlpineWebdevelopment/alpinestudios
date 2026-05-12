# Munkafolyamat — Ügyfél felvételétől az éles oldalig

## 1. Prospect kitölti a pitch form-ot
- Kapsz emailt a Formspree-től
- 24 órán belül hívd fel

## 2. Telefonhívás (5-10 perc)
Szükséges adatok:
- Teljes cégnév
- Városnév és irányítószám
- Pontos cím
- Telefonszám (megjelenítésre)
- Email cím
- Nyitvatartási idők
- Google értékelés (ha van)
- Meglévő domain (ha van)
- 2-3 mondatos bemutatkozás

## 3. Kliens mappa létrehozása
```bash
cp -r templates/autoszerelo clients/[slug]
cp templates/autoszerelo/config.example.json clients/[slug]/config.json
```

## 4. Adatok kitöltése
- Nyisd meg `clients/[slug]/config.json`
- Töltsd ki az összes mezőt
- Nyisd meg `clients/[slug]/index.html`
- Csináld meg a find-replace-t minden `{{TOKEN}}`-re

## 5. Formspree endpoint
- Menj: formspree.io → New Form
- Nevet adj: "[client-slug]-contact"
- Másold az endpoint URL-t
- Cseréld le `{{FORMSPREE_ENDPOINT}}`-ot

## 6. Tesztelés
- Nyisd meg `clients/[slug]/index.html` böngészőben
- Ellenőrizd 360px szélességen (Chrome DevTools)
- Töltsd ki a formot teszteléssel — jön-e az email?

## 7. Deploy
```bash
git add clients/[slug]/
git commit -m "feat: add client [slug]"
git push
```

## 8. Vercel beállítás
- Vercel dashboard → Add New Project
- Import repo → Set Root Directory: `clients/[slug]`
- Deploy → kapsz egy .vercel.app URL-t

## 9. Custom domain
- Vercel → Project Settings → Domains → Add domain
- Add DNS records a kliensnek (A record + CNAME)
- Kliens frissíti a DNS-t (24-48 óra propagáció)

## 10. Go live
- Ellenőrzöd az éles oldalt
- Küldöd a "kész az oldalad" emailt (sablon: `clients/_README.md`)
