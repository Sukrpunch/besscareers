export const metadata = {
  title: 'Privacy Policy - BESScareers',
  description: 'Privacy policy for BESScareers',
};

export default function Privacy() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '32px' }}>Privacy Policy</h1>

        <div style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px' }}>
          <p style={{ marginBottom: '24px' }}>
            <strong>Last Updated: April 2026</strong>
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '32px', marginBottom: '16px' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '16px' }}>
            BESScareers collects information you voluntarily provide, such as:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <li>Email address (when you subscribe to updates)</li>
            <li>Usage data (pages visited, time spent, clicks)</li>
            <li>Device information (browser type, operating system)</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '32px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '16px' }}>
            We use collected information to:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <li>Send you career guides and updates</li>
            <li>Improve our website and content</li>
            <li>Analyze usage patterns</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '32px', marginBottom: '16px' }}>3. Data Security</h2>
          <p style={{ marginBottom: '24px' }}>
            We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '32px', marginBottom: '16px' }}>4. Third-Party Links</h2>
          <p style={{ marginBottom: '24px' }}>
            BESScareers contains links to external sites (such as BESSjobs.com). We are not responsible for the privacy practices of these third-party sites.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '32px', marginBottom: '16px' }}>5. Contact Us</h2>
          <p style={{ marginBottom: '24px' }}>
            If you have questions about this privacy policy, please use our{' '}
            <a href="/contact" style={{ color: '#16a34a', textDecoration: 'underline' }}>
              contact form
            </a>
            {' '}to get in touch.
          </p>
        </div>
      </section>
    </div>
  );
}
