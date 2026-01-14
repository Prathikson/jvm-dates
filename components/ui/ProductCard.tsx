'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Phone, Star, ArrowRight } from 'lucide-react';
import { Product } from '@/lib/products';
import { formatPrice, callPhoneNumber } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  view?: 'grid' | 'table';
}

export default function ProductCard({ product, view = 'grid' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || view === 'table') return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, [view]);

  const handleQuickOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    callPhoneNumber('+919842293927');
  };

  if (view === 'table') {
    return (
      <Link href={`/products/${product.slug}`}>
        <div
          ref={cardRef}
          className="group flex items-center gap-6 p-4 bg-white rounded-2xl border border-beige-200 hover:border-brown-400 hover:shadow-soft transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image */}
          <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-beige-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-brown-900 mb-1 truncate group-hover:text-brown-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-brown-600 truncate">{product.grade}</p>
              </div>
              
              <div className="text-right flex-shrink-0">
                <div className="text-xl font-bold text-brown-900">
                  {formatPrice(product.price)}
                  <span className="text-sm font-normal text-brown-600">/{product.unit}</span>
                </div>
                {product.originalPrice && (
                  <div className="text-sm text-brown-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action */}
          <button
            onClick={handleQuickOrder}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-brown-800 text-beige-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </Link>
    );
  }

  // Grid View
  return (
    <Link href={`/products/${product.slug}`}>
      <div
        ref={cardRef}
        className="group relative bg-white rounded-2xl overflow-hidden border border-beige-200 hover:border-brown-400 hover:shadow-soft transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div ref={imageRef} className="relative h-64 overflow-hidden bg-beige-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badge */}
          {product.featured && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-brown-800/90 backdrop-blur-sm text-beige-50 text-xs font-semibold rounded-full">
              Featured
            </div>
          )}

          {/* Quick Order Button */}
          <button
            onClick={handleQuickOrder}
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-brown-800 text-beige-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-brown-600 uppercase tracking-wide">
              {product.category.replace('-', ' ')}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-clay-500 text-clay-500" />
              <span className="text-sm font-medium text-brown-700">5.0</span>
            </div>
          </div>

          {/* Name */}
          <h3 className="font-semibold text-lg text-brown-900 mb-3 line-clamp-1 group-hover:text-brown-700 transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-brown-900">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-brown-600">/{product.unit}</span>
              </div>
              {product.originalPrice && (
                <div className="text-sm text-brown-400 line-through mt-0.5">
                  {formatPrice(product.originalPrice)}
                </div>
              )}
            </div>

            <ArrowRight className="w-5 h-5 text-brown-700 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}