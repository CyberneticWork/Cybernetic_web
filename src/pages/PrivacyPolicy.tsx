import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how Cybernetic Technologies Pvt Ltd collects, uses, and protects your information when you use our website and services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Usage data and cookies</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and maintain our services</li>
        <li>To communicate with you</li>
        <li>To improve our website and services</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information Sharing</h2>
      <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at info@cybernetic.lk.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
      <p className="mb-4">We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at info@cybernetic.lk.</p>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;