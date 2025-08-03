import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mt-10 mb-16">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700 dark:text-blue-400">Refund Policy</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Eligibility for Refund</h2>
          <ul className="list-disc pl-6">
            <li>You are eligible for a full refund within 30 days of your purchase date.</li>
            <li>Your request must include a valid reason for the refund (e.g., technical issues, software doesn't meet expectations).</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How to Request a Refund</h2>
          <ol className="list-decimal pl-6">
            <li>Send an email to our support team at <span className="font-semibold">info@cybernetic.lk</span> with the subject line "Refund Request."</li>
            <li>Include your order number and the reason for your request in the email.</li>
            <li>Our team will review your request and get back to you within 3-5 business days.</li>
          </ol>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Refund Process</h2>
          <ul className="list-disc pl-6">
            <li>If your refund is approved, we will initiate a refund to your original method of payment.</li>
            <li>You will receive the credit within a certain number of days, depending on your card issuer's policies.</li>
            <li>We may, at our discretion, offer store credit instead of a monetary refund.</li>
          </ul>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default RefundPolicy;