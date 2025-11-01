import React from 'react';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center py-16 md:py-24">
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
      {title}
    </h1>
    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
      {subtitle}
    </p>
  </div>
);

const OurStoryPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Our Story"
        subtitle="Why we're building Hyperthymesia and what drives us forward"
      />

      {/* Why We Built This */}
      <section className="mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Why We Built Hyperthymesia</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We built Hyperthymesia because we experienced the pain firsthand. As developers, we spent countless hours searching through massive codebases—grepping, scrolling through files, asking teammates questions that could be answered by the code itself. It felt inefficient, especially in a world where AI can understand context and semantics.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              But existing solutions had a fundamental problem: they required sending your code to external servers. Your codebase is often your most sensitive intellectual property. It contains architectural decisions, security practices, business logic, and trade secrets. We knew there had to be a better way.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              That's when we realized the opportunity: with recent advances in on-device AI, local LLMs, and retrieval-augmented generation, we could build a tool that understands your code as well as any cloud-based service—without ever leaving your machine.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy First */}
      <section className="mb-16 md:mb-24 p-8 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-lg border border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Privacy-First by Design</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Privacy isn't a feature we added later—it's the foundation of everything we do. Every architectural decision, every technology choice, and every feature we build is made with privacy as the primary consideration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">No Cloud, No Compromise</h3>
                <p className="text-gray-300">
                  Your code never leaves your machine. All processing happens locally on your device. No servers. No uploads. No logs. Complete privacy and control.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">Open Source Transparency</h3>
                <p className="text-gray-300">
                  Our code is open source so you can inspect exactly what we're doing. No hidden data collection. No telemetry tricks. Complete transparency.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">Your Data, Your Rules</h3>
                <p className="text-gray-300">
                  You have complete control over your data. Run it anywhere—your laptop, your server, your enterprise environment. The choice is entirely yours.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3">Future-Proof</h3>
                <p className="text-gray-300">
                  As we expand to handle images, documents, and videos, privacy remains paramount. Everything stays local. Everything stays safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code First Strategy */}
      <section className="mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Why Start with Code? Code First Strategy</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            We made a deliberate choice to start with code, and it's been the right decision for several strategic reasons:
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">1. Developers Are Perfect Testers</h3>
              <p className="text-gray-300 leading-relaxed">
                Developers are technical, critical, and demanding users. They understand complex tools, provide detailed feedback, and aren't afraid to break things. This makes them ideal for validating our approach and uncovering edge cases early. Their feedback has been invaluable in shaping our roadmap.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">2. MVP-Friendly Problem Space</h3>
              <p className="text-gray-300 leading-relaxed">
                Code search is a well-defined, measurable problem with clear success metrics. We can validate product-market fit with a focused MVP, iterate quickly, and build trust before expanding. It's easier to build something truly excellent in one domain than to spread ourselves thin across many.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">3. Strong Technical Foundation</h3>
              <p className="text-gray-300 leading-relaxed">
                The architecture we're building for code—semantic search, hybrid retrieval, agentic reasoning with tools—applies directly to documents, images, videos, and everything else. We're not building a code-specific tool; we're building the infrastructure for universal search by perfecting it on code first.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">4. Rapid Innovation Cycle</h3>
              <p className="text-gray-300 leading-relaxed">
                With code as our starting point, we can experiment with new AI capabilities, test LLM backends, and validate features quickly. The fast feedback loops from developers help us move faster and stay responsive to the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Grand Vision */}
      <section className="mb-16 md:mb-24 p-8 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-lg border border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">The Grand Vision: Universal Search</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Our ultimate goal is to become the search engine for everything in your digital life—all powered locally, all respecting your privacy.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue/20 text-brand-blue font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold text-white text-lg">Search Your Code</h3>
                <p className="text-gray-400">Find functions, understand architecture, and learn your codebase instantly (Phase 1-6)</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue/20 text-brand-blue font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold text-white text-lg">Search Your Files</h3>
                <p className="text-gray-400">Find documents, photos, and data across your entire digital library with semantic understanding (Phase 7)</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue/20 text-brand-blue font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold text-white text-lg">Generate Content</h3>
                <p className="text-gray-400">Write documentation for your code, generate images from descriptions, create videos fully locally—all without leaving your machine (Phase 3-8)</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue/20 text-brand-blue font-bold mr-4 flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold text-white text-lg">Everything Search</h3>
                <p className="text-gray-400">A unified search interface for your code, documents, emails, notes, photos, videos—everything—all running locally and privately (Phase 8-9)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <p className="text-gray-300 italic">
              "The future isn't asking cloud APIs what's in your files. It's having all the intelligence you need running on your machine, understanding everything about you, without ever compromising your privacy. That's Hyperthymesia."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 md:py-24">
        <h2 className="text-3xl font-bold text-white mb-4">Join Us on This Journey</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          We're building the future of personal search. Try Hyperthymesia today and help us shape the next generation of privacy-respecting AI tools.
        </p>
        <a
          href="#/"
          className="inline-block px-8 py-3 bg-brand-blue text-black font-semibold rounded-lg hover:bg-brand-blue/80 transition-colors"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default OurStoryPage;
