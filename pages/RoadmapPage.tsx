import React from 'react';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';
import { WrenchScrewdriverIcon } from '../components/icons/WrenchScrewdriverIcon';
import { RocketLaunchIcon } from '../components/icons/RocketLaunchIcon';

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

// Fix: Define an interface for the roadmap phase object to ensure type safety.
interface RoadmapPhase {
  phase: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  focus: string;
  features: string[];
}

const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 'Phase 1: MVP & Core',
    date: 'Q4 2024',
    status: 'Completed',
    focus: 'Build the foundation, get early users, validate product-market fit.',
    features: ['Hybrid search (keyword + semantic)', 'Agentic mode with multi-tool orchestration', 'RAG enhancement for detailed explanations', 'Multi-backend LLM support (Ollama, llama-cpp, MLX)', 'CLI interface with search and agent commands'],
  },
  {
    phase: 'Phase 2: UI & Accessibility',
    date: 'Q1 2025',
    status: 'In Progress',
    focus: 'Make it more accessible, add a visual interface.',
    features: ['Web UI Dashboard', 'VSCode Extension', 'Advanced Search UI', 'Configuration UI', 'Dark mode & Keyboard shortcuts'],
  },
  {
    phase: 'Phase 3: Intelligence & Collaboration',
    date: 'Q2 2025',
    status: 'Planned',
    focus: 'Smarter queries, team features.',
    features: ['Advanced Code Analysis (complexity, dependencies)', 'Smart Summaries & Documentation Generation', 'Design Pattern Recognition', 'Conversational Chat Interface', 'Team Workspaces & Knowledge Sharing'],
  },
  {
    phase: 'Phase 4: Code Generation & Advanced AI',
    date: 'Q3 2025',
    status: 'Planned',
    focus: 'Productivity features, advanced AI capabilities.',
    features: ['Smart Templates (tests, docs)', 'Refactoring Assistant', 'API Generation (OpenAPI specs, client code)', 'Fine-tuned models for your codebase', 'GitHub/GitLab/Jira Integration'],
  },
  {
    phase: 'Phase 5: Enterprise & Advanced',
    date: 'Q4 2025',
    status: 'Planned',
    focus: 'Enterprise features and advanced capabilities.',
    features: ['Role-based Access Control', 'Analytics Dashboard', 'Self-hosted Deployment', 'Compliance & Audit Logging', 'Advanced Search across repos'],
  },
  {
    phase: 'Phase 6: Ecosystem',
    date: '2026',
    status: 'Planned',
    focus: 'Build the ecosystem around Hyperthymesia for code.',
    features: ['IDE Extensions (Sublime, JetBrains, Vim, Emacs)', 'Language-specific Analyzers', 'Community Plugins & Marketplace', 'Custom LLM Models Support', 'Theme & Integration Partners'],
  },
  {
    phase: 'Phase 7: Universal Search Foundation',
    date: '2026-2027',
    status: 'Planned',
    focus: 'Expand beyond code to all digital data.',
    features: ['Photo Search & Visual Understanding', 'Email & Message Indexing', 'Document & PDF Support', 'Notes & Knowledge Graph', 'Cross-domain AI Search'],
  },
  {
    phase: 'Phase 8-9: Personal AI Operating System',
    date: '2027+',
    status: 'Planned',
    focus: 'Become the central intelligence layer for your digital life.',
    features: ['Personal Knowledge Graph', 'Voice Search & Audio Features', 'Multi-Device Sync', 'Generative Features (Local)', 'Smart Recommendations & Insights'],
  },
];

const StatusBadge: React.FC<{ status: 'Completed' | 'In Progress' | 'Planned' }> = ({ status }) => {
    const styles = {
        Completed: 'bg-green-500/10 text-green-400 border-green-500/20',
        'In Progress': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
        Planned: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    };
    const icons = {
        Completed: <CheckCircleIcon className="w-4 h-4" />,
        'In Progress': <WrenchScrewdriverIcon className="w-4 h-4" />,
        Planned: <RocketLaunchIcon className="w-4 h-4" />,
    }
    return <span className={`inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium border ${styles[status]}`}>{icons[status]} {status}</span>;
}


const RoadmapPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="The Path to a Personal AI"
        subtitle="Our journey starts with being the best-in-class tool for code understanding and expands to become the OS for your digital life."
      />

      <section className="mb-16 md:mb-24 p-8 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">Why Start with Code?</h2>
        <p className="text-gray-400 mb-4">Developers are the perfect starting point for building the foundation of a universal personal AI:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="flex items-start">
            <span className="text-brand-blue font-bold mr-3">•</span>
            <div>
              <p className="text-white font-semibold">Clear Problem</p>
              <p className="text-gray-400 text-sm">Finding code in large codebases is genuinely hard and time-consuming</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-brand-blue font-bold mr-3">•</span>
            <div>
              <p className="text-white font-semibold">High Value</p>
              <p className="text-gray-400 text-sm">Saves hours per week for every developer</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-brand-blue font-bold mr-3">•</span>
            <div>
              <p className="text-white font-semibold">Technical Foundation</p>
              <p className="text-gray-400 text-sm">Builds the right architecture that scales to all data types</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-brand-blue font-bold mr-3">•</span>
            <div>
              <p className="text-white font-semibold">Expansion Path</p>
              <p className="text-gray-400 text-sm">Same technology applies to photos, emails, documents, and everything else</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">8-Phase Evolution</h2>
        <p className="text-center text-gray-400 mb-12">From Code Search → Enterprise → Ecosystem → Universal Search → Personal AI OS</p>
        <div className="space-y-12">
          {roadmapPhases.map(phase => (
              <div key={phase.phase} className="p-8 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                      <h2 className="text-2xl font-bold text-white">{phase.phase}</h2>
                      <div className="mt-2 sm:mt-0 flex items-center space-x-4">
                          <span className="text-sm font-semibold text-brand-blue">{phase.date}</span>
                          <StatusBadge status={phase.status} />
                      </div>
                  </div>
                  <p className="text-gray-400 italic mb-6">{phase.focus}</p>

                  <h3 className="font-semibold text-gray-300 mb-3">Key Features & Goals:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {phase.features.map(feature => (
                          <li key={feature} className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Success Metrics by Phase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4">Code Phase (Phases 1-6)</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><span className="text-brand-blue font-semibold">Phase 1:</span> 100+ downloads, {'>'} 90% relevance</li>
              <li><span className="text-brand-blue font-semibold">Phase 2:</span> 500+ users, 50% retention</li>
              <li><span className="text-brand-blue font-semibold">Phase 3:</span> 2k+ users, 60% retention</li>
              <li><span className="text-brand-blue font-semibold">Phase 4:</span> 5k+ users, 70% retention</li>
              <li><span className="text-brand-blue font-semibold">Phase 5:</span> 10k+ users, 75% retention</li>
              <li><span className="text-brand-blue font-semibold">Phase 6:</span> 50k+ users, 80%+ retention</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4">Universal Phase (Phases 7-9)</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><span className="text-brand-blue font-semibold">Phase 7:</span> 100k+ users, multi-data support</li>
              <li><span className="text-brand-blue font-semibold">Phase 8:</span> 500k+ users, personal AI OS</li>
              <li><span className="text-brand-blue font-semibold">Phase 9:</span> 10M+ users, industry standard</li>
              <li className="pt-2 border-t border-gray-700 mt-2"><span className="text-brand-blue font-semibold">Long-term:</span> De facto standard for personal search</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;
