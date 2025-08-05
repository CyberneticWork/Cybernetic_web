import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mt-10 mb-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Terms of Service</h1>
        
        <section className="mb-8">
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            By accessing or using the Cybernetic Technologies Pvt Ltd website and services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">1. Definitions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold">"Agreement"</span>: Refers to this document, including any attached exhibits or statements of work (SOWs).</li>
            <li><span className="font-semibold">"Client"</span>: The person or entity engaging the Company's services.</li>
            <li><span className="font-semibold">"Company"</span>: Cybernetic Technologies Pvt Ltd the software development provider.</li>
            <li><span className="font-semibold">"Software"</span>: The final, functional software product to be delivered to the Client as described in the SOW.</li>
            <li><span className="font-semibold">"Intellectual Property Rights" (IPR)</span>: All copyrights, patents, trademarks, trade secrets, and other proprietary rights.</li>
            <li><span className="font-semibold">"Statement of Work" (SOW)</span>: A document detailing the specific project deliverables, timelines, and costs.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">2. Services</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Company agrees to provide software development services to the Client as described in the SOW. Any changes to the scope of work must be agreed upon in writing by both parties and may result in an adjustment to the timeline and cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">3. Project Management and Communication</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Both parties agree to appoint a primary contact person for all project-related communication. The Company will provide regular updates on the project's progress, and the Client agrees to provide timely feedback and necessary resources to avoid delays.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">4. Intellectual Property Rights</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Upon full and final payment, the Intellectual Property Rights to the final Software will be transferred to the Client. The Company retains the right to use the underlying technologies, programming languages, and pre-existing code libraries used in the development, provided they do not contain any of the Client's confidential information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">5. Payments and Billing</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Client agrees to pay the Company according to the payment schedule outlined in the SOW. Invoices are due 15 Days from the date of issuance. Late payments may incur a 5% interest charge per month.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">6. Confidentiality</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Both parties agree to keep all non-public information confidential, including but not limited to business plans, financial data, and technical specifications. This obligation remains in effect for a period of 2 years after the termination of this Agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">7. Warranties and Liability</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Company warrants that the Software will be free from material defects for a period of 90 Days after delivery. During this period, the Company will correct any such defects at no additional cost. The Company's total liability under this Agreement is limited to the total fees paid by the Client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">8. Termination</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Either party may terminate this Agreement with 30 days written notice if the other party breaches any of its material obligations. Upon termination, the Client will pay for all work completed up to the date of termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">9. Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This Agreement will be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising will be resolved in the courts of Sri Lanka.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">10. Changes to Terms</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about these Terms, please contact us at <span className="font-semibold">info@cybernetic.lk</span>.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;