
import React from 'react';
import { CheckCircle, Wrench, Rocket } from 'lucide-react';

interface RoadmapItem {
  phase: string;
  date: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
}

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    date: 'Q4 2024',
    title: 'MVP & Core Foundation',
    description: 'Hybrid search, agentic mode, RAG, and multi-backend LLM support via a powerful CLI.',
    status: 'Completed',
  },
  {
    phase: 'Phase 2',
    date: 'Q1 2025',
    title: 'UI & Accessibility',
    description: 'Web UI Dashboard, VSCode Extension, advanced search UI, and configuration interface.',
    status: 'In Progress',
  },
  {
    phase: 'Phase 3',
    date: 'Q2 2025',
    title: 'Intelligence & Collaboration',
    description: 'Advanced analysis, smart summaries, chat interface, pattern recognition, and team workspaces.',
    status: 'Planned',
  },
  {
    phase: 'Phase 4',
    date: 'Q3 2025',
    title: 'Code Generation & Advanced AI',
    description: 'Smart templates for tests and docs, refactoring assistant, API generation, and IDE integrations.',
    status: 'Planned',
  },
  {
    phase: 'Phase 5',
    date: 'Q4 2025',
    title: 'Enterprise & Advanced',
    description: 'Role-based access control, analytics dashboard, self-hosted deployment, and compliance features.',
    status: 'Planned',
  },
  {
    phase: 'Phase 6',
    date: '2026',
    title: 'Ecosystem',
    description: 'IDE extensions, language-specific analyzers, community plugins, and integration marketplace.',
    status: 'Planned',
  },
  {
    phase: 'Phase 7',
    date: '2026-2027',
    title: 'Universal Search Foundation',
    description: 'Expand beyond code: photos, documents, email, notes, files. Search everything locally with AI.',
    status: 'Planned',
  },
  {
    phase: 'Phase 8-9',
    date: '2027+',
    title: 'Personal AI Operating System',
    description: 'Knowledge graphs, voice search, multi-device sync, generative features, and universal AI platform.',
    status: 'Planned',
  },
];

const StatusIcon: React.FC<{ status: 'Completed' | 'In Progress' | 'Planned' }> = ({ status }) => {
  if (status === 'Completed') return <CheckCircle className="w-6 h-6 text-green-500" />;
  if (status === 'In Progress') return <Wrench className="w-6 h-6 text-yellow-500 animate-pulse" />;
  return <Rocket className="w-6 h-6 text-gray-500" />;
};

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Roadmap</h2>
        <p className="mt-2 text-lg text-gray-400">From code search to universal personal AI.</p>
        <p className="mt-2 text-sm text-gray-500">Evolution: Code Tool → Enterprise → Ecosystem → Universal Search → Personal AI OS</p>
      </div>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2"></div>
        {roadmapData.map((item, index) => (
          <div key={item.phase} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-[calc(50%_-_2.5rem)] ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <div className={`p-6 bg-gray-900/50 rounded-lg border border-gray-800 `}>
                <p className="text-sm font-semibold text-brand-blue mb-1">{item.date}</p>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-gray-700 rounded-full flex items-center justify-center">
              <StatusIcon status={item.status} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
