'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Star } from 'lucide-react';
import { callPhoneNumber, getDirections } from '@/lib/utils';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/jvmdates' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/jvmdates' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/jvmdates' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-beige-50 relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-beige-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-clay-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brown-700 rounded-lg flex items-center justify-center text-beige-50 font-bold text-xl shadow-matte">
                JVM
              </div>
              <div>
                <div className="font-display text-2xl font-semibold">JVM Dates</div>
                <div className="text-clay-400 text-sm font-medium">Premium Quality</div>
              </div>
            </div>
            <p className="text-beige-300 text-sm leading-relaxed">
              Your trusted wholesaler for premium quality dry fruits, dates, and nuts in Coimbatore. 
              Building relationships through quality and trust since 2020.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-clay-400 text-clay-400" />
                ))}
              </div>
              <span className="text-sm text-beige-300">(5.0 Rating)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-beige-100">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beige-300 hover:text-beige-50 transition-colors duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1 h-1 bg-clay-500 rounded-full group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-beige-100">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => callPhoneNumber('+919842293927')}
                  className="flex items-start gap-3 text-beige-300 hover:text-beige-50 transition-colors duration-300 group text-sm"
                >
                  <Phone className="w-4 h-4 text-clay-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>+91 98422 93927</span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@jvmdates.com"
                  className="flex items-start gap-3 text-beige-300 hover:text-beige-50 transition-colors duration-300 group text-sm"
                >
                  <Mail className="w-4 h-4 text-clay-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>info@jvmdates.com</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => getDirections('24, Periya Thambi Nagar, Selvapuram, Coimbatore, Tamil Nadu 641026')}
                  className="flex items-start gap-3 text-beige-300 hover:text-beige-50 transition-colors duration-300 group text-left text-sm"
                >
                  <MapPin className="w-4 h-4 text-clay-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    24, Periya Thambi Nagar,<br />
                    Selvapuram, Coimbatore<br />
                    Tamil Nadu - 641026
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-beige-100">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-beige-400">Monday - Saturday</span>
                <span className="text-beige-50 font-medium">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-beige-400">Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-beige-200 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brown-800 hover:bg-clay-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-beige-400 group-hover:text-beige-50 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-beige-400">
          <p>© {currentYear} JVM Dates. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-beige-50 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p>
            Made with <span className="text-clay-500">❤</span> in Coimbatore
          </p>
        </div>
      </div>
    </footer>
  );
}