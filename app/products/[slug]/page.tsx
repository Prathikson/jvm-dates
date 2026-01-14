'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Phone, Package, Star, CheckCircle, TrendingUp, Shield, Award } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/lib/products';
import { formatPrice, callPhoneNumber, whatsappMessage } from '@/lib/utils';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/components/ui/SEO';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      const ctx = gsap.context(() => {
        gsap.from(imageRef.current, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });

        gsap.from(contentRef.current?.children || [], {
          x: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        });
      });

      return () => ctx.revert();
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center textured-bg">
        <div className="text-center">
          <h1 className="text-4xl font-display font-semibold text-brown-900 mb-4">Product Not Found</h1>
          <p className="text-brown-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => (window.location.href = '/products')}>
            View All Products
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handlePlaceOrder = () => {
    const message = `Hi, I would like to order ${quantity} kg of ${product.name}. Please provide details.`;
    whatsappMessage('+919842293927', message);
  };

  const productSchema = generateProductJsonLd(product);
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: 'https://jvmdates.com' },
    { name: 'Products', url: 'https://jvmdates.com/products' },
    { name: product.name, url: `https://jvmdates.com/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="min-h-screen textured-bg">
        {/* Product Detail Section */}
        <div className="container mx-auto px-4 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image Gallery */}
            <div ref={imageRef}>
              <div className="sticky top-32">
                <div className="relative h-[500px] bg-beige-100 rounded-2xl overflow-hidden shadow-soft-lg mb-4">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {discount > 0 && (
                    <div className="absolute top-6 left-6 bg-brown-800 text-beige-50 px-4 py-2 rounded-full font-semibold shadow-matte">
                      {discount}% OFF
                    </div>
                  )}
                  {product.inStock ? (
                    <div className="absolute top-6 right-6 bg-beige-50 text-brown-800 px-4 py-2 rounded-full font-semibold shadow-matte flex items-center gap-2 border border-beige-200">
                      <Package className="w-4 h-4" />
                      In Stock
                    </div>
                  ) : (
                    <div className="absolute top-6 right-6 bg-warm-800 text-white px-4 py-2 rounded-full font-semibold shadow-matte">
                      Out of Stock
                    </div>
                  )}
                </div>
                {product.images.length > 1 && (
                  <div className="flex gap-3">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative h-24 flex-1 rounded-xl overflow-hidden transition-all ${
                          selectedImage === idx
                            ? 'ring-3 ring-brown-700 scale-105'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div ref={contentRef}>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-brown-700 uppercase tracking-wider">
                  {product.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-clay-500 text-clay-500" />
                  ))}
                  <span className="ml-2 text-brown-600">(5.0)</span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-brown-900 mb-4">
                {product.name}
              </h1>

              {/* Grade & Origin */}
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-beige-200 px-4 py-2 rounded-lg font-semibold text-brown-800 border border-beige-300">
                  {product.grade}
                </span>
                <span className="text-brown-600">Origin: {product.origin}</span>
              </div>

              {/* Description */}
              <p className="text-lg text-brown-700 leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Pricing */}
              <div className="elevated-surface rounded-2xl p-6 mb-8 shadow-soft">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-5xl font-display font-semibold gradient-text">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xl text-brown-600 mb-2">/ {product.unit}</span>
                </div>
                {product.originalPrice && (
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-brown-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-clay-100 text-clay-800 px-3 py-1 rounded-full text-sm font-semibold border border-clay-200">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </div>
                )}
              </div>

              {/* Quantity & CTA */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border-2 border-beige-300 rounded-xl overflow-hidden bg-beige-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-6 py-4 hover:bg-beige-100 transition-colors font-bold text-xl"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center font-bold text-xl py-4 focus:outline-none bg-transparent"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-6 py-4 hover:bg-beige-100 transition-colors font-bold text-xl"
                  >
                    +
                  </button>
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  fullWidth
                  icon={<Phone className="w-5 h-5" />}
                  onClick={handlePlaceOrder}
                  disabled={!product.inStock}
                >
                  Place Order ({quantity} {product.unit})
                </Button>
              </div>

              {product.inventory < 50 && product.inStock && (
                <div className="bg-clay-50 border-2 border-clay-200 rounded-xl p-4 mb-8">
                  <p className="text-clay-800 font-semibold">
                    ⚠️ Only {product.inventory} kg remaining - Order soon!
                  </p>
                </div>
              )}

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 elevated-surface rounded-xl shadow-matte">
                  <Shield className="w-8 h-8 text-brown-700 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-brown-700">Quality Assured</p>
                </div>
                <div className="text-center p-4 elevated-surface rounded-xl shadow-matte">
                  <Award className="w-8 h-8 text-clay-600 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-brown-700">Premium Grade</p>
                </div>
                <div className="text-center p-4 elevated-surface rounded-xl shadow-matte">
                  <TrendingUp className="w-8 h-8 text-clay-700 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-brown-700">Best Price</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-display text-2xl font-semibold text-brown-900 mb-4">Health Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-clay-600 flex-shrink-0 mt-0.5" />
                      <span className="text-brown-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Nutrition Facts */}
            <div className="elevated-surface rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-brown-900 mb-6">Nutrition Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-beige-200 pb-3">
                  <span className="font-semibold text-brown-700">Calories</span>
                  <span className="text-brown-900">{product.nutritionFacts.calories}</span>
                </div>
                <div className="flex justify-between border-b border-beige-200 pb-3">
                  <span className="font-semibold text-brown-700">Protein</span>
                  <span className="text-brown-900">{product.nutritionFacts.protein}</span>
                </div>
                <div className="flex justify-between border-b border-beige-200 pb-3">
                  <span className="font-semibold text-brown-700">Fiber</span>
                  <span className="text-brown-900">{product.nutritionFacts.fiber}</span>
                </div>
                <div className="pt-2">
                  <span className="font-semibold text-brown-700 block mb-2">Rich in:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.nutritionFacts.vitamins.map((vitamin, idx) => (
                      <span key={idx} className="bg-beige-200 px-3 py-1 rounded-full text-sm text-brown-800 border border-beige-300">
                        {vitamin}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="elevated-surface rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-brown-900 mb-6">Specifications</h3>
              <div className="space-y-4">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between border-b border-beige-200 pb-3">
                    <span className="font-semibold text-brown-700">{spec.label}</span>
                    <span className="text-brown-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-display text-3xl font-semibold text-brown-900 mb-8 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}