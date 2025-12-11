import React from 'react';
import { PhoneFrame } from './ui/PhoneFrame';
import { SubjectsScreen } from './screens/SubjectsScreen';
import { ForumScreen } from './screens/ForumScreen';
import { RankingScreen } from './screens/RankingScreen';
import { BookOpen, Target, Users, Zap, MessageCircle, BarChart3, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
    title: "Gamified Learning",
    description: "Earn XP, level up, and maintain streaks. Studying doesn't have to be boring."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    color: "bg-emerald-500",
    title: "All Major Subjects",
    description: "Comprehensive coverage for Math, English, Chinese, Economics, Physics, and more."
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-indigo-500",
    title: "Community Forum",
    description: "Stuck on a question? Ask the community and get detailed explanations instantly."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    color: "bg-amber-500",
    title: "Exam-Oriented",
    description: "Questions modeled after real HKDSE papers to ensure you are exam-ready."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
            <Zap size={16} className="fill-blue-700" />
            <span>Why Choose StudyX?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ace the DSE</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine proven learning techniques with habit-building gamification to make studying effective and addictive.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 ${feature.color} rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive Sections */}
        <div id="subjects" className="space-y-40">
            {/* Section 1: Subjects */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-100/50 to-blue-50/50 rounded-full blur-3xl transform scale-90"></div>
                    <div className="relative transform transition-transform duration-700 hover:scale-[1.02]">
                         <PhoneFrame className="transform rotate-2 shadow-2xl" statusBar="dark">
                            <SubjectsScreen />
                         </PhoneFrame>
                         {/* Floating badges for Subjects */}
                         <div className="absolute top-16 -left-4 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3.5s' }}>
                             <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                             </div>
                             <span className="text-xs font-bold text-gray-800">Mission Complete</span>
                         </div>
                         <div className="absolute bottom-32 -right-4 bg-white p-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce" style={{ animationDuration: '4.5s' }}>
                             <div className="bg-yellow-100 p-1.5 rounded-full text-yellow-600">
                                 <Zap size={16} fill="currentColor" />
                             </div>
                             <span className="text-xs font-bold text-gray-800">+300 XP</span>
                         </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-semibold border border-green-100">
                        <BookOpen size={16} />
                        <span>Smart Learning</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Personalized Subject Dashboard
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Customize your learning path. Select the subjects you are taking and get daily missions tailored to your weak spots. Track your progress with detailed stats for every subject.
                    </p>
                    
                    <div className="space-y-4 pt-2">
                        {[
                            { text: 'Daily Missions to keep you on track', icon: <Target size={18} /> },
                            { text: 'Unlock extra XP for consistency', icon: <Zap size={18} /> },
                            { text: 'Over 15,000+ practice questions', icon: <BarChart3 size={18} /> }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-green-200 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    {item.icon}
                                </div>
                                <span className="font-medium text-gray-800">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

             {/* Section 2: Ranking */}
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-semibold border border-yellow-100">
                        <Trophy size={16} />
                        <span>Leaderboard</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Compete with Friends
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Join the leaderboard and see where you stand among peers in Hong Kong. Challenge friends, earn badges, and stay motivated by seeing your name climb the ranks.
                    </p>
                    
                    <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg mt-6">
                        <div className="absolute -top-4 left-8 text-6xl text-blue-100 font-serif leading-none">"</div>
                        <p className="relative z-10 text-gray-700 italic font-medium text-lg">
                            The competition makes me want to study just 10 more minutes every night! It's actually fun.
                        </p>
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-50">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                <img src="https://picsum.photos/seed/student/100" alt="Student" />
                            </div>
                            <span className="text-sm font-bold text-gray-900">Sarah C.</span>
                            <div className="flex text-yellow-400 text-xs gap-0.5 ml-auto">
                                ★★★★★
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tl from-yellow-100/50 to-orange-50/50 rounded-full blur-3xl transform scale-90"></div>
                    <div className="relative transform transition-transform duration-700 hover:scale-[1.02]">
                         {/* Updated statusBar to light to match screenshot */}
                         <PhoneFrame className="transform -rotate-2 shadow-2xl" statusBar="light">
                            <RankingScreen />
                         </PhoneFrame>
                         {/* Floating Badges */}
                         <div className="absolute top-20 -left-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600"><Trophy size={20} /></div>
                            <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase">New Rank</p>
                                <p className="text-sm font-bold text-gray-900">Top 10!</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Forum */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/50 to-purple-50/50 rounded-full blur-3xl transform scale-90"></div>
                     <div className="relative transform transition-transform duration-700 hover:scale-[1.02]">
                         <PhoneFrame className="transform rotate-2 shadow-2xl" statusBar="dark">
                            <ForumScreen />
                         </PhoneFrame>
                         {/* Decorative Bubbles */}
                         <div className="absolute top-1/3 -right-8 bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-xl border border-gray-100 max-w-[180px] hidden md:block">
                            <p className="text-xs font-medium text-gray-700">Can someone explain supply elasticity? 🤔</p>
                         </div>
                         <div className="absolute bottom-1/3 -left-8 bg-blue-600 px-4 py-3 rounded-2xl rounded-tr-none shadow-xl max-w-[180px] hidden md:block">
                            <p className="text-xs font-medium text-white">Sure! It basically measures responsiveness... 💡</p>
                         </div>
                     </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-semibold border border-indigo-100">
                        <MessageCircle size={16} />
                        <span>Community</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Interactive Community Forum
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Students are allowed to discuss, academic exchange or share whatever they like in the forum page. Connect with peers, ask questions, and help others to build a supportive learning environment.
                    </p>
                    
                    <div className="pt-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Trending Topics</h4>
                        <div className="flex flex-wrap gap-3">
                            {['#AcademicExchange', '#StudyTips', '#DSE2025', '#PastPapers', '#Motivation'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};