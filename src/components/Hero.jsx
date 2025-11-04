import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.35),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.9),rgba(2,6,23,1))]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Zap className="text-yellow-400" size={14} />
            Ultra-low latency game servers
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Host. Scale. Dominate.
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            NebulaHost is a next-gen game server platform with lightning performance, DDoS protection, and one-click modpacks. Launch your world in seconds and scale effortlessly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Get your server
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 ring-1 ring-inset ring-white/15">
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Feature icon={<Rocket size={18} />} title="Instant Deploy" desc="Spin up servers in under 30 seconds with our optimized images." />
          <Feature icon={<Shield size={18} />} title="DDoS Protection" desc="Enterprise-grade mitigation keeps your worlds uninterrupted." />
          <Feature icon={<Zap size={18} />} title="NVMe Power" desc="Top-tier hardware with NVMe storage and DDR5 memory." />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center gap-3 text-white">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-white/70 mt-0.5">{desc}</p>
        </div>
      </div>
    </div>
  );
}
