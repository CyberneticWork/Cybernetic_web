import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mt-10 mb-16">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700 dark:text-blue-400">Privacy Policy</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>Cybernetic Technologies Pvt Ltd is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and share your personal information when you use our software and services.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li><span className="font-semibold">Information You Provide to Us:</span> This includes information you give us when you create an account, such as your name, email address, and payment details.</li>
            <li><span className="font-semibold">Information We Collect Automatically:</span> When you use our software, we may automatically collect certain information, including your IP address, device type, operating system, and usage data to help us improve our services.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>To provide and maintain our services.</li>
            <li>To process transactions and send you related information.</li>
            <li>To communicate with you about your account and provide customer support.</li>
            <li>To personalize your experience and improve our software.</li>
            <li>To analyze usage and trends to enhance our services.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. How We Share Your Information</h2>
          <p>We may share your information with trusted third-party service providers who assist us in operating our business (e.g., payment processors, hosting providers, and analytics services). We will not sell your personal information to third parties. We may also disclose your information if required by law or in a good-faith belief that such action is necessary to comply with legal processes or protect our rights and safety.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights and Choices</h2>
          <p>You have the right to access, correct, or delete your personal information. You can also opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Cookies</h2>
          <p>We use cookies and similar tracking technologies to enhance your experience and analyze our website traffic. You can control how your browser handles cookies through its settings.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
          <p>We may update this policy from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of our services after any changes indicates your acceptance of the new terms.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at: <span className="font-semibold">info@cybernetic.lk</span></p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;