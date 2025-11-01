
import React from 'react';
import { UserPlusIcon } from './icons/UserPlusIcon';
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon';
import { PuzzlePieceIcon } from './icons/PuzzlePieceIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { WrenchScrewdriverIcon } from './icons/WrenchScrewdriverIcon';

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  query: string;
  timeSaved?: string;
}

const useCases: UseCase[] = [
  {
    icon: <UserPlusIcon className="w-7 h-7 text-gray-300" />,
    title: 'Onboarding',
    description: "Understand a 100k LOC codebase in hours, not weeks. New team members can get up to speed faster and independently, reducing pressure on experienced developers.",
    query: 'What is the authentication flow?',
    timeSaved: '~20-40 hours per new developer'
  },
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7 text-gray-300" />,
    title: 'Code Exploration',
    description: 'Find where specific logic is implemented and understand the patterns used across the entire codebase without manual code review.',
    query: 'Where is the retry mechanism implemented?',
    timeSaved: '~3-5 hours per week'
  },
  {
    icon: <PuzzlePieceIcon className="w-7 h-7 text-gray-300" />,
    title: 'Architecture Understanding',
    description: 'Grasp high-level concepts and complex systems like distributed transactions with detailed, code-grounded explanations. Supports codebases up to 1M+ lines.',
    query: 'How does the system handle distributed transactions?',
    timeSaved: '~5-10 hours per project'
  },
  {
    icon: <BookOpenIcon className="w-7 h-7 text-gray-300" />,
    title: 'Learning Patterns',
    description: 'Learn best practices and design decisions from your own code by asking how features like caching are built. Build institutional knowledge.',
    query: 'How does caching work in this project?',
    timeSaved: '~2-3 hours per pattern'
  },
  {
    icon: <WrenchScrewdriverIcon className="w-7 h-7 text-gray-300" />,
    title: 'Legacy Code Maintenance',
    description: 'Understand old modules and make safe changes without breaking functionality. Ask questions about how systems interact and depend on each other.',
    query: 'What depends on this authentication module?',
    timeSaved: '~4-8 hours per change'
  }
];

const UseCaseCard: React.FC<UseCase> = ({ icon, title, description, query, timeSaved }) => (
  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 flex flex-col h-full">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-3 text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 flex-grow">{description}</p>
    {timeSaved && (
      <div className="mt-3 pt-3 border-t border-gray-700">
        <p className="text-xs text-brand-blue font-semibold mb-3">{timeSaved}</p>
      </div>
    )}
    <div className="mt-3 pt-3 border-t border-gray-800">
        <p className="text-sm text-gray-500 mb-2">Example query:</p>
        <code className="text-sm text-brand-blue bg-gray-900 px-2 py-1 rounded font-mono">"{query}"</code>
    </div>
  </div>
);

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Accelerate Your Workflow</h2>
        <p className="mt-4 text-lg text-gray-400">From onboarding to deep architectural analysis.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {useCases.map((useCase) => (
          <UseCaseCard key={useCase.title} {...useCase} />
        ))}
      </div>
    </section>
  );
};

export default UseCases;
