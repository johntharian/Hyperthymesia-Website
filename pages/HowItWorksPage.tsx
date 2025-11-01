import React from 'react';
import CodeBlock from '../components/CodeBlock';

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

const architectureComponents = [
    { title: 'Search Layer', description: 'Utilizes full-text search (SQLite FTS5) and semantic search (embeddings + ChromaDB) with Reciprocal Rank Fusion for superior ranking.' },
    { title: 'Agentic Layer', description: 'Performs query complexity analysis, generates multi-step action plans, and coordinates tools using LLM-powered reasoning.' },
    { title: 'Tool System', description: 'A flexible system of tools including a SearchTool for finding code, an AnalyzeTool for understanding structure, and a SynthesizeTool for generating answers.' },
    { title: 'RAG Enhancement', description: 'Retrieves relevant context from indexed documents to provide the LLM with the necessary information to generate detailed, accurate explanations.'},
    { title: 'Multi-Backend LLM Support', description: 'Integrates seamlessly with various local LLM providers like Ollama, llama-cpp-python, and MLX for Apple Silicon.'}
];

const HowItWorksPage: React.FC = () => {
    const simpleQuerySteps = `
Search: "authentication"
→ Direct keyword + semantic search
→ Returns relevant files instantly
`.trim();

  const complexQuerySteps = `
Agent Query: "How does authentication work?"

1. Agent analyzes query complexity.
2. LLM generates a multi-step action plan.
3. Executes tools (Search, Analyze, Synthesize).
4. RAG enhances with code context.
5. Returns detailed explanation + sources.
`.trim();
  return (
    <div>
      <PageHeader
        title="Under the Hood"
        subtitle="From a simple search to a complex architectural question, see how Hyperthymesia processes your queries."
      />

      <section className="py-16 md:py-24 bg-gray-950/50 rounded-lg my-16">
        <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Query Lifecycle</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Hyperthymesia adapts its strategy based on your query's complexity.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8">
            <div className="p-6 bg-black rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Simple Queries</h3>
            <p className="text-gray-400 mb-6">For keywords and direct searches, get instant results powered by a hybrid search engine.</p>
            <CodeBlock code={simpleQuerySteps} language="text" />
            </div>
            <div className="p-6 bg-black rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Complex Questions</h3>
            <p className="text-gray-400 mb-6">For abstract questions, an intelligent agent orchestrates multiple tools to synthesize a comprehensive answer.</p>
            <CodeBlock code={complexQuerySteps} language="text" />
            </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Technical Architecture</h2>
        <div className="max-w-4xl mx-auto space-y-4">
            {architectureComponents.map(component => (
                <div key={component.title} className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-white">{component.title}</h3>
                    <p className="text-gray-400 mt-2">{component.description}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="mb-16 md:mb-24 p-8 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-6">What is RAG (Retrieval-Augmented Generation)?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 mb-4">
              RAG is a powerful technique that enhances AI responses by combining retrieval and generation. Instead of the LLM generating answers from memory alone, it:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-brand-blue font-bold mr-3">1.</span>
                <span><span className="font-semibold">Retrieves</span> relevant code and documentation from your codebase</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue font-bold mr-3">2.</span>
                <span><span className="font-semibold">Augments</span> the LLM prompt with this context</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue font-bold mr-3">3.</span>
                <span><span className="font-semibold">Generates</span> answers grounded in your actual code</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Why It Matters:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Answers are accurate and specific to your codebase</li>
              <li>✓ Every statement is backed by actual code examples</li>
              <li>✓ No hallucinations or generic advice</li>
              <li>✓ Complete source tracking and citations</li>
              <li>✓ Works with codebases larger than model context</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Multi-Backend LLM Support</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Choose the LLM backend that best fits your needs. All run locally on your machine—no cloud required.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Ollama</h3>
            <p className="text-gray-400 mb-4">The easiest and most popular option. Simple installation and model management.</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ User-friendly setup</li>
              <li>✓ Recommended for beginners</li>
              <li>✓ Wide model support</li>
              <li>✓ Cross-platform</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">llama-cpp-python</h3>
            <p className="text-gray-400 mb-4">Advanced option with optimized performance and fine-grained control.</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Maximum performance</li>
              <li>✓ Custom quantization</li>
              <li>✓ Full control</li>
              <li>✓ For power users</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">MLX (Apple Silicon)</h3>
            <p className="text-gray-400 mb-4">Optimized for Apple Silicon Macs with native performance.</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Native M1/M2/M3 support</li>
              <li>✓ Best macOS performance</li>
              <li>✓ Lower power consumption</li>
              <li>✓ Faster inference</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
