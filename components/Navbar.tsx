import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../hooks/useLanguage';

interface NavbarProps {
  onDownloadClick: () => void;
  onResourcesClick: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick, onResourcesClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

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
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to homepage"
          >
            {/* 
              Logo Image
            */}
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 40'%3E%3Ctext x='0' y='32' font-family='Inter, sans-serif' font-weight='800' font-size='32' fill='%23111827'%3EStudyX%3C/text%3E%3C/svg%3E" 
              alt="StudyX Logo" 
              className="h-8 w-auto" 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" onClick={scrollToHero} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('nav.features')}</a>
            <button onClick={onResourcesClick} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('nav.resources')}</button>
            <button onClick={onContactClick} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('nav.contact')}</button>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition-colors"
              aria-label="Switch Language"
            >
              <Globe size={20} />
              <span className="text-sm">{language === 'en' ? '繁' : 'EN'}</span>
            </button>

            <Button size="sm" onClick={onDownloadClick}>
              {t('nav.download')}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="text-gray-600 hover:text-blue-600 p-1"
                aria-label="Switch Language"
            >
               <Globe size={24} />
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-blue-600 p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#hero" onClick={scrollToHeroMobile} className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg">{t('nav.features')}</a>
            <button onClick={() => { setIsOpen(false); onResourcesClick(); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg">{t('nav.resources')}</button>
            <button onClick={() => { setIsOpen(false); onContactClick(); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg">{t('nav.contact')}</button>
            <div className="pt-2">
              <Button className="w-full" onClick={() => { setIsOpen(false); onDownloadClick(); }}>{t('nav.download')}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};