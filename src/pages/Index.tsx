import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import WhyChooseUs from '@/components/WhyChooseUs';
import CaseStudies from '@/components/CaseStudies';
import VideoDemo from '@/components/VideoDemo';
import Testimonials from '@/components/Testimonials';
import Industries from '@/components/Industries';

import Footer from '@/components/Footer';
// import LiveChat from '@/components/LiveChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <TrustIndicators />
          <VideoDemo />
        <WhyChooseUs />
        <CaseStudies />
        {/* <Testimonials /> */}
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
