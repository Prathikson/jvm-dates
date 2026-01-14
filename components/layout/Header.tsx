'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin, Star } from 'lucide-react';
import { cn, callPhoneNumber } from '@/lib/utils';
import Button from '@/components/ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-beige-50/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      {/* Top Bar - Only visible when not scrolled */}
      {!isScrolled && (
        <div className="bg-brown-800 text-beige-50 py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-clay-400 text-clay-400" />
                  <span className="font-medium">5.0 Rating</span>
                </div>
                <span className="hidden sm:inline text-beige-300">•</span>
                <div className="hidden sm:flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Selvapuram, Coimbatore</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+919842293927" className="hover:text-clay-300 transition-colors">
                  +91 98422 93927
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className={cn(
        "container mx-auto px-4 transition-all duration-500",
        isScrolled ? "py-3" : "py-4"
      )}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-brown-800 rounded-lg flex items-center justify-center text-beige-50 font-bold text-lg shadow-matte group-hover:shadow-matte-lg transition-all group-hover:scale-105">
              JVM
            </div>
            <div className="hidden sm:block">
              <div className={cn(
                'font-display text-2xl font-semibold transition-colors tracking-tight',
                isScrolled ? 'text-brown-900' : 'text-brown-900'
              )}>
                JVM Dates
              </div>
              <div className={cn(
                'text-xs font-medium transition-colors',
                isScrolled ? 'text-brown-600' : 'text-brown-700'
              )}>
                Premium Quality
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-medium text-base transition-all duration-300 relative py-2',
                  pathname === item.href
                    ? isScrolled
                      ? 'text-brown-800'
                      : 'text-beige-100'
                    : isScrolled
                    ? 'text-brown-600 hover:text-brown-800'
                    : 'text-beige-400 hover:text-white',
                  'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brown-700 after:transition-all after:duration-300',
                  pathname === item.href && 'after:w-full'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="cta"
              size="md"
              icon={<Phone className="w-4 h-4" />}
              onClick={() => callPhoneNumber('+919842293927')}
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-brown-900 hover:bg-beige-100'
                : 'text-brown-900 hover:bg-beige-100/50'
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-beige-50 shadow-soft-lg rounded-b-2xl overflow-hidden animate-slide-down">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block py-3 px-4 rounded-lg font-medium text-base transition-all',
                    pathname === item.href
                      ? 'bg-beige-200 text-brown-900'
                      : 'text-brown-700 hover:bg-beige-100'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="cta"
                size="lg"
                fullWidth
                icon={<Phone className="w-5 h-5" />}
                onClick={() => {
                  callPhoneNumber('+919842293927');
                  setIsMobileMenuOpen(false);
                }}
              >
                Call Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}