'use client'

const examples = [
  {
    id: 'kovacs-autoszerviz',
    name: 'Kovács Autószerviz',
    description:
      'Local auto repair shop in Győr, Hungary. Editorial dark style with strong trust signals, process section, testimonials, and a lead-gen form.',
    industry: 'Automotive',
    language: 'Hungarian',
    style: 'Editorial Dark',
    url: '/examplelandings/kovacs-autoszerviz.html',
  },
]

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#0A0A0A',
    color: '#F4EEE2',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    WebkitFontSmoothing: 'antialiased',
  },
  topbar: {
    borderBottom: '1px solid #1A1A1A',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topbarLeft: { display: 'flex', flexDirection: 'column', gap: '2px' },
  label: {
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontSize: '10px',
    color: '#555',
    letterSpacing: '0.18em',
  },
  brandName: { fontSize: '18px', fontWeight: '700', margin: 0, letterSpacing: '-0.01em' },
  topbarLink: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    color: '#555',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  hero: {
    padding: '80px 40px 72px',
    borderBottom: '1px solid #1A1A1A',
    maxWidth: '1240px',
    margin: '0 auto',
  },
  eyebrow: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    letterSpacing: '0.18em',
    color: '#C8341B',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  eyebrowLine: { width: '32px', height: '1px', background: '#C8341B', display: 'inline-block' },
  heroTitle: {
    fontSize: 'clamp(40px, 6vw, 76px)',
    fontWeight: '800',
    lineHeight: '1',
    margin: '0 0 24px',
    letterSpacing: '-0.03em',
  },
  heroSub: { fontSize: '17px', color: '#666', maxWidth: '500px', lineHeight: '1.65', margin: 0 },
  section: { padding: '64px 40px', maxWidth: '1240px', margin: '0 auto' },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '40px',
    flexWrap: 'wrap' as const,
    gap: '16px',
  },
  sectionTitle: { fontSize: '13px', fontWeight: '700', margin: 0, letterSpacing: '0.05em', color: '#F4EEE2' },
  count: { fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#333', letterSpacing: '0.1em' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '1px',
    background: '#1A1A1A',
    border: '1px solid #1A1A1A',
  },
  card: {
    background: '#0A0A0A',
    padding: '40px 36px',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    transition: 'background 0.25s',
  },
  tags: { display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' as const },
  tag: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '9px',
    letterSpacing: '0.12em',
    color: '#444',
    border: '1px solid #222',
    padding: '4px 8px',
  },
  cardTitle: { fontSize: '24px', fontWeight: '700', margin: '0 0 12px', lineHeight: '1.1', letterSpacing: '-0.01em' },
  cardDesc: { fontSize: '14px', color: '#666', lineHeight: '1.65', margin: '0 0 36px' },
  cardCta: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    fontWeight: '600',
    color: '#C8341B',
    letterSpacing: '0.12em',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  placeholder: {
    background: '#0A0A0A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '260px',
  },
  placeholderInner: { textAlign: 'center' as const, color: '#222' },
  placeholderIcon: { fontSize: '28px', marginBottom: '12px', lineHeight: 1 },
  placeholderText: { fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.15em' },
  footer: {
    borderTop: '1px solid #1A1A1A',
    padding: '24px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  footerText: { fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#333', letterSpacing: '0.12em' },
}

export default function ExamplesGallery() {
  return (
    <main style={s.page}>
      {/* Top bar */}
      <header style={s.topbar}>
        <div style={s.topbarLeft}>
          <span style={s.label}>ALPINE STUDIOS</span>
          <h1 style={s.brandName}>Client Landings</h1>
        </div>
        <a href="/alpinestudios" style={s.topbarLink}>
          PORTFOLIO →
        </a>
      </header>

      {/* Hero */}
      <div style={s.hero}>
        <div style={s.eyebrow}>
          <span style={s.eyebrowLine} />
          EXAMPLE LANDINGS
        </div>
        <h2 style={s.heroTitle}>
          Landing pages<br />built for clients.
        </h2>
        <p style={s.heroSub}>
          Real examples of landing pages we build — each one production-ready,
          fast, and designed to convert visitors into customers.
        </p>
      </div>

      {/* Gallery */}
      <section style={s.section}>
        <div style={s.sectionHeader}>
          <span style={s.sectionTitle}>ALL EXAMPLES</span>
          <span style={s.count}>{String(examples.length).padStart(2, '0')} TOTAL</span>
        </div>

        <div style={s.grid}>
          {examples.map((ex) => (
            <a
              key={ex.id}
              href={ex.url}
              target="_blank"
              rel="noopener noreferrer"
              style={s.card}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#111' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0A0A0A' }}
            >
              <div style={s.tags}>
                {[ex.industry, ex.language, ex.style].map((tag) => (
                  <span key={tag} style={s.tag}>{tag.toUpperCase()}</span>
                ))}
              </div>
              <h3 style={s.cardTitle}>{ex.name}</h3>
              <p style={s.cardDesc}>{ex.description}</p>
              <span style={s.cardCta}>
                VIEW LANDING
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}

          {/* Placeholder */}
          <div style={s.placeholder}>
            <div style={s.placeholderInner}>
              <div style={s.placeholderIcon}>+</div>
              <div style={s.placeholderText}>MORE COMING SOON</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={s.footer}>
        <span style={s.footerText}>© 2026 ALPINE WEBDEVELOPMENT STUDIOS</span>
        <a href="/alpinestudios" style={{ ...s.footerText, color: '#444', textDecoration: 'none' }}>
          PORTFOLIO
        </a>
      </footer>
    </main>
  )
}
