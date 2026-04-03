import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { musicServices } from "../data/services.js";

const ACCENT = "#00C2FF";

// ─── ADD YOUR VIDEOS HERE ───────────────────────────────────────────────────
// id    → YouTube video ID (the part after ?v= in the URL)
// title → Displayed below the video
// label → Small label shown on the card
const videos = [
  {
    id: "XTrSZmsziA0",
    title: "Snowed In",
    label: "Cjones",
  },
  {
    id: "bPjU-je9nCQ",
    title: "Straight to it",
    label: "Cjones",
  },
  {
    id: "jgPfwaFTOiU",
    title: "Forever Grateful 2.5- [Full Tape Mix]",
    label: "Cjones",
  },
  {
    id: "j0_B8IAV8Xk&list=RDj0_B8IAV8Xk&index=1",
    title: "Letter 2 Bro",
    label: "Cjones",
  },
];
// ────────────────────────────────────────────────────────────────────────────

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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Cjones. <span style={{ color: ACCENT }}>Hook Specialist.</span>
            <br />
            Beat Maker. Artist.
          </h1>
          <p className="text-brand-silver text-base sm:text-xl max-w-2xl mx-auto mb-10">
            Delivering studio-quality hooks, feature verses, and original music
            for independent artists who refuse to settle.
          </p>
          <Link
            to="/contact"
            className="btn-cjones text-base px-8 py-4 inline-block"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="card p-6 sm:p-10"
          style={{ borderLeft: `3px solid ${ACCENT}` }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">About Cjones</h2>
          <p className="text-brand-silver leading-relaxed mb-4">
            Cjones is a multi-talented artist, hook specialist, and beat maker
            operating out of the Ced Studio ecosystem. Known for crafting
            infectious melodies and memorable hooks, Cjones brings a refined ear
            and years of hands-on production experience to every collaboration.
          </p>
          <p className="text-brand-silver leading-relaxed">
            Whether you are an up-and-coming rapper looking for that perfect
            chorus, an established artist wanting a fresh feature verse, or a
            producer searching for vocal energy to bring a beat to life — Cjones
            delivers. Every project is handled with professionalism, speed, and
            creative precision.
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
          {videos.map((video) => (
            <div
              key={video.id + video.title}
              className="card rounded-2xl overflow-hidden"
            >
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-white font-semibold">{video.title}</p>
                <p className="text-brand-silver text-sm">{video.label}</p>
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
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
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
        <Link
          to="/contact"
          className="btn-cjones text-base px-8 py-4 inline-block"
        >
          Contact Cjones
        </Link>
      </section>
    </div>
  );
}
