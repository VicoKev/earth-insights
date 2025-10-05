import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import VideoGallery from './components/VideoGallery';
import Quiz from './components/Quiz';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'videos':
        return <VideoGallery />;
      case 'quiz':
        return <Quiz />;
      case 'simulations':
        return <h1 className="p-8 text-white">Simulations Page - Coming Soon!</h1>;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
