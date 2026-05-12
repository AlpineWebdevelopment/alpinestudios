# Autószerelő Template

## How to deploy a new client

1. Copy this folder: `cp -r templates/autoszerelo clients/[client-slug]`
2. Copy config: `cp templates/autoszerelo/config.example.json clients/[client-slug]/config.json`
3. Fill in `config.json` with real client data
4. Open `index.html`, find-replace each `{{TOKEN}}` with its value from config.json
5. Swap testimonials (names, car models, cities) manually
6. Edit services if this client does something unusual
7. Open `index.html` in browser — check mobile at 360px width
8. `git add clients/[client-slug]/`
9. `git commit -m "feat: add client [client-slug]"`
10. `git push`
11. In Vercel dashboard: add new project → import this repo → set Root Directory to `clients/[client-slug]`
12. Add client's custom domain in Vercel → give them the DNS records
13. Client updates DNS → site goes live
14. Send "your site is live" email (template in `clients/_README.md`)

## Tokens reference
See `config.example.json` for all tokens and example values.
Services and testimonials are hardcoded — edit manually per client.
