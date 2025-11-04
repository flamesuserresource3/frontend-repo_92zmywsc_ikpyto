import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AboutCompany from './components/AboutCompany';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-600/30 selection:text-white">
      {/* Subtle starfield backdrop */}
      <div className="pointer-events-none fixed inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,0.4),transparent_1px),radial-gradient(1px_1px_at_80%_20%,rgba(255,255,255,0.35),transparent_1px),radial-gradient(1px_1px_at_40%_80%,rgba(255,255,255,0.3),transparent_1px)', backgroundSize: '80px 80px, 120px 120px, 100px 100px' }} />

      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <AboutCompany />
      </main>
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} NebulaHost. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
