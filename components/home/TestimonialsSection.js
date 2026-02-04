'use client'

import { useState } from 'react'
import { FiStar } from 'react-icons/fi'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Digital Creator',
      content: 'ByteBond completely changed how I connect with my audience. The engagement is amazing and the community feels genuine!',
      avatar: 'AJ',
      rating: 5
    },
    {
      name: 'Sarah Miller',
      role: 'Marketing Manager',
      content: 'The best social platform for professional networking. ByteBond\'s interface is intuitive and the community is incredibly supportive.',
      avatar: 'SM',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Software Engineer',
      content: 'Finally a social media app that focuses on meaningful connections rather than just likes. ByteBond gets it right!',
      avatar: 'DC',
      rating: 5
    }
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by our community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what people are saying about their ByteBond experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-72">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : index < activeIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600 bg-blue-50 px-6 py-3 rounded-full">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-500">✓</span>
            </div>
            <span>Join <span className="font-semibold text-blue-500">10,000+</span> satisfied users on ByteBond</span>
          </div>
        </div>
      </div>
    </div>
  )
}