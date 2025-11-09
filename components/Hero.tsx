
import React from 'react';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
        Your Code's New Best Friend
      </h1>
      <p className="text-sm md:text-base text-brand-blue font-semibold mb-4 uppercase tracking-wide">Local AI • Zero Cloud • Total Privacy</p>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
        Hyperthymesia is your personal AI code assistant. Ask it anything about your codebase. Get instant, detailed answers with code references.
        <br />
        <span className="font-semibold text-gray-200">No cloud. No subscriptions. No privacy concerns.</span>
      </p>
      <button
        onClick={handleGetStarted}
        className="px-8 py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-brand-blue/50 transition-all duration-200"
      >
        Interested in Getting Started?
      </button>
    </section>
  );
};

export default Hero;
