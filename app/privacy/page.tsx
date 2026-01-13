"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const lastUpdated = "January 13, 2024";

  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 bg-white min-h-screen selection:bg-black selection:text-white">
      <CustomCursor />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold anton-sc mb-8 text-black">
            Privacy <span className="text-gray-400">Policy</span>
          </h1>
          <p className="text-gray-500 mb-12">Last Updated: {lastUpdated}</p>

          <div className="space-y-12 prose prose-lg max-w-none text-gray-800">
            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us when you fill
                out a contact form, subscribe to our newsletter, or communicate
                with us about a project. This may include your name, email
                address, phone number, and business details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about projects and inquiries</li>
                <li>Send technical notices, updates, and security alerts</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                3. Data Security
              </h2>
              <p>
                We take reasonable measures to help protect information about
                you from loss, theft, misuse, and unauthorized access,
                disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                4. Sharing of Information
              </h2>
              <p>
                We do not share your personal information with third parties
                except as necessary to provide our services, comply with the
                law, or protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                5. Cookies and Tracking
              </h2>
              <p>
                Our website may use cookies and similar tracking technologies to
                enhance your experience and analyze website traffic. You can
                control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                6. Your Rights
              </h2>
              <p>
                You have the right to access, update, or delete the personal
                information we hold about you. Please contact us if you wish to
                exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="font-bold text-black">Code Illustrated Studio</p>
                <p>Email: admin@codeillustrated.com</p>
                <p>Phone: +44 7405 786 279</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
