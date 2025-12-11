import React from 'react';
import { Bookmark, FileText, Clock } from 'lucide-react';

export const ReadingQuizScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white font-sans text-gray-800 pt-10">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-50 bg-white">
        <span className="text-sm font-bold text-gray-500">Question 1 of 15</span>
        <div className="flex items-center gap-3 text-gray-400">
          <Bookmark size={18} className="text-blue-500 fill-blue-500" />
          <FileText size={18} />
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span className="text-xs font-medium">0:20</span>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-100">
        <div className="w-[10%] h-full bg-blue-500"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 overflow-y-auto no-scrollbar">
        <h3 className="font-bold text-gray-900 text-base mb-4 leading-snug">
          1. What is the main focus of the passage?
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <button className="w-full p-4 text-left border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            A. Why adults need more sleep than teens.
          </button>
          
          <button className="w-full p-4 text-left border-2 border-green-400 bg-green-50 rounded-xl text-xs font-bold text-green-700 shadow-sm transition-all">
            B. The biological and societal reasons teenagers lack sleep.
          </button>
          
          <button className="w-full p-4 text-left border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            C. How to wake up early without feeling tired.
          </button>
          
          <button className="w-full p-4 text-left border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            D. The benefits of coffee for teens.
          </button>
        </div>

        {/* Explanation */}
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <h4 className="text-blue-600 font-bold text-xs mb-1">Explanation</h4>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            The passage explores both biological sleep shifts and external factors like school times.
          </p>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="p-4 border-t border-gray-100 bg-white flex justify-end">
        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};