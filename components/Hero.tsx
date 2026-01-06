import React from 'react';
import { Button } from './ui/Button';
import { PhoneFrame } from './ui/PhoneFrame';
import { QuizScreen } from './screens/QuizScreen';
import { SubjectsScreen } from './screens/SubjectsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { Download, Star, Zap, Rocket } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 relative z-20">
            <button 
              onClick={onDownloadClick}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-base font-bold mb-4 hover:bg-blue-100 transition-all cursor-pointer group shadow-sm hover:shadow-md hover:scale-105 duration-300"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <span>{t('hero.badge')}</span>
              <svg className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t('hero.title.start')} <span className="text-blue-600">{t('hero.title.end')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
               <Button size="lg" onClick={onDownloadClick} className="shadow-xl shadow-blue-500/20 gap-2 px-8">
                 <Download size={20} />
                 {t('nav.download')}
               </Button>
            </div>
          </div>

          {/* App Preview - Single Phone Scrollable Layout */}
          <div className="relative h-[640px] w-full flex items-center justify-center lg:justify-end">
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 lg:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            
            {/* Single Phone */}
            <div className="relative z-30 transform hover:scale-[1.02] transition-transform duration-500">
               <PhoneFrame className="shadow-[0_25px_60px_-12px_rgba(0,0,0,0.3)] border-gray-900" statusBar="light">
                 {/* Scrollable Container */}
                 <div className="w-full h-full snap-start shrink-0">
                    <QuizScreen />
                 </div>
                 <div className="w-full h-full snap-start shrink-0">
                    <SubjectsScreen />
                 </div>
                 <div className="w-full h-full snap-start shrink-0">
                    <ProfileScreen />
                 </div>
               </PhoneFrame>
               
               {/* Floating Badge - Daily Streak */}
               <div className="absolute -right-12 top-20 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce hidden md:flex z-50" style={{ animationDuration: '3s' }}>
                  <div className="p-2 bg-red-100 rounded-lg text-red-600">
                      <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                      <p className="text-xs text-gray-500 font-medium">Daily Streak</p>
                      <p className="text-sm font-bold text-gray-900">12 Days 🔥</p>
                  </div>
              </div>

              {/* Floating Badge - XP */}
               <div className="absolute -left-8 bottom-32 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce hidden md:flex z-50" style={{ animationDuration: '4s' }}>
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                      <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                      <p className="text-xs text-gray-500 font-medium">Quiz Complete</p>
                      <p className="text-sm font-bold text-gray-900">+30 XP</p>
                  </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};