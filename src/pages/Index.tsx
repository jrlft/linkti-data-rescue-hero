
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AOS from 'aos';

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
    
    // Refresh AOS when the component mounts
    AOS.refresh();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Benefits />
        <Process />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
