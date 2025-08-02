import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">By accessing or using the Cybernetic Technologies Pvt Ltd website and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Services</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You must be at least 18 years old to use our services.</li>
        <li>You agree not to use our services for any unlawful or prohibited activities.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4">All content, trademarks, and data on this website are the property of Cybernetic Technologies Pvt Ltd or its licensors. You may not use, reproduce, or distribute any content without our written permission.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">Cybernetic Technologies Pvt Ltd is not liable for any damages arising from the use or inability to use our services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at info@cybernetic.lk.</p>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;