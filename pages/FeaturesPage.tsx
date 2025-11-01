import React from 'react';
import { ShieldCheckIcon } from '../components/icons/ShieldCheckIcon';
import { WifiOffIcon } from '../components/icons/WifiOffIcon';
import { ZapIcon } from '../components/icons/ZapIcon';
import { CpuChipIcon } from '../components/icons/CpuChipIcon';

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

const coreFeatures = [
    { title: 'Hybrid Search', description: 'Combines traditional keyword search with modern semantic search to find the most relevant code, even for abstract queries.' },
    { title: 'AI Agent', description: 'An intelligent agent analyzes complex questions and orchestrates multiple tools to form a comprehensive, synthesized answer.' },
    { title: 'Local LLMs', description: 'All AI processing happens on your machine using private, local Large Language Models. No data ever leaves your device.' },
    { title: 'RAG Enhancement', description: 'Retrieval-Augmented Generation provides detailed explanations, grounding every answer in the context of your actual code.' }
];

const localFirstAdvantages = [
  { icon: <ShieldCheckIcon className="w-8 h-8 text-brand-blue" />, title: '100% Private', description: 'Your code is sensitive. Hyperthymesia processes everything on your machine. Nothing ever leaves your computer.' },
  { icon: <WifiOffIcon className="w-8 h-8 text-brand-blue" />, title: 'Works Offline', description: 'No internet connection? No problem. After the initial setup, you get full functionality, anytime, anywhere.' },
  { icon: <ZapIcon className="w-8 h-8 text-brand-blue" />, title: 'Blazing Fast', description: "By eliminating network latency, you get instant responses for simple queries and complex analysis in seconds." },
  { icon: <CpuChipIcon className="w-8 h-8 text-brand-blue" />, title: 'Full Control', description: "You're in control. Use Ollama, llama-cpp, or MLX. Bring your own model, customize your prompts, and avoid vendor lock-in." },
];

const FeatureCard = ({ icon, title, description }: { icon?: React.ReactNode, title: string, description: string }) => (
  <div className="relative p-6 bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
     <div className="relative z-10">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const FeaturesPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Privacy, Power, and Performance"
        subtitle="Explore the core technology and design philosophy that make Hyperthymesia a new class of developer tool."
      />

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Core Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map(feature => <FeatureCard key={feature.title} title={feature.title} description={feature.description} />)}
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">The Local-First Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localFirstAdvantages.map(feature => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">How Hyperthymesia Compares</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 text-brand-blue font-semibold">Feature</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Hyperthymesia</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Cloud AI</th>
                <th className="text-center py-4 px-4 text-white font-semibold">GitHub Copilot</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Traditional Search</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800 hover:bg-gray-900/30">
                <td className="py-4 px-4 font-semibold text-gray-200">Privacy</td>
                <td className="text-center py-4 px-4">✓ Local</td>
                <td className="text-center py-4 px-4">✗ Cloud</td>
                <td className="text-center py-4 px-4">~ Partial</td>
                <td className="text-center py-4 px-4">✓ Local</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/30">
                <td className="py-4 px-4 font-semibold text-gray-200">Cost</td>
                <td className="text-center py-4 px-4">✓ Free</td>
                <td className="text-center py-4 px-4">✗ Paid</td>
                <td className="text-center py-4 px-4">✗ Paid</td>
                <td className="text-center py-4 px-4">✓ Free</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/30">
                <td className="py-4 px-4 font-semibold text-gray-200">Works Offline</td>
                <td className="text-center py-4 px-4">✓ Yes</td>
                <td className="text-center py-4 px-4">✗ No</td>
                <td className="text-center py-4 px-4">~ Limited</td>
                <td className="text-center py-4 px-4">✓ Yes</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/30">
                <td className="py-4 px-4 font-semibold text-gray-200">Code Understanding</td>
                <td className="text-center py-4 px-4">✓ Deep</td>
                <td className="text-center py-4 px-4">✓ Deep</td>
                <td className="text-center py-4 px-4">~ Gen Focus</td>
                <td className="text-center py-4 px-4">✗ Shallow</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/30">
                <td className="py-4 px-4 font-semibold text-gray-200">Source Tracking</td>
                <td className="text-center py-4 px-4">✓ Yes</td>
                <td className="text-center py-4 px-4">✓ Yes</td>
                <td className="text-center py-4 px-4">✗ No</td>
                <td className="text-center py-4 px-4">✓ Yes</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/30">
                <td className="py-4 px-4 font-semibold text-gray-200">Multi-Tool</td>
                <td className="text-center py-4 px-4">✓ Yes</td>
                <td className="text-center py-4 px-4">✗ Limited</td>
                <td className="text-center py-4 px-4">✗ Limited</td>
                <td className="text-center py-4 px-4">✗ No</td>
              </tr>
              <tr className="hover:bg-gray-900/30">
                <td className="py-4 px-4 font-semibold text-gray-200">Complex Queries</td>
                <td className="text-center py-4 px-4">✓ Yes</td>
                <td className="text-center py-4 px-4">~ Simple</td>
                <td className="text-center py-4 px-4">✗ Limited</td>
                <td className="text-center py-4 px-4">✓ Keyword</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Search Performance</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="text-brand-blue font-semibold">Simple queries:</span> 200-300ms</li>
              <li><span className="text-brand-blue font-semibold">Complex queries:</span> 2-7 seconds</li>
              <li><span className="text-brand-blue font-semibold">Indexing:</span> ~100 files/second</li>
              <li><span className="text-brand-blue font-semibold">Max codebase:</span> 1M+ lines of code</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Model Options</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="text-brand-blue font-semibold">Default:</span> llama3.2:3b (2GB)</li>
              <li><span className="text-brand-blue font-semibold">Alternative:</span> Mistral 7B (4GB)</li>
              <li><span className="text-brand-blue font-semibold">GPU:</span> Full acceleration support</li>
              <li><span className="text-brand-blue font-semibold">Quantization:</span> Q4_K_M for efficiency</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Supported Code Languages</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="text-gray-400">Python, JavaScript, TypeScript, Go, Rust, Java, C++, C#</li>
              <li className="text-gray-400">Markdown, YAML, JSON, XML</li>
              <li className="text-gray-400">PDF documents</li>
              <li className="text-gray-400">Any text-based format</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">System Requirements</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="text-brand-blue font-semibold">RAM:</span> 8GB minimum (16GB recommended)</li>
              <li><span className="text-brand-blue font-semibold">Disk:</span> 5GB for default model</li>
              <li><span className="text-brand-blue font-semibold">Python:</span> 3.8+</li>
              <li><span className="text-brand-blue font-semibold">OS:</span> macOS, Linux, Windows (WSL)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
