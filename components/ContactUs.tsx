import React from 'react';
import { Mail, ArrowLeft, MessageCircle, HelpCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../hooks/useLanguage';

interface ContactUsProps {
  onBack: () => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onBack }) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Dynamic Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl w-full relative z-10 animate-in fade-in zoom-in duration-700">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100 shadow-sm mb-8 hover:bg-white hover:scale-105 transition-all cursor-default">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-700 text-xs font-bold uppercase tracking-widest">{t('contact.badge')}</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 tracking-tight mb-6 drop-shadow-sm pb-2">
             {t('contact.title')}
           </h1>
           
           <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
             {t('contact.subtitle')}
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 px-4">
            {/* WhatsApp Card */}
            <a href="https://wa.me/85298585420" target="_blank" rel="noopener noreferrer" className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:border-green-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(34,197,94,0.1)] hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -ml-16 -mb-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner ring-1 ring-green-200/50">
                        <MessageCircle size={48} strokeWidth={1.5} className="drop-shadow-sm" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl mb-2">WhatsApp</h3>
                    <p className="text-gray-500 mb-8 font-medium">{t('contact.whatsapp.desc')}</p>
                    <div className="px-8 py-3 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white transition-all duration-300">
                      <span className="text-gray-900 font-bold text-lg tracking-wide group-hover:text-white">9858 5420</span>
                    </div>
                </div>
            </a>

            {/* Email Card */}
            <a href="mailto:info@studyxhk.com" className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:border-blue-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] hover:-translate-y-2 overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -ml-16 -mb-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-inner ring-1 ring-blue-200/50">
                        <Mail size={48} strokeWidth={1.5} className="drop-shadow-sm" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl mb-2">Email</h3>
                    <p className="text-gray-500 mb-8 font-medium">{t('contact.email.desc')}</p>
                    <div className="px-8 py-3 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                      <span className="text-gray-900 font-bold text-lg tracking-wide group-hover:text-white">info@studyxhk.com</span>
                    </div>
                </div>
            </a>
        </div>

        <div className="text-center flex flex-col items-center gap-6">
             <div className="flex items-center gap-2 text-gray-400 text-sm">
                <HelpCircle size={16} />
                <span>{t('contact.response')}</span>
             </div>
             
             <Button onClick={onBack} variant="secondary" className="pl-6 pr-8 py-4 text-gray-600 hover:text-gray-900 border-gray-200 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all gap-3 rounded-full text-base font-bold tracking-wide">
                <ArrowLeft size={20} /> {t('contact.back')}
             </Button>
        </div>
      </div>
    </div>
  );
};