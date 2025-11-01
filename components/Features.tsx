
import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { WifiOffIcon } from './icons/WifiOffIcon';
import { ZapIcon } from './icons/ZapIcon';
import { CpuChipIcon } from './icons/CpuChipIcon';
import { CheckIcon } from './icons/CheckIcon';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-brand-blue" />,
    title: '100% Private',
    description: 'Your code is sensitive. Hyperthymesia processes everything on your machine. Nothing ever leaves your computer.',
  },
  {
    icon: <WifiOffIcon className="w-8 h-8 text-brand-blue" />,
    title: 'Works Offline',
    description: 'No internet connection? No problem. After the initial setup, you get full functionality, anytime, anywhere.',
  },
  {
    icon: <ZapIcon className="w-8 h-8 text-brand-blue" />,
    title: 'Blazing Fast',
    description: "By eliminating network latency, you get instant responses for simple queries and complex analysis in seconds.",
  },
  {
    icon: <CheckIcon className="w-8 h-8 text-brand-blue" />,
    title: 'No Subscription',
    description: 'One-time setup, no recurring costs. No API bills. No rate limits. Use Hyperthymesia as much as you want.',
  },
  {
    icon: <CpuChipIcon className="w-8 h-8 text-brand-blue" />,
    title: 'Multi-Backend',
    description: "You're in control. Use Ollama, llama-cpp, or MLX on Apple Silicon. Bring your own model, your own prompts.",
  },
];

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="relative p-6 bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
     <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">The Local-First Advantage</h2>
        <p className="mt-4 text-lg text-gray-400">Why running on your machine changes everything.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
