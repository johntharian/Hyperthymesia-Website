import React, { useState } from 'react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const scriptUrl = import.meta.env.VITE_WAITLIST_WEBHOOK_URL;

      if (!scriptUrl) {
        throw new Error('Waitlist webhook URL not configured. Please set VITE_WAITLIST_WEBHOOK_URL in your .env.local file');
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit email');
      }

      setIsSubmitted(true);
      setEmail('');

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist-section" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 blur-3xl pointer-events-none -z-10"></div>

        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
              Interested in Getting Started?
            </h2>
            <p className="text-lg text-gray-400">
              Sign up to try Hyperthymesia and experience your personal AI code assistant today.
            </p>
          </div>

          {isSubmitted ? (
            <div className="relative">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-lg p-8 text-center backdrop-blur-sm">
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">You're All Set!</h3>
                <p className="text-green-300/80 mb-4">
                  Due to high demand, you've been added to our waitlist.
                </p>
                <p className="text-sm text-green-300/60">
                  We'll send you a link to download and try Hyperthymesia at <span className="font-semibold">{email}</span> shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/50 rounded-lg p-8 backdrop-blur-sm">
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Enter your email to download
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-brand-blue/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Getting Your Download...
                    </span>
                  ) : (
                    'Download Now'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy. Your email will only be used to send you the download link and product updates.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
