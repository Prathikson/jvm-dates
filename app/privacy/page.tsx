export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-gold-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-center">
            Privacy Policy
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
                At JVM Dates, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">2. Information We Collect</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-700">
                <li><strong>Personal Information:</strong> Name, email address, phone number, business name</li>
                <li><strong>Order Information:</strong> Products ordered, quantities, delivery address</li>
                <li><strong>Communication Data:</strong> Records of correspondence with our team</li>
                <li><strong>Usage Data:</strong> How you interact with our website</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-700">
                <li>Process and fulfill your wholesale orders</li>
                <li>Communicate with you about your orders and inquiries</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">4. Data Security</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">5. Information Sharing</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-700">
                <li>Delivery partners for order fulfillment</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">6. Cookies</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our website. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">7. Your Rights</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-dark-700">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">8. Data Retention</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">9. Third-Party Links</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">10. Children's Privacy</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                Our services are intended for business use and not directed at children under 18. We do not knowingly collect information from children.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website with an updated "Last Updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-4">12. Contact Us</h2>
              <p className="text-dark-700 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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