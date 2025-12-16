import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

const translations = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact Us',
    'nav.download': 'Download App',
    
    // Hero
    'hero.badge': '#1 Education App for HKDSE',
    'hero.title.start': 'Seize every moment to',
    'hero.title.end': 'study & practice.',
    'hero.subtitle': 'The exam-oriented companion for Hong Kong students. Master your subjects with gamified quizzes, community support, and detailed analytics.',
    'hero.earlyAccess.title': 'Android Early Access',
    'hero.earlyAccess.subtitle': 'Join our beta program today',
    'hero.tryNow': 'Try now!',

    // Features
    'features.why': 'Why Choose StudyX?',
    'features.title': 'Everything you need to',
    'features.title.highlight': 'ace the DSE',
    'features.subtitle': 'We combine proven learning techniques with habit-building gamification to make studying effective and addictive.',
    
    'feature.gamified.title': 'Gamified Learning',
    'feature.gamified.desc': "Earn XP, level up, and maintain streaks. Studying doesn't have to be boring.",
    'feature.subjects.title': 'All Major Subjects',
    'feature.subjects.desc': 'Comprehensive coverage for Math, English, Chinese, Economics, Physics, and more.',
    'feature.forum.title': 'Community Forum',
    'feature.forum.desc': 'Stuck on a question? Ask the community and get detailed explanations instantly.',
    'feature.exam.title': 'Exam-Oriented',
    'feature.exam.desc': 'Questions modeled after real HKDSE papers to ensure you are exam-ready.',

    'section.subjects.badge': 'Smart Learning',
    'section.subjects.title': 'Personalized Subject Dashboard',
    'section.subjects.desc': 'Customize your learning path. Select the subjects you are taking and get daily missions tailored to your weak spots. Track your progress with detailed stats for every subject.',
    'section.subjects.list1': 'Daily Missions to keep you on track',
    'section.subjects.list2': 'Unlock extra XP for consistency',
    'section.subjects.list3': 'Over 15,000+ practice questions',

    'section.ranking.badge': 'Leaderboard',
    'section.ranking.title': 'Compete with Friends',
    'section.ranking.desc': 'Join the leaderboard and see where you stand among peers in Hong Kong. Challenge friends, earn badges, and stay motivated by seeing your name climb the ranks.',
    'section.ranking.streak.title': 'New: Friend Streaks 🔥',
    'section.ranking.streak.desc': 'Team up with a friend to maintain a shared study streak. Keep each other accountable—if one misses a day, you both lose the streak!',
    'section.ranking.quote': 'The competition makes me want to study just 10 more minutes every night! It\'s actually fun.',

    'section.forum.badge': 'Community',
    'section.forum.title': 'Interactive Community Forum',
    'section.forum.desc': 'Students are allowed to discuss, academic exchange or share whatever they like in the forum page. Connect with peers, ask questions, and help others to build a supportive learning environment.',
    'section.forum.trending': 'Trending Topics',

    // Testimonials
    'testimonials.title': 'Loved by Students (and Legends)',
    'testimonials.subtitle': 'Join a community of learners dedicated to excellence.',
    'testimonial.1.role': 'Physics Enthusiast',
    'testimonial.1.content': "Physics 5** is easy with StudyX! The logic flow in the explanations helps me understand the 'why' behind every answer.",
    'testimonial.2.role': 'Chinese Literature Master',
    'testimonial.2.content': "Learning without thought is labor lost; thought without learning is perilous. StudyX combines both beautifully.",
    'testimonial.3.role': 'Economics Student',
    'testimonial.3.content': "The supply and demand of quality study materials is finally balanced. This app maximizes my utility function perfectly.",

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': "Got questions? We've got answers.",
    'faq.q1': 'Is StudyX completely free?',
    'faq.a1': 'Yes! StudyX is free to download and use. We believe every student in Hong Kong deserves access to high-quality study resources regardless of their background.',
    'faq.q2': 'What subjects does StudyX cover?',
    'faq.a2': 'We currently cover a wide range of HKDSE subjects including Mathematics, English, Chinese, Economics, Chemistry and Biology. We are constantly adding more questions and subjects. Stay tuned!',
    'faq.q3': 'Which platforms does StudyX support?',
    'faq.a3': 'StudyX is currently available for Android via our Early Access program. You can join the beta to start studying today! The iOS version is currently in development and will be released soon.',
    'faq.q4': 'How does the gamification system work?',
    'faq.a4': 'You earn XP (Experience Points) for every correct answer. As you gain XP, you level up, unlock badges, and climb the leaderboard. Maintaining a daily streak also grants bonus rewards! Plus, with Friend Streaks, you can partner with friends to study together—keep your shared streak alive to boost motivation.',

    // CTA
    'cta.title': 'Ready to improve your grades?',
    'cta.subtitle': 'Download StudyX today and start your journey to 5** success. Join the community of top scorers now.',
    'cta.googleplay': 'Google Play',
    'cta.appstore': 'App Store',
    'cta.getit': 'Get it on',
    'cta.downloadon': 'Download on the',
    'cta.free': 'Free Forever',
    'cta.noads': 'No Ads',

    // Footer
    'footer.desc': 'Empowering Hong Kong students to achieve their academic dreams through technology and community.',
    'footer.product': 'Product',
    'footer.contact': 'Contact us',
    'footer.rights': 'StudyX. All rights reserved. Made with ❤️ in Hong Kong.',

    // Coming Soon
    'coming.title': 'Coming Soon!',
    'coming.desc': "We're putting the finishing touches on StudyX. Get ready to revolutionize your HKDSE prep.",
    'coming.contact': 'Contact us for early access',
    'coming.email': 'Email Support',
    'coming.return': 'Return to Homepage',

    // Contact Us
    'contact.badge': 'Support Center',
    'contact.title': 'Contact Us',
    'contact.subtitle': "We're here to help you ace your DSE. Reach out anytime.",
    'contact.whatsapp.desc': 'Instant messaging support',
    'contact.email.desc': 'General inquiries & support',
    'contact.response': 'Typical response time: Within 24 hours',
    'contact.back': 'Back to Home',
  },
  zh: {
    // Navbar
    'nav.features': '功能特色',
    'nav.resources': '學習資源',
    'nav.contact': '聯絡我們',
    'nav.download': '下載 App',
    
    // Hero
    'hero.badge': '全港 No.1 DSE 學習 App',
    'hero.title.start': '善用每分每秒',
    'hero.title.end': '學習與練習',
    'hero.subtitle': '專為香港學生打造的溫習神器。透過遊戲化體驗、論壇互助和詳細數據分析，助你輕鬆準備DSE。',
    'hero.earlyAccess.title': 'Android 搶先體驗',
    'hero.earlyAccess.subtitle': '立即加入 Beta 計劃',
    'hero.tryNow': '立即試用！',

    // Features
    'features.why': '為什麼選擇 StudyX？',
    'features.title': '助你 DSE 奪星的',
    'features.title.highlight': '必備神器',
    'features.subtitle': '我們結合了高效的學習技巧與遊戲化機制，讓溫習變得有效又令人上癮。',
    
    'feature.gamified.title': '遊戲化學習',
    'feature.gamified.desc': "賺取 XP、升級並保持連勝紀錄。溫書從此不再枯燥。",
    'feature.subjects.title': '涵蓋主要科目',
    'feature.subjects.desc': '全面覆蓋數學、英文、中文、經濟、物理等多個學科。',
    'feature.forum.title': '學術討論區',
    'feature.forum.desc': '遇到難題？在討論區發問，即時獲得詳細解答。',
    'feature.exam.title': '考試導向',
    'feature.exam.desc': '題目參考歷屆 DSE 試卷編寫，確保你隨時保持實戰狀態。',

    'section.subjects.badge': '智能學習',
    'section.subjects.title': '個人化學習體驗',
    'section.subjects.desc': '自訂你的學習路徑。選擇修讀科目，獲取針對弱項的每日任務。透過詳細數據追蹤每個科目的進度。',
    'section.subjects.list1': '每日任務助你保持進度',
    'section.subjects.list2': '保持連續學習解鎖額外 XP',
    'section.subjects.list3': '超過 15,000 條練習題目',

    'section.ranking.badge': '排行榜',
    'section.ranking.title': '與朋友一較高下',
    'section.ranking.desc': '加入排行榜，看看你在全港學生中的排名。挑戰朋友，贏取徽章，看著名次上升更有動力。',
    'section.ranking.streak.title': '新功能：朋友連勝 🔥',
    'section.ranking.streak.desc': '與朋友組隊維持共同的學習連勝紀錄。互相督促——只要一人偷懶，兩人都會失去連勝紀錄！',
    'section.ranking.quote': '這種競爭感讓我想每晚多溫 10 分鐘書！真的很有趣。',

    'section.forum.badge': '社區',
    'section.forum.title': '互動學習社區',
    'section.forum.desc': '學生可以在討論區自由討論、進行學術交流或分享生活。結識同路人，互相發問與解答，建立互助學習圈子。',
    'section.forum.trending': '熱門話題',

    // Testimonials
    'testimonials.title': '學生（與傳奇人物）一致好評',
    'testimonials.subtitle': '加入追求卓越的學習社群。',
    'testimonial.1.role': '物理愛好者',
    'testimonial.1.content': "StudyX 讓物理奪 5** 變得簡單！解釋中的邏輯推演幫助我理解每個答案背後的「為什麼」。",
    'testimonial.2.role': '中國文學大師',
    'testimonial.2.content': "學而不思則罔，思而不學則殆。StudyX 完美結合了兩者。",
    'testimonial.3.role': '經濟系學生',
    'testimonial.3.content': "優質學習材料的供求終於平衡了。這個 App 完美最大化了我的效用函數。",

    // FAQ
    'faq.title': '常見問題',
    'faq.subtitle': "有疑問？我們有答案。",
    'faq.q1': 'StudyX 是完全免費的嗎？',
    'faq.a1': '是的！StudyX 可以免費下載及使用。我們相信每位香港學生，無論背景如何，都應享有高質素的學習資源。',
    'faq.q2': 'StudyX 涵蓋哪些科目？',
    'faq.a2': '我們目前涵蓋多個 HKDSE 科目，包括數學、英文、中文、經濟、化學和生物。我們會持續新增更多題目和科目，敬請期待！',
    'faq.q3': 'StudyX 支援哪些平台？',
    'faq.a3': 'StudyX 目前透過 Early Access 計劃在 Android 平台上架。你可以立即加入 Beta 計劃開始學習！iOS 版本正在開發中，即將推出。',
    'faq.q4': '遊戲化系統是如何運作的？',
    'faq.a4': '每答對一題，你都會獲得 XP（經驗值）。隨著 XP 增加，你可以升級、解鎖徽章並攀升排行榜。保持每日登入連勝也會獲得額外獎勵！此外，透過「朋友連勝」，你可以與朋友組隊一起溫習——保持共同連勝以提升動力。',

    // CTA
    'cta.title': '準備好提升成績了嗎？',
    'cta.subtitle': '立即下載 StudyX，展開你的 5** 之旅。現在就加入高分學生的行列。',
    'cta.googleplay': 'Google Play',
    'cta.appstore': 'App Store',
    'cta.getit': '下載於',
    'cta.downloadon': '下載於',
    'cta.free': '永久免費',
    'cta.noads': '無廣告',

    // Footer
    'footer.desc': '透過科技與學習社群，協助香港學生實現學業夢想。',
    'footer.product': '產品',
    'footer.contact': '聯絡我們',
    'footer.rights': 'StudyX. 版權所有. Made with ❤️ in Hong Kong.',

    // Coming Soon
    'coming.title': '即將推出！',
    'coming.desc': "我們正在為 StudyX 進行最後的更新。準備好徹底改變你的 DSE 備戰方式。",
    'coming.contact': '聯絡我們獲取優先體驗',
    'coming.email': '電郵',
    'coming.return': '返回首頁',

    // Contact Us
    'contact.badge': '支援中心',
    'contact.title': '聯絡我們',
    'contact.subtitle': "我們在此協助你在 DSE 取得佳績。隨時聯絡我們。",
    'contact.whatsapp.desc': '即時訊息支援',
    'contact.email.desc': '一般查詢與支援',
    'contact.response': '一般回覆時間：24 小時內',
    'contact.back': '返回首頁',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
