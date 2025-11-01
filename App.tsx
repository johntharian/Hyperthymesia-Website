import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import UseCasesPage from './pages/UseCasesPage';
import RoadmapPage from './pages/RoadmapPage';

const routes: { [key: string]: React.FC } = {
  '#/features': FeaturesPage,
  '#/how-it-works': HowItWorksPage,
  '#/use-cases': UseCasesPage,
  '#/roadmap': RoadmapPage,
};

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const CurrentPage = routes[route] || HomePage;

  return (
    <div className="bg-black min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-0 -z-10 h-1/2 w-full bg-gradient-to-b from-black via-black/80 to-transparent"></div>

      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <CurrentPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
