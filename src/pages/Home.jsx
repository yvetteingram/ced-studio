import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';

const brands = [
  {
    name: 'Cjones',
    tagline: 'Hook Specialist. Beat Maker. Artist.',
    description: 'Original music, custom hooks, and feature verses for independent artists.',
    color: '#00C2FF',
    to: '/music',
    icon: '🎤',
  },
  {
    name: 'HB Media',
    tagline: 'Your Music. Our Platform.',
    description: 'Promotion services across all major social platforms to grow your audience.',
    color: '#A855F7',
    to: '/promotion',
    icon: '📢',
  },
  {
    name: 'HB Stream',
    tagline: 'Live. Gaming. Content.',
    description: 'Gaming streams, live sessions, and collaboration opportunities with Ced.',
    color: '#22C55E',
    to: '/streaming',
    icon: '🎮',
  },
  {
    name: 'Lil Said',
    tagline: 'Opinions Worth Reading.',
    description: 'Culture commentary, music reviews, and motivational writing from Ced.',
    color: '#F59E0B',
    to: '/writing',
    icon: '✍️',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient blobs */}
        <div
          className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: '#00C2FF' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: '#A855F7' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-brand-silver text-sm font-semibold uppercase tracking-widest mb-6">
            Ced Studio
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">
            <span className="text-white">One Creator.</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #00C2FF, #A855F7, #22C55E, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Four Brands.
            </span>
            <br />
            <span className="text-white">Infinite Output.</span>
          </h1>
          <p className="text-brand-silver text-base sm:text-xl mb-12 max-w-2xl mx-auto">
            Music. Promotion. Streaming. Writing. All under one roof — built by Ced, for creators
            ready to level up.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/music" className="btn-cjones">
              Explore Music
            </Link>
            <Link to="/promotion" className="btn-hbmedia">
              Get Promoted
            </Link>
            <Link to="/contact" className="btn-outline">
              Work With Ced
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader
          title="Four Brands. One Vision."
          subtitle="Each brand is a different lane. All roads lead back to Ced Studio."
          accent="#ffffff"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card key={brand.name} accent={brand.color} topAccent className="flex flex-col">
              <div className="text-4xl mb-4">{brand.icon}</div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: brand.color }}
              >
                {brand.name}
              </h3>
              <p className="text-brand-silver text-xs font-semibold uppercase tracking-widest mb-3">
                {brand.tagline}
              </p>
              <p className="text-brand-silver text-sm flex-1 mb-6">{brand.description}</p>
              <Link
                to={brand.to}
                className="text-sm font-bold transition-colors"
                style={{ color: brand.color }}
              >
                Explore &rarr;
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeader
          title="What We Do Best"
          subtitle="Two pillars of the Ced Studio empire."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cjones music */}
          <div
            className="card p-8 rounded-2xl"
            style={{ borderTop: '3px solid #00C2FF' }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#00C2FF' }}
            >
              Cjones — Music
            </p>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Hooks That Stick. Verses That Hit.
            </h3>
            <p className="text-brand-silver mb-6 leading-relaxed">
              Cjones specializes in crafting hooks and feature verses that become the best part of
              your track. Whether you need a radio-ready chorus or a hard-hitting verse, the studio
              is open.
            </p>
            <Link to="/music" className="btn-cjones inline-block">
              Hear the Music
            </Link>
          </div>

          {/* HB Media promo */}
          <div
            className="card p-8 rounded-2xl"
            style={{ borderTop: '3px solid #A855F7' }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#A855F7' }}
            >
              HB Media — Promotion
            </p>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Your Sound Deserves to Be Heard.
            </h3>
            <p className="text-brand-silver mb-6 leading-relaxed">
              HB Media runs targeted promotion campaigns across Twitter, Instagram, TikTok, and
              YouTube. Real engagement, real growth — not bots and fake streams.
            </p>
            <Link to="/promotion" className="btn-hbmedia inline-block">
              See Promo Services
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to Work With Ced?
        </h2>
        <p className="text-brand-silver text-base sm:text-lg mb-10">
          Whether it is music, promo, streaming, or writing — let us build something together.
        </p>
        <Link to="/contact" className="btn-cjones text-lg px-10 py-4 inline-block">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
