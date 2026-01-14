'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { products, categories, getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import { Search, Grid, List, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const productsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let result = getProductsByCategory(selectedCategory);

    if (searchTerm) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);

    // Animate products on filter change
    if (productsRef.current) {
      gsap.from(productsRef.current.children, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 via-white to-beige-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-clay-100 to-beige-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-gradient-to-br from-beige-200 to-brown-100 rounded-full blur-3xl opacity-15"></div>
      </div>

      {/* Header */}
      <div ref={headerRef} className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft mb-8 border border-beige-200">
              <Sparkles className="w-4 h-4 text-clay-600" />
              <span className="text-sm font-semibold text-brown-900">Premium Selection</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-brown-900 mb-6 tracking-tight">
              Our Products
            </h1>
            <p className="text-xl text-brown-600 mb-8">
              Discover our curated selection of premium dates, dry fruits, and nuts
            </p>
          </div>
        </div>
      </div>

      {/* Filters & View Toggle */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white rounded-2xl p-4 shadow-soft border border-beige-200">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-beige-200 rounded-xl focus:border-brown-700 focus:outline-none transition-colors bg-beige-50"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-brown-800 text-beige-50 shadow-matte'
                      : 'bg-beige-100 text-brown-800 hover:bg-beige-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-beige-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white shadow-matte'
                    : 'hover:bg-beige-200'
                }`}
                title="Grid View"
              >
                <Grid className="w-5 h-5 text-brown-800" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-white shadow-matte'
                    : 'hover:bg-beige-200'
                }`}
                title="List View"
              >
                <List className="w-5 h-5 text-brown-800" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <p className="text-brown-600">
                  Showing <span className="font-bold text-brown-900">{filteredProducts.length}</span> products
                </p>
              </div>
              <div
                ref={productsRef}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} view={viewMode} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-brown-600" />
              </div>
              <h3 className="text-2xl font-semibold text-brown-900 mb-3">
                No Products Found
              </h3>
              <p className="text-brown-600 mb-6">
                Try adjusting your search or filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-brown-700 font-semibold hover:text-brown-900 transition-colors underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}