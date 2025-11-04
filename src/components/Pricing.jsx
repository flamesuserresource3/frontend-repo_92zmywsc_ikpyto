import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 5,
    tagline: 'For small friend groups',
    features: ['2 GB RAM', '10 GB NVMe SSD', '1 vCPU', 'DDoS Protection', 'Backups (Weekly)'],
    cta: 'Start now',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 12,
    tagline: 'Great for modded servers',
    features: ['6 GB RAM', '40 GB NVMe SSD', '3 vCPU', 'Priority Support', 'Daily Backups'],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Ultra',
    price: 24,
    tagline: 'Competitive & communities',
    features: ['12 GB RAM', '80 GB NVMe SSD', '5 vCPU', 'Global Locations', 'Snapshots & Rollbacks'],
    cta: 'Go Ultra',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Scale up or down any time. Cancel whenever you want.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white/5 backdrop-blur p-6 ${tier.highlighted ? 'border-indigo-500/40 ring-2 ring-indigo-500/30' : 'border-white/10'}`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium">Best Value</div>
              )}
              <div>
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-white/70">{tier.tagline}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">${tier.price}</span>
                  <span className="text-white/60">/mo</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 text-emerald-400" size={16} />
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#home" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm ${tier.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
