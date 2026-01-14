'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Shield, TrendingUp, Users, Package, Star, CheckCircle, Sparkles, Zap } from 'lucide-react';

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
  const [hoveredValue, setHoveredValue] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    story: false,
    values: false,
    achievements: false,
    cta: false
  });

  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const checkVisibility = (ref, key) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [key]: isInView }));
        }
      };

      checkVisibility(heroRef, 'hero');
      checkVisibility(storyRef, 'story');
      checkVisibility(valuesRef, 'values');
      checkVisibility(achievementsRef, 'achievements');
      checkVisibility(ctaRef, 'cta');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(prev => ({ ...prev, hero: true }));
  }, []);

  return (
    <div className="min-h-screen bg-beige-50 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-brown-200/20 rounded-full blur-xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-clay-200/20 rounded-full blur-xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-brown-300/20 rounded-full blur-xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brown-600 via-brown-700 to-clay-700 text-white py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-beige-100 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-clay-400 rounded-full blur-3xl pulse-subtle" />
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-brown-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div 
          ref={heroRef}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span 
              className={`inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/15 transition-all duration-500 border border-white/20 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Sparkles className="inline w-4 h-4 mr-2 -mt-1" />
              About Us
            </span>
            <h1 
              className={`font-display text-5xl sm:text-6xl font-bold transition-all duration-700 delay-150 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Your Trusted Partner in Quality
            </h1>
            <p 
              className={`text-xl text-beige-100 transition-all duration-700 delay-300 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Providing Coimbatore with premium dry fruits, dates, and nuts since 2000
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Story Section with Image */}
        <div ref={storyRef} className="max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`space-y-8 transition-all duration-1000 ${
                isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div>
                <span className="inline-block bg-brown-100 text-brown-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-brown-200">
                  Our Journey
                </span>
                <h2 className="font-display text-4xl font-bold text-warm-800 mb-6">
                  Building Trust Since <span className="gradient-text">2020</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-warm-700 leading-relaxed">
                <p className="hover:text-brown-600 transition-colors duration-300 cursor-default">
                  JVM Dates was founded with a simple mission: to provide the people of Coimbatore with access to premium quality dry fruits, dates, and nuts at competitive wholesale prices.
                </p>
                <p className="hover:text-brown-600 transition-colors duration-300 cursor-default">
                  What started as a small venture has grown into one of the most trusted names in the wholesale dry fruits industry in the region, serving over 500+ happy customers.
                </p>
                <p className="hover:text-brown-600 transition-colors duration-300 cursor-default">
                  Our commitment to excellence has earned us a perfect 5-star rating. We carefully select every product, ensuring only the finest reaches our customers.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="premium-card p-6 rounded-2xl hover-lift cursor-pointer group">
                  <div className="text-3xl font-bold text-brown-600 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-sm text-warm-600 font-medium">Happy Customers</div>
                </div>
                <div className="premium-card p-6 rounded-2xl hover-lift cursor-pointer group">
                  <div className="text-3xl font-bold text-clay-600 group-hover:scale-110 transition-transform duration-300 flex items-center gap-1">
                    5.0<Star className="w-5 h-5 fill-clay-500 text-clay-500" />
                  </div>
                  <div className="text-sm text-warm-600 font-medium">Google Rating</div>
                </div>
              </div>
            </div>

            <div 
              className={`relative group transition-all duration-1000 delay-200 ${
                isVisible.story ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-90'
              }`}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brown-400/30 to-clay-400/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative textured-bg rounded-3xl p-8 shadow-matte-lg overflow-hidden border border-brown-200/30">
                <div className="aspect-square bg-gradient-to-br from-brown-200/50 to-clay-200/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(166, 112, 77, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 196, 176, 0.05) 0%, transparent 50%)'
                  }} />
                  <Package className="w-32 h-32 text-brown-400 opacity-60 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 glass-light rounded-xl p-4 border border-white/30">
                    <p className="text-sm font-semibold text-warm-800">Premium Quality Products</p>
                    <p className="text-xs text-warm-600">Hand-picked for excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="font-display text-4xl font-bold text-warm-900 mb-4">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            <p className="text-lg text-warm-600">
              Excellence in every aspect of our business
            </p>
          </div>

          <div className="premium-card rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-matte-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brown-100/50 to-clay-100/50 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <ul className="space-y-6 relative z-10">
              {[
                'Hand-picked, premium grade products from trusted suppliers',
                'Competitive wholesale pricing without compromising quality',
                'Consistent supply and timely delivery to keep your business running',
                'Dedicated customer service and personalized attention',
                'Extensive product knowledge to help you make informed decisions',
                'Flexible ordering options for businesses of all sizes',
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300 reveal"
                  style={{ 
                    animation: isVisible.story ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both` : 'none' 
                  }}
                >
                  <CheckCircle className="w-7 h-7 text-brown-500 flex-shrink-0 mt-1 group-hover:text-brown-600 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-lg text-warm-700 group-hover:text-brown-700 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Values */}
        <div ref={valuesRef} className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-warm-900 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`premium-card rounded-2xl p-8 text-center cursor-pointer relative overflow-hidden hover-lift transition-all duration-500 ${
                  isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${idx * 150}ms`,
                  transform: hoveredValue === idx ? 'translateY(-10px) scale(1.02)' : ''
                }}
                onMouseEnter={() => setHoveredValue(idx)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brown-500/5 to-clay-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brown-600 to-brown-500 rounded-2xl flex items-center justify-center shadow-matte group-hover:shadow-matte-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  <value.icon className="w-8 h-8 text-white" />
                  {hoveredValue === idx && (
                    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-clay-400 animate-pulse" />
                  )}
                </div>
                
                <h3 className="font-display text-xl font-bold text-warm-900 mb-3 relative z-10 group-hover:text-brown-700 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-warm-600 relative z-10 group-hover:text-warm-700 transition-colors duration-300">
                  {value.description}
                </p>

                {hoveredValue === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brown-500 to-clay-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div ref={achievementsRef} className="bg-gradient-to-br from-brown-600 via-brown-700 to-clay-700 rounded-3xl p-12 text-white mb-32 relative overflow-hidden shadow-matte-lg">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-beige-100 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-clay-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`text-center group cursor-pointer transition-all duration-500 hover-lift ${
                  isVisible.achievements ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-5xl font-bold mb-2 flex items-center justify-center gap-2 group-hover:text-clay-300 transition-all duration-300 group-hover:scale-110">
                  {achievement.icon ? (
                    <>
                      <span>{achievement.number}</span>
                      <achievement.icon className="w-8 h-8 fill-clay-400 text-clay-400 group-hover:rotate-12 transition-transform duration-300" />
                    </>
                  ) : (
                    <span>{achievement.number}</span>
                  )}
                </div>
                <div className="text-beige-100 font-medium group-hover:text-white transition-colors duration-300">
                  {achievement.label}
                </div>
                <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-clay-400 rounded-full group-hover:w-full w-0 transition-all duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`premium-card rounded-3xl shadow-matte-lg p-12 text-center relative overflow-hidden transition-all duration-1000 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brown-100 rounded-full blur-3xl opacity-30 -ml-48 -mt-48" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-clay-100 rounded-full blur-3xl opacity-30 -mr-48 -mb-48" />
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="mb-6 relative inline-block">
              <Users className="w-16 h-16 text-brown-600 mx-auto pulse-subtle" />
              <Zap className="absolute -top-2 -right-2 w-6 h-6 text-clay-500 animate-bounce" />
            </div>
            
            <h2 className="font-display text-4xl font-bold text-warm-900 mb-4">
              Join Our Family of Satisfied Customers
            </h2>
            <p className="text-lg text-warm-600 mb-8">
              Experience the JVM Dates difference. Quality products, competitive prices, and service you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button
                className="group relative overflow-hidden bg-gradient-to-r from-brown-600 to-brown-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-matte hover:shadow-matte-lg transition-all duration-300 hover-lift btn-shine"
                onClick={() => window.location.href = 'tel:+919842293927'}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-warm-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brown-500" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brown-500" />
                <span className="font-medium">Best Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brown-500" />
                <span className="font-medium">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}