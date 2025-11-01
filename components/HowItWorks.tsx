
import React from 'react';
import CodeBlock from './CodeBlock';

const HowItWorks: React.FC = () => {
  const simpleQuerySteps = `
Search: "authentication"
→ Hybrid search (keyword + semantic)
→ Returns results in 200-300ms
→ View relevant files instantly
`.trim();

  const complexQuerySteps = `
Agent Query: "How does authentication work?"

1. Analyze query complexity
2. Plan multi-step action strategy
3. Execute tools:
   • SearchTool: Find code
   • AnalyzeTool: Understand structure
   • SynthesizeTool: Generate explanation
4. RAG enhancement with code context
5. Return answer + sources (2-7 seconds)
`.trim();

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-950/50 rounded-lg my-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">From Simple Search to Deep Understanding</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Hyperthymesia adapts its strategy based on your query's complexity.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8">
        <div className="p-6 bg-black rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-2">Simple Queries</h3>
          <p className="text-sm text-gray-500 mb-4">Keyword or direct search</p>
          <p className="text-gray-400 mb-6">Hybrid search combines keyword matching and semantic understanding to find relevant code instantly—perfect for direct lookups.</p>
          <CodeBlock code={simpleQuerySteps} language="text" />
        </div>
        <div className="p-6 bg-black rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-2">Complex Questions</h3>
          <p className="text-sm text-gray-500 mb-4">Deep understanding required</p>
          <p className="text-gray-400 mb-6">An intelligent agent plans multi-step strategies, searches code, analyzes patterns, and generates detailed explanations with RAG (Retrieval-Augmented Generation) for code context.</p>
          <CodeBlock code={complexQuerySteps} language="text" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
