'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { callPhoneNumber } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.animate-item') || [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24  bg-beige-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-clay-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-item mb-6">
            <span className="text-brown-700 font-semibold uppercase tracking-wider text-sm">About Us</span>
          </div>
          
          <h2 className="animate-item font-display text-4xl sm:text-5xl font-semibold text-brown-900 mb-6">
            Building Trust Through <span className="gradient-text">Quality</span>
          </h2>
          
          <div className="animate-item w-16 h-0.5 bg-gradient-to-r from-transparent via-brown-400 to-transparent mx-auto mb-8"></div>
          
          <p className="animate-item text-lg text-brown-700 leading-relaxed mb-8">
            At JVM Dates, we take pride in being one of Coimbatore's most trusted wholesalers for premium dry fruits, dates, and nuts. Located in Selvapuram, we have built our reputation on quality sourcing, customer satisfaction, and competitive wholesale pricing.
          </p>
          
          <p className="animate-item text-lg text-brown-600 leading-relaxed mb-12">
            Whether you're a shop owner, trader, or bulk buyer, JVM Dates is your reliable partner for all your dry fruits and dates needs. We open at 10:00 AM, ready to serve you with dedication and professionalism.
          </p>
          
          <div className="animate-item">
            <Button
              variant="primary"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
              onClick={() => callPhoneNumber('+919842293927')}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}