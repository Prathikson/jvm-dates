'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Shop Owner',
    rating: 5,
    text: "It's really very good. Quality products and excellent service. Been buying from JVM Dates for my shop for over a year now.",
    avatar: 'RK',
  },
  {
    name: 'Priya Selvam',
    role: 'Trader',
    rating: 5,
    text: 'Best quality dry fruits in Coimbatore. Wholesale prices are very competitive. Highly recommended for traders!',
    avatar: 'PS',
  },
  {
    name: 'Mohammed Ali',
    role: 'Bulk Buyer',
    rating: 5,
    text: 'Excellent quality dates and nuts. Always fresh and premium grade. Great for bulk orders.',
    avatar: 'MA',
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Review cards animation
      gsap.from('.review-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0.9,
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-beige-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-clay-100 to-beige-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-beige-200 to-brown-100 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-brown-700 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="font-bold text-4xl sm:text-5xl text-brown-900 mt-4 mb-6 tracking-tight">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brown-400 to-transparent mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-clay-500 text-clay-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-brown-900">5.0</span>
            <span className="text-brown-600">• Based on 4 Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-white rounded-2xl p-8 border border-beige-200 hover:border-brown-400 hover:shadow-soft"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-clay-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-clay-500 text-clay-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-brown-700 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-beige-200">
                <div className="w-12 h-12 bg-brown-800 rounded-full flex items-center justify-center text-beige-50 font-semibold shadow-matte">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-brown-900">{review.name}</div>
                  <div className="text-sm text-brown-600">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}