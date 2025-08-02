import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4">At Cybernetic Technologies Pvt Ltd, we strive to deliver high-quality software solutions. If you are not satisfied with our services, please review our refund policy below.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Eligibility for Refunds</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Refund requests must be made within 14 days of project delivery.</li>
        <li>Refunds are only applicable if the delivered service does not match the agreed-upon requirements.</li>
        <li>Partial refunds may be considered based on the scope of work completed.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
      <p className="mb-4">To request a refund, please contact us at info@cybernetic.lk with your project details and reason for the request. We will review your request and respond within 7 business days.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Exceptions</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>No refunds will be issued for services that have been fully delivered and accepted by the client.</li>
        <li>Refunds are not available for third-party costs or fees.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>If you have any questions about our Refund Policy, please contact us at info@cybernetic.lk.</p>
    </main>
    <Footer />
  </div>
);

export default RefundPolicy;