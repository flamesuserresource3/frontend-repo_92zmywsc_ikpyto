import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 text-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Aurora + vignette overlays (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.35),transparent),radial-gradient(60%_60%_at_50%_100%,rgba(2,6,23,0.9),rgba(2,6,23,1))]" />
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 12px)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Zap className="text-yellow-400" size={14} />
            Ultra-low latency game servers
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Host. Scale.</span>
            <span className="ml-2 inline-block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Dominate.</span>
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-lg max-w-2xl">
            NebulaHost is a next-gen platform with blistering performance, DDoS protection, and one-click modpacks. Launch in seconds. Scale without limits.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-fuchsia-500">
              Get your server
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 ring-1 ring-inset ring-white/15">
              Learn more
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Feature icon={<Rocket size={18} />} title="Instant Deploy" desc="Spin up servers in under 30 seconds with our optimized images." />
          <Feature icon={<Shield size={18} />} title="DDoS Protection" desc="Enterprise-grade mitigation keeps your worlds uninterrupted." />
          <Feature icon={<Zap size={18} />} title="NVMe Power" desc="Top-tier hardware with NVMe storage and DDR5 memory." />
        </div>
      </div>

      {/* Wave divider */}
      <svg className="pointer-events-none absolute bottom-0 left-0 right-0" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40C160 0 320 0 480 40C640 80 800 80 960 40C1120 0 1280 0 1440 40V80H0V40Z" fill="url(#grad)" fillOpacity="0.25" />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center gap-3 text-white">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-white/70 mt-0.5">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
