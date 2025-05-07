import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'John is an exceptional developer who consistently delivered high-quality work on our project. His attention to detail and problem-solving skills were invaluable to our team.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupX',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Working with John was a pleasure. He not only delivered on technical requirements but also contributed valuable insights that improved our product significantly.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'CreativeStudio',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'John has an exceptional ability to translate design concepts into flawless code. His collaborative approach and technical expertise made our project a success.'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's what people have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-8 md:p-12 shadow-lg">
            <Quote size={48} className="absolute top-8 left-8 text-blue-200 dark:text-blue-900 opacity-50" />
            
            <div className="relative z-10">
              <div className="mb-8 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed italic animate-fadeIn">
                "{currentTestimonial.text}"
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-bold">{currentTestimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{currentTestimonial.role}, {currentTestimonial.company}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button 
                onClick={goToPrevious}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;