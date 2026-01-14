'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import { callPhoneNumber } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title animation - word by word
      if (titleRef.current) {
        const words = titleRef.current.textContent?.split(' ') || [];
        titleRef.current.innerHTML = words
          .map((word) => `<span class="inline-block mr-4">${word}</span>`)
          .join('');

        tl.from(titleRef.current.children, {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.1,
          duration: 1,
        });
      }

      // Subtitle animation
      tl.from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5'
      );

      // CTA buttons
      tl.from(
        ctaRef.current?.children || [],
        {
          y: 20,
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
        },
        '-=0.4'
      );

      // Stats animation
      tl.from(
        statsRef.current?.children || [],
        {
          scale: 0.8,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        },
        '-=0.3'
      );

      // Floating elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-beige-50 via-white to-beige-50"
    >
      {/* Subtle Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="float-element absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-beige-200 to-clay-200 rounded-full blur-3xl opacity-30"></div>
        <div className="float-element absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-clay-200 to-beige-300 rounded-full blur-3xl opacity-25" style={{ animationDelay: '1s' }}></div>
        <div className="float-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-beige-200 to-brown-100 rounded-full blur-3xl opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 grid-lines opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft mb-8 border border-beige-200">
            <Sparkles className="w-4 h-4 text-clay-600" />
            <span className="text-sm font-semibold text-brown-900">Premium Quality Since 2020</span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-brown-900 leading-none tracking-tight"
            style={{ perspective: '1000px' }}
          >
            Premium Dates & Dry Fruits
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-brown-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your trusted wholesale partner in Coimbatore. Quality sourcing, competitive pricing, satisfaction guaranteed.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              variant="cta"
              size="xl"
              icon={<Phone className="w-5 h-5" />}
              onClick={() => callPhoneNumber('+919842293927')}
              className="group"
            >
              <span>Order Wholesale</span>
            </Button>
            <Button
              variant="outline"
              size="xl"
              icon={<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              onClick={() => (window.location.href = '/products')}
              className="group"
            >
              <span>Explore Products</span>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: '15+', label: 'Premium Products' },
              { value: '500+', label: 'Happy Customers' },
              { value: '100%', label: 'Quality Assured' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl sm:text-5xl font-bold text-brown-900 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-brown-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-brown-700 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-brown-700 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}