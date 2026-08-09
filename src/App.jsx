import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Dashboard from '@/components/sections/Dashboard';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
