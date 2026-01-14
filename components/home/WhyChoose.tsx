'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Package, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Award,
    title: '5-Star Google Rating',
    description: 'Trusted by customers with consistent 5-star reviews for quality and service.',
  },
  {
    icon: Package,
    title: 'Premium Quality',
    description: 'Hand-picked products meeting the highest quality standards for your business.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Best wholesale rates in Coimbatore without compromising on quality.',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Building long-term relationships through trust, quality, and dedication.',
  },
];

export default function WhyChoose() {
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

      // Feature cards animation
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-beige-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-clay-100 to-beige-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-beige-200 to-brown-100 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-brown-700 font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="font-bold text-4xl sm:text-5xl text-brown-900 mt-4 mb-6 tracking-tight">
            Your Trusted <span className="gradient-text">Partner</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-brown-400 to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Quality, reliability, and competitive wholesale pricing for your business success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card bg-white rounded-2xl p-8 text-center group hover:shadow-soft border border-beige-200 hover:border-brown-400"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-brown-800 rounded-2xl flex items-center justify-center shadow-matte group-hover:shadow-matte-lg transition-all group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="w-8 h-8 text-beige-50" />
                </div>
                <h3 className="font-semibold text-xl text-brown-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-brown-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}