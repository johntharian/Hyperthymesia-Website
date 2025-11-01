
import React from 'react';
import CodeBlock from './CodeBlock';

const Hero: React.FC = () => {
  const installCommand = `brew tap johntharian/hyperthymesia
brew install hyperthymesia`;

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
      <div className="max-w-md mx-auto">
        <CodeBlock code={installCommand} language="bash" />
      </div>
    </section>
  );
};

export default Hero;
