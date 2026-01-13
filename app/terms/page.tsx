"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { motion } from "framer-motion";

export default function TermsPage() {
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
            Terms & <span className="text-gray-400">Conditions</span>
          </h1>
          <p className="text-gray-500 mb-12">Last Updated: {lastUpdated}</p>

          <div className="space-y-12 prose prose-lg max-w-none text-gray-800">
            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                1. Introduction
              </h2>
              <p>
                Welcome to Code Illustrated Studio ("we," "our," or "us"). By
                accessing or using our website and services, you agree to comply
                with and be bound by these Terms and Conditions. If you do not
                agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                2. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                images, and software, is the property of Code Illustrated Studio
                and is protected by international copyright and trademark laws.
                You may not reproduce, distribute, or create derivative works
                without our express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                3. Use of Services
              </h2>
              <p>
                Our services are provided for businesses and individuals seeking
                digital products, branding, and development. You agree to use
                our services only for lawful purposes and in a manner that does
                not infringe the rights of others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                4. Project Agreements
              </h2>
              <p>
                Each project undertaken by Code Illustrated Studio will be
                subject to a separate Service Agreement or Proposal, which will
                outline specific deliverables, timelines, and payment terms.
                These Terms and Conditions supplement such agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                5. Limitation of Liability
              </h2>
              <p>
                Code Illustrated Studio will not be liable for any direct,
                indirect, incidental, or consequential damages resulting from
                the use or inability to use our services or website content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                6. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend access to our
                services at our sole discretion, without notice, for any conduct
                that we believe violates these Terms or is harmful to other
                users or our business interests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                7. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of the United Kingdom, without regard
                to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 anton-sc uppercase tracking-wider">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
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
