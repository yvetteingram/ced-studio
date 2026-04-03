import React, { useState } from 'react';

const REQUEST_TYPES = [
  { value: '', label: 'Select a request type' },
  { value: 'music-feature', label: 'Music Feature' },
  { value: 'hook-request', label: 'Hook Request' },
  { value: 'promotion-service', label: 'Promotion Service' },
  { value: 'streaming-collab', label: 'Streaming Collaboration' },
  { value: 'writing-inquiry', label: 'Writing Inquiry' },
  { value: 'general', label: 'General' },
];

const brandColors = [
  { label: 'Cjones', color: '#00C2FF' },
  { label: 'HB Media', color: '#A855F7' },
  { label: 'HB Stream', color: '#22C55E' },
  { label: 'Lil Said', color: '#F59E0B' },
];

const initialForm = {
  name: '',
  email: '',
  requestType: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-silver mb-4">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Work With Ced Studio
        </h1>
        <p className="text-brand-silver text-lg">
          Whether it is music, promotion, streaming, or writing — fill out the form and Ced will
          get back to you within 24 hours.
        </p>
      </div>

      {/* Brand quick-reference */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {brandColors.map((b) => (
          <span
            key={b.label}
            className="px-4 py-1.5 rounded-full text-xs font-bold"
            style={{ background: b.color + '22', color: b.color, border: `1px solid ${b.color}44` }}
          >
            {b.label}
          </span>
        ))}
      </div>

      {/* Success State */}
      {status === 'success' ? (
        <div className="card p-12 text-center rounded-2xl" style={{ borderTop: '3px solid #22C55E' }}>
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
          <p className="text-brand-silver mb-8">
            Ced will review your request and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-outline"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="card p-8 md:p-10 rounded-2xl space-y-6"
        >
          {/* Netlify hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white placeholder-brand-silver focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white placeholder-brand-silver focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Request Type */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="requestType">
              Request Type
            </label>
            <select
              id="requestType"
              name="requestType"
              required
              value={form.requestType}
              onChange={handleChange}
              className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none"
            >
              {REQUEST_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell Ced what you need..."
              className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white placeholder-brand-silver focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          {/* Error */}
          {status === 'error' && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again or email directly.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full btn-cjones text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
