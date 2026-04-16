'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '32px' }}>Contact Us</h1>

        <div style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px' }}>
          <p style={{ marginBottom: '32px' }}>
            Have questions about BESScareers? Fill out the form below and we'll get back to you within 24 hours.
          </p>

          {submitted && (
            <div style={{ backgroundColor: '#dcfce7', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', marginBottom: '32px', color: '#166534' }}>
              ✓ Thank you! We've received your message and will respond within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '8px', marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#0f172a' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#0f172a' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#0f172a' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#16a34a',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.5 : 1,
                fontSize: '16px',
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

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
        </div>
      </section>
    </div>
  );
}
