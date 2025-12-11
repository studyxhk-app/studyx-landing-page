import React from 'react';
import { Mail, ArrowLeft, MessageCircle, Rocket } from 'lucide-react';
import { Button } from './ui/Button';

interface ComingSoonProps {
  onBack: () => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-xl w-full relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
          
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/30 transform -rotate-6">
            <Rocket size={40} className="text-white fill-white/20" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Coming Soon!
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We're putting the finishing touches on StudyX. <br className="hidden sm:block"/>
            Get ready to revolutionize your HKDSE prep.
          </p>

          {/* Contact Cards */}
          <div className="space-y-4 text-left mb-10">
             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">Contact us for early access</div>
             
             <a href="mailto:info@studyxhk.com" className="flex items-center gap-5 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
               </div>
               <div>
                  <p className="text-xs text-gray-500 font-medium">Email Support</p>
                  <span className="font-bold text-gray-900 text-lg">info@studyxhk.com</span>
               </div>
             </a>
             
             <a href="https://wa.me/85298585420" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 hover:bg-green-50/30 transition-all group">
               <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} />
               </div>
               <div>
                  <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                  <span className="font-bold text-gray-900 text-lg">9858 5420</span>
               </div>
             </a>
          </div>

          <Button onClick={onBack} variant="secondary" className="w-full py-4 text-gray-600 hover:text-gray-900 border-gray-200 gap-2">
            <ArrowLeft size={18} />
            Return to Homepage
          </Button>
        </div>

        {/* Branding Footer */}
        <div className="mt-8 text-center opacity-60">
             <span className="block text-2xl font-extrabold text-gray-900 tracking-tight mb-2">StudyX</span>
             <p className="text-sm text-gray-500">© StudyX Hong Kong</p>
        </div>
      </div>
    </div>
  );
};