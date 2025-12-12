import React from 'react';

const testimonials = [
  {
    name: "Albert Einstein",
    role: "Physics Enthusiast",
    content: "Physics 5** is easy with StudyX! The logic flow in the explanations helps me understand the 'why' behind every answer.",
    image: "https://picsum.photos/seed/einstein/100"
  },
  {
    name: "Confucius",
    role: "Chinese Literature Master",
    content: "Learning without thought is labor lost; thought without learning is perilous. StudyX combines both beautifully.",
    image: "https://picsum.photos/seed/confucius/100"
  },
  {
    name: "Adam Smith",
    role: "Economics Student",
    content: "The supply and demand of quality study materials is finally balanced. This app maximizes my utility function perfectly.",
    image: "https://picsum.photos/seed/adam/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Loved by Students (and Legends)</h2>
          <p className="mt-4 text-xl text-gray-600">Join a community of learners dedicated to excellence.</p>
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