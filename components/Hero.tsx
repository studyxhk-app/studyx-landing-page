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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t('hero.title.start')} <span className="text-blue-600">{t('hero.title.end')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Mobile App Early Access Section - Android Only */}
            <div className="max-w-xl mx-auto lg:mx-0 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 rounded-3xl flex items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative">
               <div className="flex items-center gap-4 pl-1 relative z-0">
                  <div className="relative z-20 bg-white p-2.5 rounded-2xl shadow-sm text-blue-600 group-hover:text-white group-hover:bg-blue-600 group-hover:shadow-blue-500/30 group-hover:translate-x-[165px] sm:group-hover:translate-x-[200px] lg:group-hover:translate-x-[230px] group-hover:rotate-45 transition-all duration-700 ease-in-out">
                    <Rocket size={22} fill="currentColor" fillOpacity={0.1} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col items-start text-left relative z-0">
                     <h3 className="font-bold text-gray-900 text-xl leading-tight">{t('hero.earlyAccess.title')}</h3>
                     <p className="text-base text-gray-500 font-medium mt-1">{t('hero.earlyAccess.subtitle')}</p>
                  </div>
               </div>
               <a 
                 href="https://forms.gle/jrfpCuwJZfs6Bw6p7" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="relative z-10 px-8 py-3.5 bg-blue-600 text-white text-base font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all whitespace-nowrap flex items-center gap-2"
               >
                 {t('hero.tryNow')}
                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
               </a>
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