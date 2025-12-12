import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ComingSoon } from './components/ComingSoon';
import { ContactUs } from './components/ContactUs';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'coming-soon' | 'contact-us'>('home');

  if (view === 'coming-soon') {
    return <ComingSoon onBack={() => setView('home')} />;
  }

  if (view === 'contact-us') {
    return <ContactUs onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar 
        onDownloadClick={() => setView('coming-soon')} 
        onResourcesClick={() => setView('coming-soon')}
        onContactClick={() => setView('contact-us')}
      />
      
      <main>
        <Hero onDownloadClick={() => setView('coming-soon')} />
        <Features />
        
        {/* Call to Action Section */}
        <section id="download" className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
          {/* Decorative background effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to improve your grades?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Download StudyX today and start your journey to 5** success. <br className="hidden sm:block"/>
              Join the community of top scorers now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               {/* Official Google Play Badge Style - White Variant */}
               <button onClick={() => setView('coming-soon')} className="flex items-center gap-3 bg-white text-gray-900 px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl min-w-[180px]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M21.2 11.2l-2.6-1.5-3.4 3.4 3.4 3.4 2.6-1.5c.9-.5.9-2.3 0-2.8z"/>
                    <path fill="#EA4335" d="M15.2 13.1l-3.4-3.4-6.4-6.4c-.6.2-1.1.7-1.1 1.4v.4l10.9 8z"/>
                    <path fill="#FBBC04" d="M4.3 4.7C4.1 5 4 5.5 4 6v12c0 .5.1 1 .3 1.3l11.7-11.6-11.7-7z"/>
                    <path fill="#34A853" d="M15.2 10.9l-10.9 8v.4c0 .7.5 1.2 1.1 1.4l6.4-6.4 3.4-3.4z"/>
                  </svg>
                  <div className="text-left flex flex-col items-start">
                    <span className="text-[10px] font-medium leading-none mb-1 uppercase text-gray-600">Get it on</span>
                    <span className="text-xl font-bold leading-none font-sans tracking-tight">Google Play</span>
                  </div>
               </button>
            </div>
            
             <div className="mt-10 flex items-center justify-center gap-6 text-blue-200/60 text-sm font-medium">
                <span className="flex items-center gap-1">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   Free Forever
                </span>
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                <span className="flex items-center gap-1">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                   No Ads
                </span>
             </div>

          </div>
        </section>

        <Testimonials />
        <FAQ />
      </main>

      <Footer 
        onDownloadClick={() => setView('coming-soon')} 
        onFeaturesClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      />
    </div>
  );
};

export default App;