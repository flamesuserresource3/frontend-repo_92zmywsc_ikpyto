import { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Company', href: '#company' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Neon glass bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mt-4">
          <div className="absolute -inset-0.5 rounded-2xl bg-[conic-gradient(from_270deg_at_50%_50%,#6ee7ff_0%,#7c3aed_30%,#f472b6_55%,#22d3ee_80%,#6ee7ff_100%)] opacity-30 blur-xl" aria-hidden="true" />
          <div className="relative flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 sm:px-6 backdrop-blur">
            <a href="#home" className="group flex items-center gap-2 text-white">
              <span className="relative inline-flex h-9 w-9 items-center justify-center">
                <span className="absolute -inset-1 rounded-md bg-indigo-500/30 blur-md" aria-hidden="true" />
                <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
                  <Server size={18} />
                </span>
              </span>
              <span className="text-lg font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-white via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">NebulaHost</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative transition-colors hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#pricing"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-indigo-500 hover:to-fuchsia-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Get Started
              </a>
            </nav>

            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">Menu</span>
              <button
                aria-label="Close menu"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-indigo-500 hover:to-fuchsia-500"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
