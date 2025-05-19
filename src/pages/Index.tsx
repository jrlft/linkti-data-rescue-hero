
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import AOS from 'aos';

const Index = () => {
  useEffect(() => {
    // Refresh AOS when the component mounts
    AOS.refresh();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main>
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
