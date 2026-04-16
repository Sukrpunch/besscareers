import fs from 'fs';
import path from 'path';

interface ArticleMetadata {
  title: string;
  description: string;
  salary: string;
  role: string;
  slug: string;
}

interface ArticleData {
  metadata: ArticleMetadata;
  content: string;
}

// Parse MDX front matter and content
function parseMDX(filePath: string): ArticleData {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    throw new Error(`Invalid MDX format in ${filePath}`);
  }

  const [, frontmatterStr, content] = frontmatterMatch;
  
  // Parse frontmatter
  const metadata: ArticleMetadata = {} as ArticleMetadata;
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      metadata[key.trim() as keyof ArticleMetadata] = value;
    }
  });

  return { metadata, content };
}

// Convert markdown to simple HTML (inline styling)
function markdownToHtml(markdown: string): string {
  let html = markdown;
  
  // Headings
  html = html.replace(/^### (.*?)$/gm, '<h3 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem; color: #1e293b;">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 style="font-size: 2rem; font-weight: bold; margin-top: 2.5rem; margin-bottom: 1.5rem; color: #0f172a;">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 2rem; color: #0f172a;">$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: bold;">$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>');
  
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color: #16a34a; text-decoration: underline; cursor: pointer;">$1</a>');
  
  // Lists (bullet points)
  html = html.replace(/^\- (.*?)$/gm, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem;">$1</li>');
  html = html.replace(/(<li.*?<\/li>)/s, '<ul style="margin: 1rem 0;">$1</ul>');
  
  // Code inline
  html = html.replace(/`(.*?)`/g, '<code style="background-color: #f1f5f9; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace;">$1</code>');
  
  // Paragraphs (split by double newlines)
  html = html.replace(/\n\n/g, '</p><p style="margin: 1rem 0; line-height: 1.6; color: #475569;">');
  if (!html.startsWith('<p') && !html.startsWith('<h') && !html.startsWith('<ul')) {
    html = '<p style="margin: 1rem 0; line-height: 1.6; color: #475569;">' + html;
  }
  html += '</p>';
  
  // Fix double closing tags
  html = html.replace(/<\/p><p style/g, '<\/p><p style');
  html = html.replace(/<\/p><h/g, '<\/p><h');
  html = html.replace(/<\/p><ul/g, '<\/p><ul');
  
  return html;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const contentDir = path.join(process.cwd(), 'content');
  const articlePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(articlePath)) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e11d48' }}>Article Not Found</h1>
        <p style={{ color: '#64748b', marginTop: '1rem' }}>
          The article <code style={{ fontFamily: 'monospace', backgroundColor: '#f1f5f9', padding: '0.25rem 0.5rem' }}>{slug}</code> does not exist.
        </p>
        <a href="/" style={{ color: '#16a34a', textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </a>
      </div>
    );
  }

  const { metadata, content } = parseMDX(articlePath);
  const htmlContent = markdownToHtml(content);

  return (
    <article style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Article Header */}
      <div style={{ backgroundColor: '#f8fafc', padding: '60px 20px', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '12px', fontSize: '14px' }}>
            {metadata.role}
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px', color: '#0f172a', lineHeight: '1.2' }}>
            {metadata.title}
          </h1>
          <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '24px' }}>
            {metadata.description}
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Salary Range</p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#16a34a' }}>{metadata.salary}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Role</p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>{metadata.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{
            lineHeight: '1.8',
            color: '#1e293b',
          }}
          suppressHydrationWarning
        />
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#16a34a', color: 'white', padding: '60px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Ready to Start Your {metadata.role} Career?
          </h2>
          <p style={{ fontSize: '18px', color: '#dcfce7', marginBottom: '32px' }}>
            Explore {metadata.role} roles on BESSjobs and join the energy storage revolution.
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
            }}
          >
            Find Jobs on BESSjobs →
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
        <a
          href="/"
          style={{
            color: '#16a34a',
            textDecoration: 'underline',
            fontSize: '16px',
          }}
        >
          ← Back to All Articles
        </a>
      </div>
    </article>
  );
}

// Generate static paths for all articles
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));

  return files.map(file => ({
    slug: file.replace('.mdx', ''),
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const contentDir = path.join(process.cwd(), 'content');
  const articlePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(articlePath)) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const { metadata } = parseMDX(articlePath);

  return {
    title: `${metadata.title} | BESScareers`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
    },
  };
}
