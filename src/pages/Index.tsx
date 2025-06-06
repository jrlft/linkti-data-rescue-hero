
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AOS from 'aos';

const Index = () => {
  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out',
      mirror: true,
      offset: 120,
      delay: 100,
    });
    
    // Refresh AOS when the component mounts
    AOS.refresh();

    // Reapply AOS when window is resized
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Benefits />
        <Process />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
