import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onDownloadClick: () => void;
  onResourcesClick: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick, onResourcesClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToHeroMobile = (e: React.MouseEvent) => {
     e.preventDefault();
     setIsOpen(false);
     const hero = document.getElementById('hero');
     if (hero) {
       hero.scrollIntoView({ behavior: 'smooth' });
     } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
     }
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">StudyX</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" onClick={scrollToHero} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Features</a>
            <button onClick={onResourcesClick} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Resources</button>
            <button onClick={onContactClick} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact Us</button>
            <Button size="sm" onClick={onDownloadClick}>
              Download App
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#hero" onClick={scrollToHeroMobile} className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg">Features</a>
            <button onClick={() => { setIsOpen(false); onResourcesClick(); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg">Resources</button>
            <button onClick={() => { setIsOpen(false); onContactClick(); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg">Contact Us</button>
            <div className="pt-2">
              <Button className="w-full" onClick={() => { setIsOpen(false); onDownloadClick(); }}>Download App</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};