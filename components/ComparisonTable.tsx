
import React from 'react';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: 'Privacy', hyper: '✓ Local', cloud: '✗ Cloud', copilot: '~ Partial', traditional: '✓ Local' },
    { name: 'Cost', hyper: '✓ Free', cloud: '✗ Paid', copilot: '✗ Paid', traditional: '✓ Free' },
    { name: 'Works Offline', hyper: '✓ Yes', cloud: '✗ No', copilot: '~ Limited', traditional: '✓ Yes' },
    { name: 'Codebase Understanding', hyper: '✓ Deep', cloud: '✓ Deep', copilot: '~ Code gen focus', traditional: '✗ Shallow' },
    { name: 'Multi-tool Agent', hyper: '✓ Yes', cloud: '✗ Limited', copilot: '✗ Limited', traditional: '✗ No' },
    { name: 'Complex Queries', hyper: '✓ Yes', cloud: '~ Simple', copilot: '✗ Limited', traditional: '✓ Keyword' },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">How We Compare</h2>
        <p className="mt-4 text-lg text-gray-400">A new paradigm for code assistance.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-gray-900/50 border-b border-gray-800 font-semibold text-white">Feature</th>
              <th className="p-4 bg-brand-blue/10 border-b border-gray-800 font-semibold text-brand-blue text-center">Hyperthymesia</th>
              <th className="p-4 bg-gray-900/50 border-b border-gray-800 font-semibold text-white text-center">Cloud AI</th>
              <th className="p-4 bg-gray-900/50 border-b border-gray-800 font-semibold text-white text-center">GitHub Copilot</th>
              <th className="p-4 bg-gray-900/50 border-b border-gray-800 font-semibold text-white text-center">Traditional Search</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="p-4 border-b border-gray-800 text-gray-300 font-medium">{feature.name}</td>
                <td className="p-4 border-b border-gray-800 text-center bg-brand-blue/5 text-lg">{feature.hyper}</td>
                <td className="p-4 border-b border-gray-800 text-center text-gray-400 text-lg">{feature.cloud}</td>
                <td className="p-4 border-b border-gray-800 text-center text-gray-400 text-lg">{feature.copilot}</td>
                <td className="p-4 border-b border-gray-800 text-center text-gray-400 text-lg">{feature.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
