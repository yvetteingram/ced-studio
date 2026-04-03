import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-black text-brand-border mb-6">404</p>
      <h1 className="text-3xl font-extrabold text-white mb-4">Page Not Found</h1>
      <p className="text-brand-silver text-lg mb-10 max-w-md">
        The page you are looking for does not exist. It may have been moved or the URL is
        incorrect.
      </p>
      <Link to="/" className="btn-cjones text-base px-8 py-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
}
