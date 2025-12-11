import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
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
               {/* Official App Store Badge Style - White Variant */}
               <button onClick={() => setView('coming-soon')} className="flex items-center gap-3 bg-white text-gray-900 px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl min-w-[180px]">
                  <svg className="w-8 h-8 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.388 13.123c-1.396-.807-2.18-2.313-2.096-3.92.083-2.52 2.146-4.11 2.229-4.172-.02-.062-1.354-1.574-2.73-1.593-1.166-.021-2.062.687-2.708.687-.667 0-1.708-.666-2.812-.645-1.438.02-2.77 1.25-2.77 1.25s-2.355 2.875-2.355 6.042c0 4.604 3.667 8.041 3.667 8.041s1.083 2.938 2.666 2.896c1.104-.02 1.542-.708 2.896-.708 1.333 0 1.75.708 2.833.687 1.646-.02 2.625-2.916 2.625-2.916s-1.896-.791-2.833-2.333zM12.97 3.604c.729-.875 1.209-2.084 1.084-3.313-1.042.042-2.313.688-3.063 1.563-.666.75-1.25 1.958-1.083 3.125 1.166.083 2.333-.5 3.062-1.375z"/>
                  </svg>
                  <div className="text-left flex flex-col items-start">
                    <span className="text-[10px] font-medium leading-none mb-1 text-gray-600">Download on the</span>
                    <span className="text-xl font-bold leading-none font-sans tracking-tight">App Store</span>
                  </div>
               </button>

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
      </main>

      <Footer 
        onDownloadClick={() => setView('coming-soon')} 
        onFeaturesClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      />
    </div>
  );
};

export default App;