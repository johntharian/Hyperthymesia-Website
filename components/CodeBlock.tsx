
import React, { useState } from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden relative group font-mono text-left">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <CheckIcon className="w-5 h-5 text-green-400" />
        ) : (
          <ClipboardIcon className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <pre className="p-4 text-sm overflow-x-auto">
        <code className={`language-${language} text-gray-300`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
