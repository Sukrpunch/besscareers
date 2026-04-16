import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BESScareers — Battery Energy Storage Careers',
  description: 'Find BESS careers, master industry skills, and earn $100K–$200K+. Your guide to the future of energy storage.',
  openGraph: {
    title: 'BESScareers — Battery Energy Storage Careers',
    description: 'Find BESS careers, master industry skills, and earn $100K–$200K+. Your guide to the future of energy storage.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find BESS careers, master industry skills, and earn $100K–$200K+. Your guide to the future of energy storage." />
        <meta property="og:title" content="BESScareers — Battery Energy Storage Careers" />
        <meta property="og:description" content="Find BESS careers, master industry skills, and earn $100K–$200K+. Your guide to the future of energy storage." />
        <meta property="og:type" content="website" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: 'white', color: '#1e293b' }}>
        {/* Navigation */}
        <nav style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', paddingTop: '16px', paddingBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#16a34a' }}>BESS</span><span>careers</span>
            </a>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <a href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '16px' }}>
                Home
              </a>
              <a href="/#articles" style={{ color: '#64748b', textDecoration: 'none', fontSize: '16px' }}>
                Guides
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc', paddingTop: '48px', paddingBottom: '48px', marginTop: '80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
            {/* Footer Links Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '48px' }}>
              {/* Brand Section */}
              <div>
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a' }}>
                  <span style={{ color: '#16a34a' }}>BESS</span>careers
                </p>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '14px' }}>
                  Career guides and salary benchmarks for Battery Energy Storage professionals.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: '#0f172a', marginBottom: '16px', letterSpacing: '0.05em' }}>
                  Navigation
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>
                      Home
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/#articles" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>
                      Career Guides
                    </a>
                  </li>
                </ul>
              </div>

              {/* External */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: '#0f172a', marginBottom: '16px', letterSpacing: '0.05em' }}>
                  Jobs
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="https://www.bessjobs.com" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }} target="_blank" rel="noopener noreferrer">
                      BESSjobs Job Board
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="https://www.bessjobs.com/companies" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }} target="_blank" rel="noopener noreferrer">
                      Featured Companies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright & Bottom Links */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                  © 2026 BESScareers. Part of the BESS ecosystem.
                </p>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <a href="/privacy" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>
                    Privacy Policy
                  </a>
                  <a href="/terms" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>
                    Terms of Service
                  </a>
                  <a href="/contact" style={{ color: '#64748b', textDecoration: 'none', fontSize: '12px' }}>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
