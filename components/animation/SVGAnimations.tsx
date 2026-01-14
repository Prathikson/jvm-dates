'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Falling Dates Animation
export function FallingDates() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const dates = containerRef.current.querySelectorAll('.date-item');
    
    dates.forEach((date, index) => {
      gsap.to(date, {
        y: '100vh',
        rotation: 360,
        opacity: 0,
        duration: 8 + Math.random() * 4,
        delay: index * 0.5,
        repeat: -1,
        ease: 'none',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="date-item absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: '-50px',
          }}
        >
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            <ellipse cx="15" cy="20" rx="12" ry="18" fill="#8a5a41" opacity="0.15"/>
            <ellipse cx="15" cy="20" rx="10" ry="16" fill="#a6704d" opacity="0.2"/>
          </svg>
        </div>
      ))}
    </div>
  );
}

// Palm Tree Animation
export function PalmTree({ className = '' }: { className?: string }) {
  const treeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!treeRef.current) return;

    const leaves = treeRef.current.querySelectorAll('.palm-leaf');
    
    gsap.to(leaves, {
      rotation: 5,
      transformOrigin: 'bottom center',
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 0.2,
    });
  }, []);

  return (
    <svg
      ref={treeRef}
      className={className}
      width="120"
      height="200"
      viewBox="0 0 120 200"
      fill="none"
    >
      {/* Trunk */}
      <path
        d="M55 200 Q50 150 52 100 Q54 50 50 0"
        stroke="#8a5a41"
        strokeWidth="8"
        fill="none"
        opacity="0.3"
      />
      
      {/* Palm Leaves */}
      <g className="palm-leaf">
        <path
          d="M50 20 Q30 10 10 15"
          stroke="#a6704d"
          strokeWidth="3"
          fill="none"
          opacity="0.25"
        />
      </g>
      <g className="palm-leaf">
        <path
          d="M50 20 Q70 10 90 15"
          stroke="#a6704d"
          strokeWidth="3"
          fill="none"
          opacity="0.25"
        />
      </g>
      <g className="palm-leaf">
        <path
          d="M50 15 Q45 0 40 -10"
          stroke="#a6704d"
          strokeWidth="3"
          fill="none"
          opacity="0.25"
        />
      </g>
      <g className="palm-leaf">
        <path
          d="M50 15 Q55 0 60 -10"
          stroke="#a6704d"
          strokeWidth="3"
          fill="none"
          opacity="0.25"
        />
      </g>
    </svg>
  );
}

// Animated Date Icon
export function AnimatedDateIcon({ delay = 0 }: { delay?: number }) {
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!iconRef.current) return;

    gsap.fromTo(
      iconRef.current,
      { scale: 0, opacity: 0, rotation: -180 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        delay,
        ease: 'back.out(1.7)',
      }
    );

    gsap.to(iconRef.current, {
      y: -5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, [delay]);

  return (
    <svg
      ref={iconRef}
      width="40"
      height="50"
      viewBox="0 0 40 50"
      fill="none"
      className="inline-block"
    >
      <ellipse cx="20" cy="25" rx="15" ry="22" fill="#a6704d" opacity="0.3"/>
      <ellipse cx="20" cy="25" rx="12" ry="18" fill="#8a5a41" opacity="0.4"/>
      <ellipse cx="20" cy="25" rx="8" ry="12" fill="#6f4a38" opacity="0.5"/>
    </svg>
  );
}

// Decorative Branch
export function DecorativeBranch({ position = 'left' }: { position?: 'left' | 'right' }) {
  const branchRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!branchRef.current) return;

    const leaves = branchRef.current.querySelectorAll('.leaf');
    
    gsap.to(leaves, {
      scale: 1.1,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 0.3,
    });
  }, []);

  return (
    <svg
      ref={branchRef}
      className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} top-20`}
      width="100"
      height="300"
      viewBox="0 0 100 300"
      fill="none"
      style={{ transform: position === 'right' ? 'scaleX(-1)' : 'none' }}
    >
      <path
        d="M10 0 Q20 50 15 100 Q10 150 20 200 Q25 250 20 300"
        stroke="#a6704d"
        strokeWidth="2"
        fill="none"
        opacity="0.15"
      />
      <ellipse className="leaf" cx="25" cy="50" rx="12" ry="8" fill="#bf9a77" opacity="0.2"/>
      <ellipse className="leaf" cx="15" cy="120" rx="10" ry="7" fill="#bf9a77" opacity="0.2"/>
      <ellipse className="leaf" cx="30" cy="180" rx="11" ry="8" fill="#bf9a77" opacity="0.2"/>
      <ellipse className="leaf" cx="20" cy="250" rx="9" ry="6" fill="#bf9a77" opacity="0.2"/>
    </svg>
  );
}