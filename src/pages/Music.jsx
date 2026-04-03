import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import { musicServices } from '../data/services.js';

const ACCENT = '#00C2FF';

export default function Music() {
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
            Ced Studio — Music
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Cjones.{' '}
            <span style={{ color: ACCENT }}>Hook Specialist.</span>
            <br />
            Beat Maker. Artist.
          </h1>
          <p className="text-brand-silver text-xl max-w-2xl mx-auto mb-10">
            Delivering studio-quality hooks, feature verses, and original music for independent
            artists who refuse to settle.
          </p>
          <Link to="/contact" className="btn-cjones text-base px-8 py-4 inline-block">
            Book a Session
          </Link>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="card p-10" style={{ borderLeft: `3px solid ${ACCENT}` }}>
          <h2 className="text-2xl font-bold text-white mb-4">About Cjones</h2>
          <p className="text-brand-silver leading-relaxed mb-4">
            Cjones is a multi-talented artist, hook specialist, and beat maker operating out of the
            Ced Studio ecosystem. Known for crafting infectious melodies and memorable hooks, Cjones
            brings a refined ear and years of hands-on production experience to every collaboration.
          </p>
          <p className="text-brand-silver leading-relaxed">
            Whether you are an up-and-coming rapper looking for that perfect chorus, an established
            artist wanting a fresh feature verse, or a producer searching for vocal energy to bring
            a beat to life — Cjones delivers. Every project is handled with professionalism, speed,
            and creative precision.
          </p>
        </div>
      </section>

      {/* Featured Music */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <SectionHeader
          title="Featured Music"
          subtitle="Watch the latest from Cjones. More content dropping soon."
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((n) => (
            <div key={n} className="card rounded-2xl overflow-hidden">
              <div
                className="relative w-full"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  src="about:blank"
                  title={`Cjones Video ${n}`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: '#111111' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ background: ACCENT }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      className="w-7 h-7"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold">Video Coming Soon</p>
                  <p className="text-brand-silver text-sm mt-1">Cjones — Track {n}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white font-semibold">Cjones — Untitled Track {n}</p>
                <p className="text-brand-silver text-sm">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeader
          title="Music Services"
          subtitle="Ready to elevate your project? Here is what Cjones offers."
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {musicServices.map((service) => (
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

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Let us Make Something Great
        </h2>
        <p className="text-brand-silver mb-8">
          Send a message and Cjones will get back to you within 24 hours.
        </p>
        <Link to="/contact" className="btn-cjones text-base px-8 py-4 inline-block">
          Contact Cjones
        </Link>
      </section>
    </div>
  );
}
