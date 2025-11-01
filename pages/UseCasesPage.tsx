import React from 'react';
import { UserPlusIcon } from '../components/icons/UserPlusIcon';
import { MagnifyingGlassIcon } from '../components/icons/MagnifyingGlassIcon';
import { PuzzlePieceIcon } from '../components/icons/PuzzlePieceIcon';
import { BookOpenIcon } from '../components/icons/BookOpenIcon';
import { CheckIcon } from '../components/icons/CheckIcon';

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

const useCases = [
    {
        icon: <UserPlusIcon className="w-8 h-8 text-brand-blue" />,
        title: 'Onboarding New Projects',
        problem: 'You just joined a new team. How do you understand a 100k LOC codebase?',
        solution: 'Index the codebase and ask high-level questions to quickly grasp core concepts, patterns, and architecture without needing to read thousands of lines of code.',
        queries: ['What is the authentication flow?', 'How are errors handled?', 'What\'s the database schema?']
    },
    {
        icon: <MagnifyingGlassIcon className="w-8 h-8 text-brand-blue" />,
        title: 'Exploring Code',
        problem: 'You need to find where a specific feature is implemented, but you\'re not sure where to start looking.',
        solution: 'Use the agent to search for and understand specific implementations. It finds the relevant code and explains how it works in context.',
        queries: ['Where is the retry mechanism implemented?', 'Show me the patterns used for API calls.']
    },
    {
        icon: <PuzzlePieceIcon className="w-8 h-8 text-brand-blue" />,
        title: 'Understanding Architecture',
        problem: 'How does the system handle complex interactions like distributed transactions or event sourcing?',
        solution: 'Leverage multi-tool analysis to get detailed explanations of high-level architecture, grounded with code examples from the actual codebase.',
        queries: ['How does the system handle distributed transactions?', 'Explain the caching strategy.']
    },
    {
        icon: <BookOpenIcon className="w-8 h-8 text-brand-blue" />,
        title: 'Learning & Documentation',
        problem: 'The project lacks good documentation, and you want to understand the design decisions behind a feature.',
        solution: 'Learn directly from your own code. Get quick overviews and detailed implementation walkthroughs to understand not just what the code does, but why it was designed that way.',
        queries: ['How does caching work in this project?', 'Summarize the role of the `core` module.']
    }
];

const UseCasesPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="For Every Stage of Development"
        subtitle="Whether you're joining a new team or maintaining a legacy system, Hyperthymesia accelerates your workflow."
      />

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Individual Developer Use Cases</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map(uc => (
            <div key={uc.title} className="p-8 bg-gray-900/50 rounded-lg border border-gray-800 flex flex-col">
              <div className="flex items-center mb-4">
                {uc.icon}
                <h2 className="text-2xl font-bold text-white ml-4">{uc.title}</h2>
              </div>
              <div className="space-y-4 flex-grow">
                <p className="text-gray-400"><span className="font-semibold text-gray-300">The Problem:</span> {uc.problem}</p>
                <p className="text-gray-400"><span className="font-semibold text-gray-300">The Solution:</span> {uc.solution}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="text-sm text-gray-500 mb-2 font-semibold">Example Queries:</h4>
                  <ul className="space-y-1">
                      {uc.queries.map(q => <li key={q} className="font-mono text-sm text-brand-blue bg-gray-900 px-2 py-1 rounded">"{q}"</li>)}
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Team & Enterprise Use Cases</h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">Scale code understanding across your entire team. Self-serve learning reduces dependency on senior developers and accelerates knowledge transfer.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <CheckIcon className="w-8 h-8 text-brand-blue mr-3" />
              <h3 className="text-2xl font-bold text-white">Code Review & Analysis</h3>
            </div>
            <p className="text-gray-400 mb-4">Assist in code reviews by automatically analyzing complex changes and understanding architectural impacts before human review.</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Identify breaking changes</li>
              <li>• Suggest architectural improvements</li>
              <li>• Detect anti-patterns</li>
              <li>• Reduce review time</li>
            </ul>
          </div>

          <div className="p-8 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <CheckIcon className="w-8 h-8 text-brand-blue mr-3" />
              <h3 className="text-2xl font-bold text-white">Knowledge Transfer</h3>
            </div>
            <p className="text-gray-400 mb-4">Make team knowledge accessible. New team members can self-serve on understanding systems instead of relying on senior developers.</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Faster team onboarding</li>
              <li>• Reduce knowledge silos</li>
              <li>• Empower junior developers</li>
              <li>• 20-40 hours saved per hire</li>
            </ul>
          </div>

          <div className="p-8 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <CheckIcon className="w-8 h-8 text-brand-blue mr-3" />
              <h3 className="text-2xl font-bold text-white">Architecture Understanding</h3>
            </div>
            <p className="text-gray-400 mb-4">Entire teams can understand system architecture deeply without waiting for expert explanations or reading extensive documentation.</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Quick system comprehension</li>
              <li>• Consistent understanding across team</li>
              <li>• Find architectural flaws</li>
              <li>• Plan refactoring better</li>
            </ul>
          </div>

          <div className="p-8 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <CheckIcon className="w-8 h-8 text-brand-blue mr-3" />
              <h3 className="text-2xl font-bold text-white">Documentation Generation</h3>
            </div>
            <p className="text-gray-400 mb-4">Auto-generate documentation that stays up-to-date with code. Architecture diagrams, API docs, and guides all from your live codebase.</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Always-current documentation</li>
              <li>• API specification generation</li>
              <li>• Architecture documentation</li>
              <li>• Less manual documentation work</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;
