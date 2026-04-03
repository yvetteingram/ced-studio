import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import { streamServices } from '../data/services.js';

const ACCENT = '#22C55E';

const platformLinks = [
  { label: 'Twitch', handle: '@cedstream', href: '#' },
  { label: 'YouTube', handle: '@HBStream', href: '#' },
  { label: 'TikTok', handle: '@hbstream', href: '#' },
];

export default function Streaming() {
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
            Ced Studio — Streaming
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span style={{ color: ACCENT }}>HB Stream.</span>
            <br />
            Live. Gaming. Content.
          </h1>
          <p className="text-brand-silver text-base sm:text-xl max-w-2xl mx-auto mb-10">
            Join Ced live for gaming sessions, interactive streams, and exclusive collab
            opportunities. The community is growing — come be part of it.
          </p>
          <Link to="/contact" className="btn-hbstream text-base px-8 py-4 inline-block">
            Join the Stream
          </Link>
        </div>
      </section>

      {/* Stream Placeholder Cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader
          title="Recent Streams"
          subtitle="Content dropping soon. Follow the channels to stay updated."
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Gaming Session #1', game: 'TBD' },
            { title: 'Gaming Session #2', game: 'TBD' },
            { title: 'Stream Collab', game: 'TBD' },
          ].map((stream, i) => (
            <div key={i} className="card rounded-2xl overflow-hidden">
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  background: '#0a0a0a',
                  height: '180px',
                  borderBottom: `1px solid #1F1F1F`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                  style={{ background: '#1a1a1a', border: `2px solid ${ACCENT}` }}
                >
                  <span className="text-2xl">🎮</span>
                </div>
                <p className="text-brand-silver text-sm font-semibold">Stream Coming Soon</p>
              </div>
              <div className="p-5">
                <p className="text-white font-semibold">{stream.title}</p>
                <p className="text-brand-silver text-sm mt-1">Game: {stream.game}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gaming Offers */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <SectionHeader
          title="Gaming Offers"
          subtitle="Unique ways to interact with HB Stream."
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {streamServices.map((service) => (
            <Card key={service.id} accent={ACCENT} className="flex flex-col">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-brand-silver text-sm flex-1 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-2xl font-black" style={{ color: ACCENT }}>
                {service.price}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Platform Links */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <SectionHeader
          title="Find HB Stream"
          subtitle="Follow the channels and never miss a session."
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {platformLinks.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="card p-6 flex flex-col items-center text-center hover:border-brand-silver transition-colors"
            >
              <p className="font-bold text-white mb-1">{p.label}</p>
              <p className="text-sm" style={{ color: ACCENT }}>
                {p.handle}
              </p>
              <p className="text-brand-silver text-xs mt-2">Link coming soon</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Want to Collab on Stream?
        </h2>
        <p className="text-brand-silver mb-8">
          Reach out and let us set up something live for your audience.
        </p>
        <Link to="/contact" className="btn-hbstream text-base px-8 py-4 inline-block">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
