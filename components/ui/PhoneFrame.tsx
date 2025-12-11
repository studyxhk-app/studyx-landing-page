import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  statusBar?: 'light' | 'dark'; // light = black text, dark = white text
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '', statusBar = 'dark' }) => {
  const statusColor = statusBar === 'light' ? 'text-gray-900' : 'text-white';

  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden ${className}`}>
      {/* Notch */}
      <div className="h-[32px] w-full absolute top-0 left-0 right-0 z-30 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[24px] w-[90px] bg-gray-900 rounded-b-2xl"></div>
      </div>
      
      {/* Status Bar */}
      <div className={`absolute top-0 left-0 right-0 h-[36px] px-5 flex justify-between items-center z-20 text-[10px] font-bold tracking-wide ${statusColor} pt-1`}>
        <div className="w-[80px] flex justify-start pl-1">
          <span>20:55</span>
        </div>
        <div className="w-[80px] flex justify-end items-center gap-1.5 pr-1">
          <Signal size={12} fill="currentColor" strokeWidth={0} />
          <Wifi size={12} strokeWidth={2.5} />
          <BatteryMedium size={14} />
        </div>
      </div>
      
      {/* Screen Content - Horizontal Scroll */}
      <div className="flex-1 bg-gray-50 overflow-x-auto no-scrollbar w-full h-full relative z-10 font-sans snap-x snap-mandatory scroll-smooth flex flex-row">
        {children}
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-900 rounded-full z-30 opacity-20"></div>
    </div>
  );
};