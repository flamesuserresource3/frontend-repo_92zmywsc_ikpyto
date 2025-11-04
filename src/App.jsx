import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AboutCompany from './components/AboutCompany';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-600/30 selection:text-white">
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
