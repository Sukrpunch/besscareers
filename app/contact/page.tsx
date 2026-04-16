export const metadata = {
  title: 'Contact - BESScareers',
  description: 'Contact BESScareers',
};

export default function Contact() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '32px' }}>Contact Us</h1>

        <div style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px' }}>
          <p style={{ marginBottom: '32px' }}>
            Have questions about BESScareers? We'd love to hear from you.
          </p>

          <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '8px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Email</h2>
            <p style={{ marginBottom: '16px' }}>
              <a href="mailto:hello@besscareers.com" style={{ color: '#16a34a', textDecoration: 'underline', fontSize: '18px', fontWeight: 'bold' }}>
                hello@besscareers.com
              </a>
            </p>
            <p style={{ color: '#64748b', fontSize: '14px' }}>We respond to all inquiries within 24 hours.</p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '8px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>For Job Postings & Recruiting</h2>
            <p style={{ marginBottom: '16px' }}>
              Visit{' '}
              <a href="https://www.bessjobs.com" style={{ color: '#16a34a', textDecoration: 'underline', fontWeight: 'bold' }}>
                BESSjobs.com
              </a>
              {' '}to post jobs or find BESS Professionals.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Career Guidance</h2>
            <p style={{ marginBottom: '16px' }}>
              Explore our{' '}
              <a href="/" style={{ color: '#16a34a', textDecoration: 'underline', fontWeight: 'bold' }}>
                career guides
              </a>
              {' '}to learn about BESS career paths, salary benchmarks, and skill development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
