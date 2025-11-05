import React from 'react';
import Navbar from './components/Navbar';
import LocationSearch from './components/LocationSearch';
import HeroTrust from './components/HeroTrust';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-black">
      <Navbar />
      <LocationSearch />
      <HeroTrust />
      <MainContent />
    </div>
  );
}

export default App;
