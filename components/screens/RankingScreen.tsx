import React from 'react';

export const RankingScreen: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#3CA1FF] font-sans overflow-hidden">
      {/* Header - Integrated with Status Bar */}
      <div className="pt-12 pb-2 text-white text-center relative z-10">
        <h2 className="font-bold text-lg tracking-wide">Ranking</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 px-4 mb-6 relative z-10">
        <button className="flex items-center justify-center w-28 py-1.5 bg-[#007AFF] text-white text-xs rounded-full font-semibold shadow-sm">
            All Time 
            <span className="ml-1 text-[8px]">▼</span>
        </button>
        <button className="flex items-center justify-center w-28 py-1.5 bg-white text-[#007AFF] text-xs rounded-full font-semibold shadow-sm">
            Individual
            <span className="ml-1 text-[8px]">▼</span>
        </button>
      </div>

      {/* Podium Section */}
      <div className="flex-1 bg-white rounded-t-[2.5rem] relative mt-2 overflow-hidden flex flex-col pt-8">
          
          <div className="flex items-end justify-center gap-2 px-2 -mt-10 mb-4 relative z-10">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
                <div className="relative mb-1">
                    <div className="w-14 h-14 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md z-10 relative">
                        <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="2nd" />
                    </div>
                    {/* Medal Badge */}
                    <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-6 h-6 z-20">
                         <div className="w-full h-full rounded-full bg-gray-300 border-2 border-white flex items-center justify-center shadow-sm">
                             <span className="text-gray-700 font-bold text-xs">2</span>
                         </div>
                    </div>
                </div>
                <div className="bg-[#2C3E50] text-white w-20 h-28 rounded-t-lg flex flex-col items-center pt-8 shadow-lg">
                    <span className="text-[10px] font-bold text-center px-1 leading-tight truncate w-full">人肉計算機</span>
                    <span className="text-[9px] opacity-80 mt-1 font-medium">4135 XP</span>
                </div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center z-20 mx-0.5">
                <div className="relative mb-1">
                    <div className="w-16 h-16 rounded-full border-4 border-white bg-yellow-100 overflow-hidden shadow-md z-10 relative">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/240px-Albert_Einstein_Head.jpg" className="w-full h-full object-cover" alt="1st" />
                    </div>
                    {/* Medal Badge */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 z-20">
                         <div className="w-full h-full rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center shadow-sm">
                             <span className="text-yellow-900 font-bold text-sm">1</span>
                         </div>
                    </div>
                </div>
                <div className="bg-[#007AFF] text-white w-24 h-36 rounded-t-xl flex flex-col items-center pt-9 shadow-xl relative top-0">
                    <span className="text-[11px] font-bold text-center px-1 leading-tight">Albert Einstein</span>
                    <span className="text-[10px] opacity-90 mt-1 font-semibold">4965 XP</span>
                </div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
                <div className="relative mb-1">
                    <div className="w-14 h-14 rounded-full border-4 border-white bg-orange-100 overflow-hidden shadow-md z-10 relative">
                        {/* Using a reliable photo of an elderly man for Confucius representation */}
                        <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="3rd" />
                    </div>
                    {/* Medal Badge */}
                    <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-6 h-6 z-20">
                         <div className="w-full h-full rounded-full bg-[#CD7F32] border-2 border-white flex items-center justify-center shadow-sm">
                             <span className="text-white font-bold text-xs">3</span>
                         </div>
                    </div>
                </div>
                <div className="bg-[#2C3E50] text-white w-20 h-24 rounded-t-lg flex flex-col items-center pt-8 shadow-lg">
                    <span className="text-[10px] font-bold text-center px-1 leading-tight truncate w-full">孔子</span>
                    <span className="text-[9px] opacity-80 mt-1 font-medium">4040 XP</span>
                </div>
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto no-scrollbar bg-white w-full">
            {[
                // Using a photo of a western man for Adam Smith
                { rank: 4, name: "Adam Smith", xp: "3850", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
                { rank: 5, name: "StudyX", sub: "You", xp: "2760", img: "", isMe: true },
                { rank: 6, name: "望咩望！溫書啦👊🏻", xp: "1805", img: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=150&q=80" },
                { rank: 7, name: "I Love StudyX❤️", xp: "1695", img: "https://cdn-icons-png.flaticon.com/512/833/833472.png" },
                { rank: 8, name: "我要入大學！", xp: "1630", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200&auto=format&fit=crop" },
            ].map((user) => (
                <div key={user.rank} className={`flex items-center px-4 py-3 border-b border-gray-50 ${user.isMe ? 'bg-[#EBF5FF]' : 'bg-white'}`}>
                <span className="w-5 text-center font-medium text-xs text-gray-500">{user.rank}</span>
                <div className={`w-9 h-9 rounded-full mx-3 overflow-hidden flex items-center justify-center shadow-sm border border-gray-100 ${user.isMe ? 'bg-white' : 'bg-gray-50'}`}>
                    {user.isMe ? <span className="font-extrabold text-blue-600 text-[9px]">StudyX</span> : <img src={user.img} loading="lazy" className="w-full h-full object-cover" alt={user.name} />}
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className={`text-xs font-bold truncate ${user.isMe ? 'text-[#007AFF]' : 'text-gray-900'}`}>
                    {user.name}
                    </h4>
                </div>
                <span className={`text-xs font-bold ${user.isMe ? 'text-[#007AFF]' : 'text-gray-900'}`}>{user.xp} XP</span>
                </div>
            ))}
          </div>
      </div>
    </div>
  );
};