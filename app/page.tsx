'use client';

import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import WhyChoose from '@/components/home/WhyChoose';
import ProductsSection from '@/components/home/ProductsSection';
import Reviews from '@/components/home/Reviews';
import Button from '@/components/ui/Button';
import { Phone, ArrowRight } from 'lucide-react';
import { callPhoneNumber } from '@/lib/utils';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WhyChoose />
      <ProductsSection />
      <Reviews />

      {/* CTA Section */}
      <section className="py-24 bg-brown-800 text-beige-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-beige-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-clay-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Place Your Wholesale Order?
            </h2>
            <p className="text-xl mb-8 text-beige-200">
              Contact us today for competitive pricing and premium quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                icon={<Phone className="w-5 h-5" />}
                onClick={() => callPhoneNumber('+919842293927')}
              >
                Call: +91 98422 93927
              </Button>
              <button
                onClick={() => (window.location.href = '/contact')}
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-xl gap-3 border-2 border-beige-300 text-beige-50 hover:bg-beige-50/10 transition-all duration-400"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}