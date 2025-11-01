import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import WhyNow from '../components/WhyNow';
import UseCases from '../components/UseCases';
import Installation from '../components/Installation';
import ComparisonTable from '../components/ComparisonTable';
import Roadmap from '../components/Roadmap';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <WhyNow />
      <UseCases />
      <Installation />
      <ComparisonTable />
      <Roadmap />
    </>
  );
};

export default HomePage;
