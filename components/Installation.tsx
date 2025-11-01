
import React from 'react';
import CodeBlock from './CodeBlock';

const Installation: React.FC = () => {
  const installSteps = `
# 1. Install via Homebrew
brew tap johntharian/hyperthymesia
brew install hyperthymesia

# 2. Index your codebase
hyperthymesia index add /path/to/project

# 3. Start asking questions
hyperthymesia agent "how does authentication work?"
  `.trim();

  return (
    <section id="installation" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Get Started in 3 Steps</h2>
        <p className="mt-4 text-lg text-gray-400 mb-8">Install and start querying your codebase in under 5 minutes.</p>
        <CodeBlock code={installSteps} language="bash" />
      </div>
    </section>
  );
};

export default Installation;
