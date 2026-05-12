# Design Notes

## Portfolio template (autószerelő)
**File:** `templates/autoszerelo/index.html`

**Fonts:** Anton (display) + Manrope (body) + DM Mono (labels)
**Palette:**
- Background: #F4EEE2 (warm cream)
- Ink: #0F0F0F
- Accent: #C8341B (signal red)
- Rule: #D9D2C2
- Dark sections: #141414

**Aesthetic:** Editorial industrial. Think auto trade magazine from 2019. Bold, no-nonsense.

## Pitch page (Lapozó sales site)
**File:** `pitch/index.html`

**Fonts:** Fraunces (display serif) + DM Sans (body) + DM Mono (labels/eyebrows)
**Palette:**
- Background: #F7F5F0 (warm off-white)
- Ink: #1A1A1A
- Ink dim: #6B6560
- Accent: #2563EB (electric blue)
- Rule: #E5E1D8
- Dark sections: #1A1A1A

**Aesthetic:** Confident indie agency. Editorial meets SaaS-lite. Fraunces gives warmth and character without feeling like a template.

**Why different from portfolio:** The portfolio page IS the product demo — it must feel like what a mechanic's site looks like. The pitch page is me selling — it should feel like the person building it knows what they're doing but isn't corporate.

## Adding new niche templates
When adding templates for new niches (lakatos, költöztető, esküvői DJ):
- Keep the same token system
- Vary the accent color per niche
- Keep the font system (same fonts, different weights/sizes)
- New niche goes in `templates/[niche]/`
