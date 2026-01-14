'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Heart, Shield, TrendingUp, Users, Package, Star, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { callPhoneNumber } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality. Every product is carefully selected and inspected.',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We build lasting relationships through trust.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from sourcing to delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Fair Pricing',
    description: 'Competitive wholesale prices that help your business grow and succeed.',
  },
];

const achievements = [
  { number: '2020', label: 'Established' },
  { number: '500+', label: 'Happy Customers' },
  { number: '15+', label: 'Premium Products' },
  { number: '5.0', label: 'Google Rating', icon: Star },
];

export default function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from(valuesRef.current?.querySelectorAll('.value-card') || [], {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });

      gsap.from(achievementsRef.current?.children || [], {
        scrollTrigger: {
          trigger: achievementsRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gold-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        </div>

        <div ref={headerRef} className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              About Us
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
              Your Trusted Partner in Quality
            </h1>
            <p className="text-xl text-white/90">
              Providing Coimbatore with premium dry fruits, dates, and nuts since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div ref={contentRef} className="max-w-4xl mx-auto space-y-12 mb-20">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold text-dark-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-dark-700 leading-relaxed">
              <p>
                JVM Dates was founded in 2020 with a simple mission: to provide the people of Coimbatore with access to premium quality dry fruits, dates, and nuts at competitive wholesale prices. What started as a small venture has grown into one of the most trusted names in the wholesale dry fruits industry in the region.
              </p>
              <p>
                Located in Selvapuram, we have built our reputation on three fundamental pillars: quality sourcing, customer satisfaction, and fair pricing. We understand that for wholesale buyers—whether you're a shop owner, trader, or bulk buyer—consistency and reliability matter most.
              </p>
              <p>
                Our commitment to excellence has earned us a 5-star rating from our customers. We carefully select every product we offer, ensuring only the finest reaches our customers. From premium Medjool and Ajwa dates to high-quality almonds and cashews, every item in our inventory meets the highest standards of quality and freshness.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold text-dark-900 mb-6">What Sets Us Apart</h2>
            <ul className="space-y-4">
              {[
                'Hand-picked, premium grade products from trusted suppliers',
                'Competitive wholesale pricing without compromising quality',
                'Consistent supply and timely delivery to keep your business running',
                'Dedicated customer service and personalized attention',
                'Extensive product knowledge to help you make informed decisions',
                'Flexible ordering options for businesses of all sizes',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-dark-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Values */}
        <div ref={valuesRef} className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="value-card premium-card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-dark-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div ref={achievementsRef} className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-white mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                  {achievement.number}
                  {achievement.icon && <achievement.icon className="w-8 h-8 fill-gold-400 text-gold-400" />}
                </div>
                <div className="text-white/80 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-4">
              Join Our Family of Satisfied Customers
            </h2>
            <p className="text-lg text-dark-600 mb-8">
              Experience the JVM Dates difference. Quality products, competitive prices, and service you can trust.
            </p>
            <Button
              variant="cta"
              size="xl"
              onClick={() => callPhoneNumber('+919842293927')}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}