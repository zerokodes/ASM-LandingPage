import { Routes, Route } from 'react-router-dom';
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
import About from '@/components/pages/About';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import TermsOfService from '@/components/pages/TermsOfService';

function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
}
