'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import { callPhoneNumber, whatsappMessage, getDirections } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from(formRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from(infoRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const message = `New inquiry from ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    whatsappMessage('+919842293927', message);

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen textured-bg">
      {/* Hero Section */}
      <div className="bg-brown-800 text-beige-50 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-beige-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-clay-400 rounded-full blur-3xl"></div>
        </div>

        <div ref={headerRef} className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl sm:text-6xl font-semibold mb-6">Get In Touch</h1>
            <div className="w-16 h-0.5 bg-beige-300 mx-auto mb-6"></div>
            <p className="text-xl text-beige-200">
              Have questions about our products or wholesale pricing? We're here to help!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="elevated-surface rounded-2xl shadow-soft-lg p-8">
            <h2 className="font-display text-3xl font-semibold text-brown-900 mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-clay-50 border-2 border-clay-200 rounded-xl p-4 mb-6 animate-slide-down">
                <p className="text-clay-800 font-semibold">✓ Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brown-800 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-beige-300 rounded-xl focus:border-brown-700 focus:outline-none transition-colors bg-beige-50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brown-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-beige-300 rounded-xl focus:border-brown-700 focus:outline-none transition-colors bg-beige-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brown-800 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-beige-300 rounded-xl focus:border-brown-700 focus:outline-none transition-colors bg-beige-50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brown-800 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-beige-300 rounded-xl focus:border-brown-700 focus:outline-none transition-colors resize-none bg-beige-50"
                  placeholder="Tell us about your wholesale requirements..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                icon={<Send className="w-5 h-5" />}
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </div>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            {/* Quick Contact */}
            <div className="elevated-surface rounded-2xl shadow-soft-lg p-8">
              <h3 className="font-display text-2xl font-semibold text-brown-900 mb-6">Quick Contact</h3>
              
              <div className="space-y-6">
                <button
                  onClick={() => callPhoneNumber('+919842293927')}
                  className="flex items-start gap-4 p-4 bg-beige-100 rounded-xl hover:shadow-matte transition-all w-full text-left group border border-beige-200"
                >
                  <div className="w-12 h-12 bg-brown-800 rounded-xl flex items-center justify-center text-beige-50 flex-shrink-0 group-hover:scale-105 transition-transform shadow-matte">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-900 mb-1">Phone</div>
                    <div className="text-brown-700 font-bold">+91 98422 93927</div>
                    <div className="text-sm text-brown-600 mt-1">Call for immediate assistance</div>
                  </div>
                </button>

                <button
                  onClick={() => whatsappMessage('+919842293927', 'Hi, I have a query about your products.')}
                  className="flex items-start gap-4 p-4 bg-clay-50 rounded-xl hover:shadow-matte transition-all w-full text-left group border border-clay-200"
                >
                  <div className="w-12 h-12 bg-clay-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform shadow-matte">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-900 mb-1">WhatsApp</div>
                    <div className="text-clay-700 font-bold">+91 98422 93927</div>
                    <div className="text-sm text-brown-600 mt-1">Chat with us instantly</div>
                  </div>
                </button>

                <div className="flex items-start gap-4 p-4 bg-beige-100 rounded-xl border border-beige-200">
                  <div className="w-12 h-12 bg-brown-700 rounded-xl flex items-center justify-center text-beige-50 flex-shrink-0 shadow-matte">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-900 mb-1">Email</div>
                    <a href="mailto:info@jvmdates.com" className="text-brown-700 font-bold hover:text-brown-900 transition-colors">
                      info@jvmdates.com
                    </a>
                    <div className="text-sm text-brown-600 mt-1">Send us an email</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="elevated-surface rounded-2xl shadow-soft-lg p-8">
              <h3 className="font-display text-2xl font-semibold text-brown-900 mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                <button
                  onClick={() => getDirections('24, Periya Thambi Nagar, Selvapuram, Coimbatore, Tamil Nadu 641026')}
                  className="flex items-start gap-4 p-4 bg-beige-100 rounded-xl hover:shadow-matte transition-all w-full text-left group border border-beige-200"
                >
                  <div className="w-12 h-12 bg-brown-800 rounded-xl flex items-center justify-center text-beige-50 flex-shrink-0 group-hover:scale-105 transition-transform shadow-matte">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-900 mb-1">Address</div>
                    <div className="text-brown-700">
                      24, Periya Thambi Nagar,<br />
                      Selvapuram South, Selvapuram,<br />
                      Coimbatore, Tamil Nadu - 641026
                    </div>
                    <div className="text-sm text-brown-700 mt-2 font-semibold">Get Directions →</div>
                  </div>
                </button>

                <div className="flex items-start gap-4 p-4 bg-beige-100 rounded-xl border border-beige-200">
                  <div className="w-12 h-12 bg-clay-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-matte">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brown-900 mb-3">Business Hours</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-brown-600">Monday - Saturday</span>
                        <span className="font-semibold text-brown-900">10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brown-600">Sunday</span>
                        <span className="font-semibold text-red-700">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}