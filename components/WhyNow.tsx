import React from 'react';
import { TrendingUp, Smartphone, ShieldCheck, Zap } from 'lucide-react';

const WhyNow: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Why Now?</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Personal devices are becoming powerful enough to run AI locally. This is the perfect moment for a personal AI search engine.</p>
      </div>

      <div className="mb-16">
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Header */}
          <div className="mb-12 p-8 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Moore's Law Meets On-Device AI</h3>
            <p className="text-gray-300 mb-6">
              The number of transistors on a device roughly doubles every 1-2 years (Moore's Law). This exponential growth has now reached a critical threshold where:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="text-brand-blue font-bold text-lg mb-2">2020</p>
                <p className="text-gray-300 text-sm">Running LLMs locally was impractical. Cloud APIs were the only option.</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="text-brand-blue font-bold text-lg mb-2">2024</p>
                <p className="text-gray-300 text-sm">Laptops have enough compute. 3-13B parameter models run comfortably on consumer hardware.</p>
              </div>
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="text-brand-blue font-bold text-lg mb-2">2025+</p>
                <p className="text-gray-300 text-sm">Edge AI becomes the default. Every device can be a personal AI engine.</p>
              </div>
            </div>
          </div>

          {/* The Shift */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              <div className="flex-1 p-8 bg-gray-900/50 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="inline-block w-8 h-8 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mr-3 font-bold">✕</span>
                  The Old Model (Cloud APIs)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Centralized</span> - All processing happens on remote servers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Privacy Risk</span> - Your data is uploaded and stored</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Cost Barrier</span> - Per-query pricing limits usage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Internet Dependent</span> - Can't work offline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Rate Limits</span> - Quotas restrict how much you can query</span>
                  </li>
                </ul>
              </div>

              <div className="flex-1 p-8 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="inline-block w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                  The New Model (On-Device AI)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Decentralized</span> - Processing happens on your device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Private</span> - Data never leaves your machine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Free</span> - One-time setup, unlimited queries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Offline First</span> - Works anywhere, anytime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 font-bold">•</span>
                    <span><span className="font-semibold">Unlimited</span> - Query as much as you need</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Impact */}
            <div className="p-8 bg-gray-900/50 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">What This Means for Developers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <Zap className="w-8 h-8 text-brand-blue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-2">Search Like Never Before</p>
                    <p className="text-gray-400 text-sm">Search your codebase as much as you want without API costs or rate limits. Ask complex questions instantly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="w-8 h-8 text-brand-blue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-2">Keep Your Code Private</p>
                    <p className="text-gray-400 text-sm">Proprietary code stays on your machine. No upload to cloud, no privacy concerns, no compliance issues.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="w-8 h-8 text-brand-blue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-2">Hardware You Already Have</p>
                    <p className="text-gray-400 text-sm">Your laptop has more compute power than ever. Use it for your benefit, not for cloud vendors' profits.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-8 h-8 text-brand-blue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-2">The Trend is Unstoppable</p>
                    <p className="text-gray-400 text-sm">Hardware keeps getting better, models keep getting smaller and faster. On-device AI is the future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-lg border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-3">Hyperthymesia is Built for This Moment</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We're not fighting against the trend of on-device AI—we're building the tool that makes it accessible and powerful for developers.
          Your laptop has become a personal AI supercomputer. Now you need the right tool to harness it.
        </p>
      </div>
    </section>
  );
};

export default WhyNow;
