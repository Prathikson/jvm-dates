'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelectorAll('.product-item') || [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 textured-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brown-700 font-semibold uppercase tracking-wider text-sm">Our Products</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-brown-900 mt-4 mb-6">
            <span className="gradient-text">Premium</span> Quality Selection
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-brown-400 to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Hand-picked premium dates, dry fruits, and nuts at competitive wholesale prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.slice(0, 6).map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => (window.location.href = '/products')}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}