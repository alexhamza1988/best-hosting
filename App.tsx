import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { LatestPosts } from './components/LatestPosts';
import { Footer } from './components/Footer';
import { SERVICES, GUIDES, CATEGORIES } from './constants';

function App() {
  return (
    <div className="bg-white text-dark-gray font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts allServices={SERVICES} categories={CATEGORIES} />
        <LatestPosts posts={GUIDES} />
      </main>
      <Footer />
    </div>
  );
}

export default App;