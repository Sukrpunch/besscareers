export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(to bottom right, #1e293b, #0f172a)', color: 'white', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>
            Master BESS. <br />
            <span style={{ color: '#4ade80' }}>Build Your Future.</span>
          </h1>

          <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px' }}>
            Deep career guides for Battery Energy Storage engineers. Learn the skills that command $100K–$200K+.
          </p>

          <a href="https://www.bessjobs.com" style={{ display: 'inline-block', backgroundColor: '#16a34a', color: 'white', fontWeight: 'bold', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px' }}>
            Find Jobs on BESSjobs →
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#16a34a', marginBottom: '8px' }}>$150K+</div>
            <p style={{ color: '#64748b' }}>Average salary for specialized BESS roles</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#16a34a', marginBottom: '8px' }}>40%+ CAGR</div>
            <p style={{ color: '#64748b' }}>BESS market growth through 2030</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#16a34a', marginBottom: '8px' }}>5 Guides</div>
            <p style={{ color: '#64748b' }}>Skill-to-salary career paths</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#16a34a', color: 'white', padding: '64px 20px' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>Ready to Build Your BESS Career?</h2>
          <p style={{ fontSize: '18px', color: '#dcfce7', marginBottom: '32px' }}>
            Master the skills that command premium salaries in energy storage.
          </p>
          <a href="https://www.bessjobs.com" style={{ display: 'inline-block', backgroundColor: 'white', color: '#16a34a', fontWeight: 'bold', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none' }}>
            Browse Jobs on BESSjobs →
          </a>
        </div>
      </section>
    </div>
  );
}
