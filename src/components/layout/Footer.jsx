import React from "react";
import { Link } from "react-router-dom";
import socialsData from "../../data/socials.json";

const { socials } = socialsData;

const brands = [
  {
    name: "Cjones",
    color: "#00C2FF",
    links: [
      { label: "Music", to: "/music" },
      { label: "Hooks & Features", to: "/music" },
      { label: "Beats", to: "/music" },
    ],
  },
  {
    name: "HB Media",
    color: "#A855F7",
    links: [
      { label: "Promotion", to: "/promotion" },
      { label: "Services", to: "/promotion" },
      { label: "Partnerships", to: "/contact" },
    ],
  },
  {
    name: "HB Stream",
    color: "#22C55E",
    links: [
      { label: "Streaming", to: "/streaming" },
      { label: "Play With Ced", to: "/streaming" },
      { label: "Request a Stream", to: "/streaming" },
    ],
  },
  {
    name: "Lil Said",
    color: "#F59E0B",
    links: [
      { label: "Writing", to: "/writing" },
      { label: "Articles", to: "/writing" },
      { label: "Commentary", to: "/writing" },
    ],
  },
];


export default function Footer() {
  return (
    <footer className="bg-brand-card border-t border-brand-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <p className="text-2xl font-black tracking-widest text-white mb-3">
              CED STUDIO
            </p>
            <p className="text-brand-silver text-sm leading-relaxed">
              One creator. Four brands. Infinite output.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-brand-silver hover:text-white text-xs transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Brand columns */}
          {brands.map((brand) => (
            <div key={brand.name}>
              <h3
                className="text-sm font-bold tracking-widest mb-4"
                style={{ color: brand.color }}
              >
                {brand.name}
              </h3>
              <ul className="space-y-3">
                {brand.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-brand-silver hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-silver text-sm">
            &copy; {new Date().getFullYear()} Ced Studio. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="text-brand-silver hover:text-white text-sm transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
