import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import { promoServices } from '../data/services.js';

const ACCENT = '#A855F7';

const whatWeDo = [
  'Multi-platform promotion across Twitter, Instagram, TikTok, and YouTube',
  'Organic audience growth strategies — no bots, no fake engagement',
  'Content creation, scheduling, and community management for artists and brands',
];

const steps = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'We start with a call or message to understand your brand, target audience, and goals. No cookie-cutter packages — every campaign is tailored.',
  },
  {
    step: '02',
    title: 'Strategy & Launch',
    description:
      'HB Media builds your campaign plan, creates content, and launches across your selected platforms with consistent daily activity.',
  },
  {
    step: '03',
    title: 'Growth & Results',
    description:
      'We track engagement, adjust strategy in real time, and deliver weekly updates so you always know how your campaign is performing.',
  },
];

const platforms = ['Twitter / X', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'Threads'];

export default function Promotion() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${ACCENT} 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: ACCENT }}
          >
            Ced Studio — Promotion
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span style={{ color: ACCENT }}>HB Media.</span>
            <br />
            Your Music. Our Platform.
          </h1>
          <p className="text-brand-silver text-xl max-w-2xl mx-auto mb-10">
            Real promotion. Real growth. HB Media puts your sound in front of the right audience
            using proven multi-platform strategies.
          </p>
          <Link to="/contact" className="btn-hbmedia text-base px-8 py-4 inline-block">
            Start a Campaign
          </Link>
        </div>
      </section>

      {/* What HB Media Does */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <SectionHeader
          title="What HB Media Does"
          subtitle="Straightforward promotion with measurable results."
          accent={ACCENT}
        />
        <div className="space-y-4">
          {whatWeDo.map((point, i) => (
            <div key={i} className="flex items-start gap-4 card p-5">
              <span
                className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: ACCENT, color: 'white' }}
              >
                ✓
              </span>
              <p className="text-brand-silver leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <SectionHeader
          title="Promotion Services"
          subtitle="Choose the package that fits your goals and budget."
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoServices.map((service) => (
            <Card key={service.id} accent={ACCENT} className="flex flex-col">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-brand-silver text-sm flex-1 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="font-bold text-sm" style={{ color: ACCENT }}>
                {service.price}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeader
          title="How It Works"
          subtitle="Three steps from inquiry to campaign launch."
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="card p-6">
              <p
                className="text-4xl font-black mb-4"
                style={{ color: ACCENT, opacity: 0.4 }}
              >
                {s.step}
              </p>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-brand-silver text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <SectionHeader
          title="Platforms We Work On"
          accent={ACCENT}
        />
        <div className="flex flex-wrap gap-3 justify-center">
          {platforms.map((p) => (
            <span
              key={p}
              className="px-5 py-2 rounded-full text-sm font-semibold border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready to Get Your Music Heard?
        </h2>
        <p className="text-brand-silver mb-8">
          Reach out to HB Media and let us build your campaign today.
        </p>
        <Link to="/contact" className="btn-hbmedia text-base px-8 py-4 inline-block">
          Contact HB Media
        </Link>
      </section>
    </div>
  );
}
