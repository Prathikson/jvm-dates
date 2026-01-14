export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gold-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-center">
            Terms & Conditions
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-sm text-dark-600 mb-8">Last Updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">1. Introduction</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                Welcome to JVM Dates. These Terms and Conditions govern your use of our website and services. By accessing our website or placing an order with us, you agree to be bound by these terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">2. Wholesale Orders</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                JVM Dates specializes in wholesale supply of premium dry fruits, dates, and nuts. Our products are intended for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-700">
                <li>Retail shop owners</li>
                <li>Traders and distributors</li>
                <li>Bulk buyers for commercial purposes</li>
                <li>Food service businesses</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">3. Product Quality</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We are committed to providing premium quality products. All our products are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-700">
                <li>Carefully sourced from trusted suppliers</li>
                <li>Inspected for quality before delivery</li>
                <li>Stored in optimal conditions</li>
                <li>Delivered fresh to maintain quality</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">4. Pricing</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                All prices displayed on our website are in Indian Rupees (INR) and are subject to change without notice. Wholesale pricing may vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-700">
                <li>Order quantity</li>
                <li>Product availability</li>
                <li>Market conditions</li>
                <li>Seasonal variations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">5. Orders and Delivery</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                Orders are processed upon confirmation and payment. Delivery timelines depend on order size and location within Coimbatore and surrounding areas.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">6. Payment Terms</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                Payment methods and terms will be discussed and agreed upon at the time of order placement. We accept various payment methods for the convenience of our wholesale customers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">7. Returns and Refunds</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We stand behind the quality of our products. If you receive damaged or defective products, please contact us within 24 hours of delivery. We will work with you to resolve the issue promptly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">8. Liability</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                While we take every precaution to ensure product quality, JVM Dates is not liable for any indirect or consequential damages arising from the use of our products.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">9. Modifications</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">10. Contact Information</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-primary-50 rounded-xl p-6">
                <p className="text-dark-900 font-semibold mb-2">JVM Dates</p>
                <p className="text-dark-700">24, Periya Thambi Nagar, Selvapuram South</p>
                <p className="text-dark-700">Selvapuram, Coimbatore, Tamil Nadu - 641026</p>
                <p className="text-dark-700 mt-2">Phone: +91 98422 93927</p>
                <p className="text-dark-700">Email: info@jvmdates.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}