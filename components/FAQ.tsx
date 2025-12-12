import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is StudyX completely free?",
    answer: "Yes! StudyX is free to download and use. We believe every student in Hong Kong deserves access to high-quality study resources regardless of their background."
  },
  {
    question: "What subjects does StudyX cover?",
    answer: "We currently cover a wide range of HKDSE subjects including Mathematics, English, Chinese, Economics, Chemistry and Biology. We are constantly adding more questions and subjects. Stay tuned!"
  },
  {
    question: "Is the app available on iOS and Android?",
    answer: "Yes, StudyX is available for download on both the Apple App Store and Google Play Store. It is optimized for both phone and tablet devices."
  },
  {
    question: "How does the gamification system work?",
    answer: "You earn XP (Experience Points) for every correct answer. As you gain XP, you level up, unlock badges, and climb the leaderboard. Maintaining a daily streak also grants bonus rewards! Plus, with Friend Streaks, you can partner with friends to study together—keep your shared streak alive to boost motivation."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl mb-4">
             <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0 ml-4" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0 ml-4" size={20} />
                )}
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};