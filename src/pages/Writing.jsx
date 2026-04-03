import React, { useState } from 'react';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import { articles } from '../data/articles.js';

const ACCENT = '#F59E0B';
const CATEGORIES = ['All', 'Opinion', 'Reviews', 'Culture', 'Motivation'];

const categoryColors = {
  Opinion: '#EF4444',
  Reviews: '#3B82F6',
  Culture: '#8B5CF6',
  Motivation: '#22C55E',
};

export default function Writing() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = articles[0];

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
            Ced Studio — Writing
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span style={{ color: ACCENT }}>Lil Said.</span>
            <br />
            Opinions Worth Reading.
          </h1>
          <p className="text-brand-silver text-base sm:text-xl max-w-2xl mx-auto mb-10">
            Culture, commentary, music reviews, and the kind of motivation that does not come in
            generic quotes. Real thoughts from a real creative.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: ACCENT }}
        >
          Featured Article
        </p>
        <div
          className="card p-8 md:p-12 rounded-2xl"
          style={{ borderTop: `3px solid ${ACCENT}` }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{
                background: categoryColors[featured.category] + '22',
                color: categoryColors[featured.category],
              }}
            >
              {featured.category}
            </span>
            <span className="text-brand-silver text-xs">{featured.date}</span>
            <span className="text-brand-silver text-xs">{featured.readTime}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            {featured.title}
          </h2>
          <p className="text-brand-silver leading-relaxed text-lg">{featured.excerpt}</p>
          <button
            className="mt-6 text-sm font-bold transition-colors"
            style={{ color: ACCENT }}
          >
            Read Full Article (Coming Soon) &rarr;
          </button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? 'text-black border-transparent'
                  : 'border-brand-border text-brand-silver hover:border-white hover:text-white'
              }`}
              style={
                activeCategory === cat
                  ? { background: ACCENT, borderColor: ACCENT }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <SectionHeader
          title={activeCategory === 'All' ? 'All Articles' : activeCategory}
          accent={ACCENT}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Card key={article.id} accent={categoryColors[article.category]} className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{
                    background: (categoryColors[article.category] || ACCENT) + '22',
                    color: categoryColors[article.category] || ACCENT,
                  }}
                >
                  {article.category}
                </span>
                <span className="text-brand-silver text-xs">{article.readTime}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-brand-silver text-sm flex-1 leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-brand-silver text-xs">{article.date}</span>
                <button
                  className="text-xs font-bold transition-colors"
                  style={{ color: ACCENT }}
                >
                  Coming Soon &rarr;
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-brand-silver text-center py-12">
            No articles in this category yet.
          </p>
        )}
      </section>

      {/* About Lil Said */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="card p-6 sm:p-10" style={{ borderLeft: `3px solid ${ACCENT}` }}>
          <h2 className="text-2xl font-bold text-white mb-4">About Lil Said</h2>
          <p className="text-brand-silver leading-relaxed mb-4">
            Lil Said is the intellectual arm of Ced Studio — a writing and commentary brand built
            for people who think deeply about music, culture, and the creative grind. No fluff. No
            hot takes for clicks. Just honest perspectives from someone living the independent
            creative life.
          </p>
          <p className="text-brand-silver leading-relaxed">
            From breaking down what is happening in hip-hop culture to writing motivational
            frameworks for independent artists, Lil Said exists to give creative entrepreneurs
            the perspective they did not know they needed.
          </p>
        </div>
      </section>
    </div>
  );
}
