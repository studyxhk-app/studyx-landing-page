import React from 'react';
import { Flame, ChevronRight, TrendingUp } from 'lucide-react';

export const SubjectsScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 font-sans p-4 pt-10">
      <h2 className="text-center font-bold text-gray-900 mb-4 text-sm mt-1">Subjects</h2>

      {/* Daily Missions */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-orange-500">
                <Flame size={16} fill="currentColor" />
                <span className="font-bold text-sm">Daily Missions</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
        </div>
        <div className="space-y-3">
            <div>
                <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-700">Complete 3 quizzes</span>
                    <span className="text-gray-500">2/3</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 w-2/3 h-full rounded-full"></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-700">Score 80%+ in 2 quizzes</span>
                    <span className="text-gray-500">1/2</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 w-1/2 h-full rounded-full"></div>
                </div>
            </div>
        </div>
        <div className="mt-3 bg-blue-50 p-2 rounded-lg flex gap-2 items-center">
            <span className="text-yellow-500 text-sm">⚡</span>
            <p className="text-[10px] text-blue-800 leading-tight">Complete both missions today to unlock an extra +300 XP.</p>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="space-y-3 overflow-y-auto no-scrollbar pb-10">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-sm">Mathematics</h3>
                <p className="text-[10px] text-gray-500">240 quizzes • 1204 questions</p>
            </div>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                <span className="font-serif font-bold text-lg">中</span>
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-sm">Chinese</h3>
                <p className="text-[10px] text-gray-500">390 quizzes • 2023 questions</p>
            </div>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white shrink-0">
                <span className="font-sans font-bold text-lg">E</span>
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-sm">English</h3>
                <p className="text-[10px] text-gray-500">764 quizzes • 12184 questions</p>
            </div>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#ef4444] flex items-center justify-center text-white shrink-0">
                <TrendingUp size={20} />
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-sm">Economics</h3>
                <p className="text-[10px] text-gray-500">503 quizzes • 2762 questions</p>
            </div>
        </div>
      </div>
    </div>
  );
};