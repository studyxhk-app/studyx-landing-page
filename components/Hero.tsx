import React from 'react';
import { Button } from './ui/Button';
import { PhoneFrame } from './ui/PhoneFrame';
import { QuizScreen } from './screens/QuizScreen';
import { SubjectsScreen } from './screens/SubjectsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { Download, Star, Zap } from 'lucide-react';

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
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
              #1 Education App for HKDSE
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Seize every moment to <span className="text-blue-600">study & practice.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The exam-oriented companion for Hong Kong students. Master your subjects with gamified quizzes, community support, and detailed analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2" onClick={onDownloadClick}>
                <Download size={20} />
                Download for iOS
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2" onClick={onDownloadClick}>
                <Download size={20} />
                Download for Android
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