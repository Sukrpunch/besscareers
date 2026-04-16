import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BESScareers — Battery Energy Storage Careers',
  description: 'Find BESS careers, master industry skills, and earn $100K–$200K+. Your guide to the future of energy storage.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <nav className="border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="font-bold text-2xl">
              <span className="text-emerald-600">BESS</span>careers
            </div>
            <div className="flex gap-6">
              <a href="/" className="text-slate-600 hover:text-slate-900">Home</a>
              <a href="https://www.bessjobs.com" className="text-slate-600 hover:text-slate-900">Job Board</a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center text-sm text-slate-600">
              <p>© 2026 BESScareers. Part of the BESSjobs ecosystem.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
