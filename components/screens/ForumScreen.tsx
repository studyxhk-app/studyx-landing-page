import React from 'react';
import { Search, Clock, Flame, Heart, MessageSquare, Eye, MessageCircle } from 'lucide-react';

export const ForumScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#f0f2f5] font-sans">
      {/* Header with Status Bar Integration */}
      <div className="bg-[#3498db] pt-10 pb-3 px-4 flex items-center justify-between text-white shadow-sm sticky top-0 z-20">
        <div className="w-5"></div>
        <h1 className="font-bold text-base tracking-wide">Forum</h1>
        <Search size={20} strokeWidth={2.5} />
      </div>

      {/* Filter Tags */}
      <div className="bg-white px-3 py-3 flex gap-2 overflow-x-auto no-scrollbar border-b border-gray-100 sticky top-[76px] z-10">
        <button className="px-4 py-1 bg-[#3498db] text-white text-[11px] rounded-full font-medium whitespace-nowrap shadow-sm">All</button>
        <button className="px-4 py-1 bg-gray-100 text-gray-500 text-[11px] rounded-full font-medium whitespace-nowrap">中文</button>
        <button className="px-4 py-1 bg-gray-100 text-gray-500 text-[11px] rounded-full font-medium whitespace-nowrap">中史</button>
        <button className="px-4 py-1 bg-gray-100 text-gray-500 text-[11px] rounded-full font-medium whitespace-nowrap">English</button>
        <button className="px-4 py-1 bg-gray-100 text-gray-500 text-[11px] rounded-full font-medium whitespace-nowrap">Mathematics</button>
      </div>

      {/* Sub Filter */}
      <div className="bg-white px-4 pb-2.5 pt-1 flex gap-3 border-b border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] z-10">
        <button className="flex items-center gap-1.5 px-3 py-1 bg-[#3498db] text-white rounded-full text-[11px] font-medium shadow-sm">
          <Clock size={11} strokeWidth={3} /> Recent
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-[11px] font-medium">
          <Flame size={11} className="text-orange-500 fill-orange-500" /> Popular
        </button>
      </div>

      {/* Post List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 pb-20">
        
        {/* Post 1 */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 text-[13px]">Adam Smith</span>
              <span className="text-[10px] text-gray-400">23h ago</span>
            </div>
            <span className="bg-[#3498db] text-white text-[9px] px-2 py-0.5 rounded-full font-medium">Economics</span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">易 con</h3>
          <p className="text-gray-600 text-xs mb-3">Econ 其實唔難😎</p>
          <div className="flex items-center gap-5 text-gray-400">
             <div className="flex items-center gap-1.5 text-[11px] font-medium text-red-400"><Heart size={13} className="fill-red-400"/> 15</div>
             <div className="flex items-center gap-1.5 text-[11px] font-medium text-blue-400"><MessageSquare size={13} className="fill-blue-100"/> 14</div>
             <div className="flex items-center gap-1.5 text-[11px] font-medium"><Eye size={14} /> 86</div>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 text-[13px]">Albert Einstein</span>
              <span className="text-[10px] text-gray-400">23h ago</span>
            </div>
            <span className="bg-[#3498db] text-white text-[9px] px-2 py-0.5 rounded-full font-medium">Physics</span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">Physics 5**</h3>
          <p className="text-gray-600 text-xs mb-3">I hope I can get 5** in Physics🤪</p>
          <div className="flex items-center gap-5 text-gray-400">
             <div className="flex items-center gap-1.5 text-[11px] font-medium text-red-400"><Heart size={13} className="fill-red-400"/> 18</div>
             <div className="flex items-center gap-1.5 text-[11px] font-medium text-blue-400"><MessageSquare size={13} className="fill-blue-100"/> 16</div>
             <div className="flex items-center gap-1.5 text-[11px] font-medium"><Eye size={14} /> 70</div>
          </div>
        </div>

        {/* Post 3 */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 text-[13px]">孔子</span>
              <span className="text-[10px] text-gray-400">23h ago</span>
            </div>
            <span className="bg-[#3498db] text-white text-[9px] px-2 py-0.5 rounded-full font-medium">中文</span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">論語📖</h3>
          <p className="text-gray-600 text-xs mb-3">子曰：「Good Morning Class!」</p>
          <div className="flex items-center gap-5 text-gray-400">
             <div className="flex items-center gap-1.5 text-[11px] font-medium text-red-400"><Heart size={13} className="fill-red-400"/> 18</div>
             <div className="flex items-center gap-1.5 text-[11px] font-medium text-blue-400"><MessageSquare size={13} className="fill-blue-100"/> 12</div>
             <div className="flex items-center gap-1.5 text-[11px] font-medium"><Eye size={14} /> 64</div>
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-6 z-30">
        <button className="w-12 h-12 bg-[#3498db] rounded-full shadow-[0_4px_12px_rgba(52,152,219,0.4)] flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
          <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
        </button>
      </div>
    </div>
  );
};