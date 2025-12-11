import React from 'react';
import { Mail, Instagram } from 'lucide-react';

interface FooterProps {
  onDownloadClick: () => void;
  onFeaturesClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick, onFeaturesClick }) => {
  return (
    <footer className="bg-slate-100 text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <span className="text-2xl font-extrabold text-gray-900 tracking-tight">StudyX</span>
            </div>
            <p className="text-slate-600 max-w-sm">
              Empowering Hong Kong students to achieve their academic dreams through technology and community.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onFeaturesClick} className="hover:text-blue-600 transition-colors text-left text-slate-600">
                  Features
                </button>
              </li>
              <li>
                <button onClick={onDownloadClick} className="hover:text-blue-600 transition-colors text-left text-slate-600">
                  Download
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Contact us</h4>
            <div className="flex gap-4">
              {/* WhatsApp */}
              <a href="https://wa.me/85298585420" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                 </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/studyxhk/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>

              {/* Email */}
              <a href="mailto:info@studyxhk.com" className="text-slate-600 hover:text-blue-600 transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} StudyX. All rights reserved. Made with ❤️ in Hong Kong.
        </div>
      </div>
    </footer>
  );
};