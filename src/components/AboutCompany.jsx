import { Globe, ShieldCheck, Users, Award } from 'lucide-react';

export default function AboutCompany() {
  return (
    <div className="bg-slate-950 text-white">
      <section id="about" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About NebulaHost</h2>
              <p className="mt-4 text-white/70">
                We build fast, reliable, and secure infrastructure tailored for gaming communities. Our platform automates the heavy lifting so you can focus on playing, not configuring.
              </p>
              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AboutPoint icon={<ShieldCheck size={18} />} title="Security-first" desc="Always-on DDoS protection and isolated containers." />
                <AboutPoint icon={<Globe size={18} />} title="Global network" desc="Low-latency locations across NA, EU, and APAC." />
                <AboutPoint icon={<Users size={18} />} title="Community tools" desc="One-click modpacks, backups, and role-based access." />
                <AboutPoint icon={<Award size={18} />} title="SLA-backed" desc="99.9% uptime with transparent status." />
              </dl>
            </div>
            <div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/30 to-fuchsia-900/20 p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <Stat number="45+" label="Global POPs" />
                  <Stat number="12k+" label="Active Servers" />
                  <Stat number="< 25ms" label="Avg. Latency" />
                  <Stat number="99.9%" label="Uptime" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="relative py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold tracking-tight">Our Company</h3>
            <p className="mt-4 text-white/70">
              Founded by engineers and gamers, NebulaHost blends cutting-edge infrastructure with player-first design. We operate our own bare-metal fleet with the latest AMD and Intel processors, NVMe storage, and premium bandwidth providers.
            </p>
            <p className="mt-4 text-white/70">
              Sustainability matters. Our data centers leverage renewable energy where possible and we continually optimize for efficiency without compromising performance.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <CompanyCard title="Mission" text="Make high-performance game hosting accessible for everyone." />
              <CompanyCard title="Values" text="Trust, performance, transparency, and community." />
              <CompanyCard title="Support" text="24/7 real-human support with sub-5 minute response times." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPoint({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-white/70 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-extrabold">{number}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

function CompanyCard({ title, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm text-white/70">{text}</p>
    </div>
  );
}
