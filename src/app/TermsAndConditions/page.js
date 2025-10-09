"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Preloader from "@/components/Preloader";

export default function TermsAndConditions() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Navbar />
      <section className="TermsAndConditions px-6 md:px-20 py-16 text-gray-100 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-8 text-center tracking-widest">
            Terms & Conditions
          </h1>
          <p className="mb-6 text-lg text-gray-300 text-center">
            Last updated: October 9, 2025
          </p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            {/* SECTION 1 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">1. Introduction</h2>
              <p>
                Welcome to Dreamland Athletics ("we", "our", "us"). These Terms
                and Conditions ("Terms") govern your access to and use of our
                website, digital services, and any products or features we
                provide (collectively, the “Services”). By accessing or using
                our website, you agree to comply with these Terms. If you do not
                agree, please discontinue use immediately.
              </p>
              <p className="mt-3">
                These Terms apply to all visitors, users, and others who access
                or use the Services. Your continued use of the website after any
                modification to these Terms constitutes acceptance of those
                changes.
              </p>
            </section>

            {/* SECTION 2 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                2. Eligibility & User Obligations
              </h2>
              <p>
                By using our Services, you represent that you are at least 16
                years of age or have legal parental consent. You agree not to
                use the website for any unlawful purpose or in a manner that
                could damage, disable, or interfere with the operation of our
                Services or any third party’s use.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Provide accurate and up-to-date information.</li>
                <li>
                  Not engage in fraudulent, abusive, or illegal activities.
                </li>
                <li>
                  Respect the intellectual property and privacy rights of
                  others.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                3. Intellectual Property Rights
              </h2>
              <p>
                All materials, including text, images, graphics, videos, and
                logos on this website are owned or licensed by Dreamland
                Athletics and are protected by copyright, trademark, and other
                intellectual property laws. Unauthorized use, reproduction, or
                redistribution of our content is strictly prohibited.
              </p>
              <p className="mt-3">
                You are granted a limited, non-exclusive, and revocable license
                to access and use our website for personal, non-commercial
                purposes only.
              </p>
            </section>

            {/* SECTION 4 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                4. Purchases, Orders, and Payment
              </h2>
              <p>
                If you purchase products or services through Dreamland
                Athletics, you agree to provide accurate billing and payment
                information. All prices are listed in your local currency unless
                otherwise stated and are subject to change without prior notice.
              </p>
              <p className="mt-3">
                We reserve the right to refuse or cancel orders that appear to
                be fraudulent, unauthorized, or violate these Terms. Refunds, if
                applicable, will be processed according to our Refund Policy.
              </p>
            </section>

            {/* SECTION 5 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                5. User Accounts
              </h2>
              <p>
                You may be required to create an account to access certain
                features of the website. You are responsible for maintaining the
                confidentiality of your account credentials and all activities
                that occur under your account.
              </p>
              <p className="mt-3">
                Dreamland Athletics reserves the right to suspend or terminate
                your account if we detect misuse, fraudulent activity, or breach
                of these Terms.
              </p>
            </section>

            {/* SECTION 6 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                6. Links to Third-Party Websites
              </h2>
              <p>
                Our website may contain links to third-party websites or
                services that are not owned or controlled by Dreamland
                Athletics. We are not responsible for the content, policies, or
                practices of any third-party sites. Visiting those sites is at
                your own risk.
              </p>
            </section>

            {/* SECTION 7 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Dreamland Athletics, its
                directors, employees, or affiliates shall not be liable for any
                indirect, incidental, consequential, or punitive damages arising
                from your use or inability to use our website or services.
              </p>
              <p className="mt-3">
                We do not warrant that our Services will be uninterrupted,
                error-free, or completely secure. You acknowledge that you use
                the website at your own risk.
              </p>
            </section>

            {/* SECTION 8 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                8. Disclaimer of Warranties
              </h2>
              <p>
                Our Services are provided on an “as is” and “as available” basis
                without any warranties of any kind, express or implied,
                including but not limited to fitness for a particular purpose or
                non-infringement.
              </p>
              <p className="mt-3">
                Dreamland Athletics makes no representations or warranties about
                the accuracy, completeness, or reliability of any content on the
                website.
              </p>
            </section>

            {/* SECTION 9 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                9. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless Dreamland
                Athletics, its officers, employees, agents, and affiliates from
                any claims, liabilities, damages, losses, or expenses (including
                legal fees) arising out of your violation of these Terms or your
                misuse of the Services.
              </p>
            </section>

            {/* SECTION 10 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                10. Termination
              </h2>
              <p>
                We may suspend or terminate your access to our Services at any
                time, without prior notice or liability, for any reason
                whatsoever, including if you breach these Terms. Upon
                termination, all rights granted to you under these Terms will
                immediately cease.
              </p>
            </section>

            {/* SECTION 11 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Ontario, Canada, without regard to conflict of
                law principles. Any disputes arising under these Terms shall be
                subject to the exclusive jurisdiction of the courts located in
                Ontario, Canada.
              </p>
            </section>

            {/* SECTION 12 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                12. Changes to These Terms
              </h2>
              <p>
                Dreamland Athletics reserves the right to modify or replace
                these Terms at any time. We will notify users of any major
                changes by updating the "Last Updated" date at the top of this
                page. Your continued use of the site after such changes implies
                acceptance of the new Terms.
              </p>
            </section>

            {/* SECTION 13 */}
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">13. Contact Us</h2>
              <p>
                For questions, feedback, or concerns about these Terms and
                Conditions, please reach out to us:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> support@dreamlandathletics.com <br />
                <strong>Address:</strong> 860 N Park Dr, Brampton, ON L6S 4N5,
                Canada
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
