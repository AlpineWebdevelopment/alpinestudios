# Client Onboarding Checklist

## Info to collect (phone call)
- [ ] Teljes cégnév
- [ ] Város + irányítószám
- [ ] Pontos cím
- [ ] Telefonszám
- [ ] Email cím
- [ ] Nyitvatartás (H-P, Szo, V)
- [ ] Alapítás éve
- [ ] Google Maps link (értékelés + darab)
- [ ] Meglévő domain (ha van)
- [ ] Adószám (footer miatt)

## Setup checklist
- [ ] `cp -r templates/autoszerelo clients/[slug]`
- [ ] Fill config.json
- [ ] Find-replace all {{TOKENS}}
- [ ] Create Formspree form → swap endpoint
- [ ] Test form submission
- [ ] Test at 360px width
- [ ] Commit + push
- [ ] Create Vercel project (Root Dir: clients/[slug])
- [ ] Add domain in Vercel
- [ ] Give client DNS records

## "Your site is live" email template
Subject: Kész az oldalad! 🚀

Szia [Név]!

Az oldalad élesben van: [domain]

Amit most csinálj:
1. Nézd meg mobilon — így látják az ügyfeleid
2. Töltsd ki a formot teszteléssel — jön-e az email?
3. Ha bármit változtatnál (szöveg, nyitvatartás), szólj — 1 menet módosítás benne van

60 napon belül 5 hívást garantálunk. Ha nem jön, visszaadjuk a 20.000 Ft-ot.

[Neved]
[Telefonod]
