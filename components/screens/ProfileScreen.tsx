import React from 'react';
import { Settings, UserPlus, Flame, Plus } from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#f8fafc] font-sans w-full">
      {/* Header */}
      <div className="pt-10 pb-2 px-4 flex items-center justify-between bg-white relative z-10">
        <div className="w-6"></div> {/* Spacer */}
        <h1 className="text-base font-bold text-gray-900">Profile</h1>
        <Settings size={20} className="text-gray-400" />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-6">
        {/* Profile Card */}
        <div className="bg-white pb-6 pt-2 px-6 mb-3 border-b border-gray-100 shadow-sm">
           <div className="flex items-start gap-4 mb-4">
              {/* Profile Avatar - Placeholder */}
              <div className="w-16 h-16 rounded-full border-2 border-blue-500 p-0.5 shrink-0 bg-blue-100 flex items-center justify-center">
                 <span className="text-xl font-extrabold text-blue-600">SF</span>
              </div>
              <div className="pt-1">
                 <h2 className="text-lg font-extrabold text-gray-900 leading-tight">HKDSE Fighter!</h2>
                 <p className="text-gray-400 text-xs mb-1">@dsefighter</p>
                 <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Sha Tin Government Secondary School</p>
              </div>
           </div>

           <div className="flex justify-around mb-6 px-4 border-t border-b border-gray-50 py-4">
              <div className="text-center">
                 <div className="text-lg font-bold text-gray-900">35</div>
                 <div className="text-[10px] text-gray-500 font-medium">Following</div>
              </div>
              <div className="w-px bg-gray-100"></div>
              <div className="text-center">
                 <div className="text-lg font-bold text-gray-900">22</div>
                 <div className="text-[10px] text-gray-500 font-medium">Followers</div>
              </div>
           </div>

           <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-bold text-sm shadow-md shadow-blue-200 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
              <UserPlus size={16} />
              Add Friends
           </button>
        </div>

        {/* Level Progress */}
        <div className="px-4 mb-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-gray-800 text-sm">Level 2</span>
                    <span className="text-xs text-gray-400 font-medium">650 / 800 XP</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[81%] h-full bg-blue-600 rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 mb-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-6">
                <span className="text-2xl font-extrabold text-gray-900">650</span>
                <span className="text-[10px] text-gray-400 font-medium uppercase mt-1">Total XP</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-6">
                <div className="flex items-center gap-1">
                    <Flame size={20} className="text-orange-500 fill-orange-500" />
                    <span className="text-2xl font-extrabold text-gray-900">2</span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium uppercase mt-1">Day Streak</span>
            </div>
        </div>

        {/* Friend Streaks */}
        <div className="px-4">
           <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                 <UsersIcon />
                 <span className="font-bold text-gray-800 text-sm">Friend Streaks</span>
              </div>
              <div className="flex justify-between items-center">
                 <FriendAvatar img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/240px-Albert_Einstein_Head.jpg" streak={1} />
                 <FriendAvatar img="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=200&auto=format&fit=crop" streak={1} />
                 
                 <button className="w-11 h-11 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors">
                    <Plus size={20} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const UsersIcon = () => (
    <svg className="w-4 h-4 text-blue-500 fill-blue-500" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
);

const FriendAvatar = ({ img, streak }: { img: string, streak: number }) => (
    <div className="flex flex-col items-center gap-1">
        <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-100 shadow-sm">
            <img src={img} alt="Friend" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center gap-0.5 text-[10px] font-bold text-gray-700">
            <Flame size={10} className="text-orange-500 fill-orange-500" />
            <span>{streak}</span>
        </div>
    </div>
);