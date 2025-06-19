'use client';

import CTA from '@/components/LandingPage/CTA';
import FAQ from '@/components/LandingPage/FAQ';
import Features from '@/components/LandingPage/Features';
import Footer from '@/components/LandingPage/Footer';
import Header from '@/components/LandingPage/Header';
import Hero from '@/components/LandingPage/Hero';
import HowItWorks from '@/components/LandingPage/HowItWorks';
import Testimonials from '@/components/LandingPage/Testimonials';
import React from 'react'

const landing = () => {
  return (
    <div className="min-h-screen bg-background font-work-sans">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default landing
