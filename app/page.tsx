import fs from 'fs';
import path from 'path';

interface Article {
  slug: string;
  title: string;
  description: string;
  salary: string;
  role: string;
}

function parseMDX(filePath: string): { title: string; description: string; salary: string; role: string; slug: string } {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatterMatch) {
    throw new Error(`Invalid MDX format in ${filePath}`);
  }

  const metadata: any = { slug: '' };
  frontmatterMatch[1].split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      metadata[key.trim()] = value;
    }
  });

  return metadata;
}

function getArticles(): Article[] {
  try {
    const contentDir = path.join(process.cwd(), 'content');
    if (!fs.existsSync(contentDir)) {
      return [];
    }

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
    return files.map(file => {
      const metadata = parseMDX(path.join(contentDir, file));
      return {
        slug: metadata.slug || file.replace('.mdx', ''),
        title: metadata.title || 'Untitled',
        description: metadata.description || '',
        salary: metadata.salary || '',
        role: metadata.role || '',
      };
    }).sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}

export default function Home() {
  const articles = getArticles();

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(to bottom right, #1e293b, #0f172a)', color: 'white', padding: '80px 20px', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 56px)', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>
            Master BESS. <br />
            <span style={{ color: '#4ade80' }}>Build Your Future.</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 4vw, 20px)', color: '#cbd5e1', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px' }}>
            Deep career guides for Battery Energy Storage Professionals. Learn the skills that command $100K–$200K+.
          </p>

          <a
            href="#articles"
            style={{
              display: 'inline-block',
              backgroundColor: '#16a34a',
              color: 'white',
              fontWeight: 'bold',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Explore Career Guides ↓
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(2rem, 6vw, 48px)', fontWeight: 'bold', color: '#16a34a', marginBottom: '8px' }}>
              $150K+
            </div>
            <p style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
              Average salary for specialized BESS roles
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(2rem, 6vw, 48px)', fontWeight: 'bold', color: '#16a34a', marginBottom: '8px' }}>
              40%+ CAGR
            </div>
            <p style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
              BESS market growth through 2030
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(2rem, 6vw, 48px)', fontWeight: 'bold', color: '#16a34a', marginBottom: '8px' }}>
              5 Guides
            </div>
            <p style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
              Skill-to-salary career paths
            </p>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section id="articles" style={{ padding: '80px 20px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 36px)', fontWeight: 'bold', marginBottom: '60px', textAlign: 'center', color: '#0f172a' }}>
          Career Guides
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {articles.length > 0 ? (
            articles.map(article => (
              <a
                key={article.slug}
                href={`/${article.slug}`}
                style={{
                  display: 'block',
                  padding: '32px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {article.role}
                  </p>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px', lineHeight: '1.4' }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>
                    {article.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                  <p style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Salary Range
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#16a34a' }}>
                    {article.salary}
                  </p>
                </div>

                <div style={{ marginTop: '20px', color: '#16a34a', fontWeight: '500', fontSize: '14px' }}>
                  Read Guide →
                </div>
              </a>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#94a3b8', fontSize: '16px' }}>
              No articles found
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#16a34a', color: 'white', padding: '64px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 32px)', fontWeight: 'bold', marginBottom: '16px' }}>
            Ready to Build Your BESS Career?
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 18px)', color: '#dcfce7', marginBottom: '32px' }}>
            Master the skills that command premium salaries in energy storage.
          </p>
          <a
            href="https://www.bessjobs.com"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#16a34a',
              fontWeight: 'bold',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Browse Jobs on BESSjobs →
          </a>
        </div>
      </section>
    </div>
  );
}
