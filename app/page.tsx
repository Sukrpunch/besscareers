import Link from 'next/link';
import { Zap, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Master BESS. <br />
            <span className="text-emerald-400">Build Your Future.</span>
          </h1>

          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Deep career guides for Battery Energy Storage engineers. Learn the skills that command $100K–$200K+.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="https://www.bessjobs.com" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Find Jobs on BESSjobs →
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">$150K+</div>
            <p className="text-slate-600">Average salary for specialized BESS roles</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">40%+ CAGR</div>
            <p className="text-slate-600">BESS market growth through 2030</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">5 Guides</div>
            <p className="text-slate-600">Skill-to-salary career paths</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Build Your BESS Career?</h2>
          <p className="text-lg text-emerald-100">
            Master the skills that command premium salaries in energy storage.
          </p>
          <a href="https://www.bessjobs.com" className="inline-block bg-white text-emerald-600 font-bold px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors">
            Browse Jobs on BESSjobs →
          </a>
        </div>
      </section>
    </div>
  );
}
