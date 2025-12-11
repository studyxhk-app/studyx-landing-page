import React from 'react';
import { ChevronLeft, Bookmark, Clock, Search } from 'lucide-react';

export const QuizScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white font-sans text-gray-800 pt-10">
      {/* Header */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
        <span className="text-sm font-semibold text-gray-500">Question 4 of 6</span>
        <div className="flex items-center gap-3 text-gray-400">
          <Bookmark size={18} />
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span className="text-xs font-medium">0:28</span>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-100">
        <div className="w-2/3 h-full bg-red-500"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        <p className="font-medium text-gray-900 mb-4 text-sm leading-6">
          S is the supply for fresh chicken. Which of the following can best explain the movement from point A to point B?
        </p>

        {/* Graph Placeholder */}
        <div className="border border-gray-200 rounded-lg p-2 mb-6 relative bg-gray-50 flex items-center justify-center h-40">
           {/* Simple SVG Graph */}
           <svg viewBox="0 0 100 80" className="w-full h-full text-gray-800">
              <line x1="10" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="1" /> {/* X Axis */}
              <line x1="10" y1="70" x2="10" y2="10" stroke="currentColor" strokeWidth="1" /> {/* Y Axis */}
              <line x1="20" y1="60" x2="80" y2="20" stroke="currentColor" strokeWidth="1" /> {/* Supply Curve */}
              <circle cx="65" cy="30" r="1.5" fill="black" /> <text x="60" y="25" fontSize="6">A</text>
              <circle cx="35" cy="50" r="1.5" fill="black" /> <text x="30" y="45" fontSize="6">B</text>
              <text x="85" y="15" fontSize="6">S</text>
              <text x="5" y="15" fontSize="6">P</text>
              <text x="90" y="75" fontSize="6">Q</text>
           </svg>
           <button className="absolute bottom-2 right-2 p-1.5 bg-gray-500 text-white rounded-full opacity-80">
             <Search size={14} />
           </button>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <button className="w-full p-3 text-left border rounded-lg text-xs hover:bg-gray-50 text-gray-600">
            A. The price of fresh chicken increases.
          </button>
          <button className="w-full p-3 text-left border-2 border-green-500 bg-green-50 rounded-lg text-xs font-medium text-green-800 shadow-sm">
            B. The price of chilled chicken decreases.
          </button>
          <button className="w-full p-3 text-left border rounded-lg text-xs text-gray-600">
            C. Bird flu kills lots of chickens.
          </button>
          <button className="w-full p-3 text-left border rounded-lg text-xs text-gray-600">
            D. Many chicken farms expand their business.
          </button>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="p-4 border-t flex justify-between items-center bg-white">
        <button className="px-4 py-2 border rounded text-xs font-medium text-gray-600">Previous</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded text-xs font-medium shadow">Next Question</button>
      </div>
    </div>
  );
};