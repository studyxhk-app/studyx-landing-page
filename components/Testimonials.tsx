import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Albert Einstein",
      role: t('testimonial.1.role'),
      content: t('testimonial.1.content'),
      image: "https://picsum.photos/seed/einstein/100"
    },
    {
      name: "Confucius",
      role: t('testimonial.2.role'),
      content: t('testimonial.2.content'),
      image: "https://picsum.photos/seed/confucius/100"
    },
    {
      name: "Adam Smith",
      role: t('testimonial.3.role'),
      content: t('testimonial.3.content'),
      image: "https://picsum.photos/seed/adam/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">{t('testimonials.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={`${t.name} - ${t.role}`}
                  loading="lazy"
                  width="56"
                  height="56"
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100" 
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-blue-600">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.content}"</p>
              <div className="mt-4 flex text-yellow-400">
                {'★★★★★'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};