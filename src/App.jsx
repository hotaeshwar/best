import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BestbyBitesBanner from './components/BestbyBitesBanner';
import BestByBitesHero from './components/BestByBitesHero';
import WhyUseBestByBites from './components/WhyUseBestByBites';
import HowItWorks from './components/HowItWorks';
import GroceryLanding from './components/GroceryLanding';
import BusinessSolutions from './components/BusinessSolutions';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import HowTheAppWorks from './components/HowTheAppWorks';
import AreaComponent from './components/AreaComponent';
import MarketplaceComponent from './components/MarketplaceComponent';
import Platform from './components/Platform';
import Data from './components/Data';
import BestByBites from './components/BestByBites';
import DownloadAppSection from './components/DownloadAppSection';
import BestByBitesChatbot from './components/BestByBitesChatbot';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <BestByBitesChatbot />
      <main className="pt-0">
        <Routes>
          <Route path="/" element={
            <div>
              <BestbyBitesBanner />
              <WhyUseBestByBites />
              <HowItWorks />
              <GroceryLanding />
              <BusinessSolutions />
              <Footer />
            </div>
          } />
          <Route path="/bestbybites" element={<BestByBitesHero />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/how-the-app-works" element={<HowTheAppWorks />} />
          <Route path="/bestbybites-in-my-area" element={<AreaComponent />} />
          <Route path="/surplus-food-marketplace" element={<MarketplaceComponent />} />
          <Route path="/bestbybites-platform" element={<Platform />} />
          <Route path="/data-layer-initiative" element={<Data />} />
          <Route path="/how-to-collect-bestbybites" element={<BestByBites />} />
          <Route path="/download-app" element={<DownloadAppSection />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;