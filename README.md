# Lapozó — Landing Page Factory

Productized service: custom landing pages for Hungarian auto mechanics (autószerelő).
Price: 20,000 HUF flat. No monthly fees. 60-day guarantee.

## Repo structure

```
pitch/              My sales page (lapozó.hu or similar)
portfolio/          Example pages for cold outreach demos
templates/          Master templates — clone per client
clients/            One folder per paying client
docs/               Workflow, offer, design notes
_archive/           Previous scaffold (Next.js attempt)
```

## Shipping a new client (quick reference)

```bash
# 1. Copy template
cp -r templates/autoszerelo clients/[slug]
cp templates/autoszerelo/config.example.json clients/[slug]/config.json

# 2. Fill in data, replace tokens, test in browser

# 3. Deploy
git add clients/[slug]/
git commit -m "feat: add client [slug]"
git push

# 4. Vercel: new project → Root Directory: clients/[slug]
# 5. Add custom domain in Vercel dashboard
```

Full workflow: `docs/workflow.md`
Per-client checklist: `clients/_README.md`

## Sales
Cold outreach: Facebook Messenger, Google Maps email scrape.
Pitch page: `pitch/index.html` (send this link to prospects).
Portfolio: `portfolio/kovacs-autoszerviz/` (live example).
