import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'blog':
        return <BlogPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="pt-20">
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}