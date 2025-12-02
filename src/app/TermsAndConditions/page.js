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
      <section className="TermsAndConditions px-6 md:px-20 py-20 text-gray-100 bg-gradient-to-b from-black via-[#050505] to-[#050505]">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center tracking-[0.25em] uppercase">
            Terms &amp; Conditions
          </h1>

          {/* Meta Info */}
          <p className="mb-2 text-sm md:text-base text-gray-300 text-center">
            <span className="font-semibold text-[#e7b826]">
              Dreamland Athletics – Official Policy
            </span>
          </p>
          <p className="mb-1 text-sm md:text-base text-gray-400 text-center">
            Last Updated: <span className="font-medium text-gray-200">November 2025</span>
          </p>
          <p className="mb-8 text-sm md:text-base text-gray-400 text-center">
            Location: <span className="font-medium text-gray-200">Brampton, Ontario, Canada</span>
          </p>

          <div className="h-px w-24 mx-auto mb-10 bg-gradient-to-r from-transparent via-[#e7b826] to-transparent" />

          {/* Content */}
          <div className="space-y-10 text-gray-300 leading-relaxed text-sm md:text-base">
            {/* 1. Membership & Personal Training Commitments */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                1. Membership &amp; Personal Training Commitments
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">
                    1.1 Automatic Renewals:
                  </span>{" "}
                  All recurring memberships renew automatically unless cancelled
                  with a{" "}
                  <span className="font-semibold text-[#e7b826]">
                    30-day written notice
                  </span>
                  .
                </li>
                <li>
                  <span className="font-semibold">
                    1.2 Paid-in-Full Packages:
                  </span>{" "}
                  All paid-in-full packages (memberships, class packs, personal
                  training packages, kids programs, events, and promotions) are{" "}
                  <span className="font-semibold uppercase text-red-400">
                    non-transferable and non-refundable
                  </span>
                  .
                </li>
                <li>
                  <span className="font-semibold">1.3 Banked Sessions:</span>{" "}
                  Any banked or unused sessions remain valid for{" "}
                  <span className="font-semibold">6 months</span> from the date
                  of cancellation notice. After this period, unused sessions
                  will automatically expire.
                </li>
              </ul>
            </section>

            {/* 2. NO REFUND POLICY */}
            <section>
              <div className="border-l-4 border-red-500 bg-white/5 rounded-md px-4 py-4 shadow-md">
                <h2 className="text-2xl md:text-3xl mb-2 font-semibold tracking-normal text-red-400">
                  2. NO REFUND POLICY
                </h2>
                <p className="mb-2">
                  All payments made to Dreamland Athletics are{" "}
                  <span className="font-semibold uppercase text-red-400">
                    strictly NON-REFUNDABLE
                  </span>
                  .
                </p>
                <p>
                  This includes, but is not limited to: memberships, personal
                  training, kids programs, class packs, workshops, events, and
                  promotional offers. Missed sessions, schedule changes, partial
                  usage, or early cancellations do not qualify for refunds.
                </p>
              </div>
            </section>

            {/* 3. 30-DAY CANCELLATION POLICY */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                3. 30-Day Cancellation Policy
              </h2>
              <p>
                A{" "}
                <span className="font-semibold text-[#e7b826]">
                  written 30-day notice
                </span>{" "}
                is required for cancelling any recurring membership.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  The final invoice will be billed during the 30-day notice
                  period.
                </li>
                <li>
                  Cancellation requests must be emailed to{" "}
                  <a
                    href="mailto:dreamlandathletics@gmail.com"
                    className="text-[#e7b826] underline"
                  >
                    dreamlandathletics@gmail.com
                  </a>
                  .
                </li>
                <li>
                  Verbal requests, text messages, or social media messages are{" "}
                  <span className="font-semibold">not accepted</span> as
                  official cancellation.
                </li>
              </ul>
            </section>

            {/* 4. Assumption of Risk & Liability Waiver */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                4. Assumption of Risk &amp; Liability Waiver
              </h2>
              <p className="mb-3">
                By participating in any Dreamland Athletics program, class, or
                personal training session, clients acknowledge that all physical
                activity involves inherent risks.
              </p>
              <p>
                Clients participate voluntarily and assume all risks of injury,
                accident, or damage. Dreamland Athletics, its owners, coaches,
                and staff are{" "}
                <span className="font-semibold">
                  not liable for any injuries, losses, or damages
                </span>{" "}
                arising from participation, improper equipment use, or failure
                to follow instructions.
              </p>
            </section>

            {/* 5. Kids’ Programs */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                5. Kids’ Programs
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">
                    Parental/guardian consent
                  </span>{" "}
                  is mandatory for all kids’ programs.
                </li>
                <li>
                  Dreamland Athletics reserves the right to{" "}
                  <span className="font-semibold">
                    discontinue a child&apos;s participation
                  </span>{" "}
                  due to safety concerns, behavioural issues, or repeated
                  non-compliance.
                </li>
                <li>
                  Dreamland Athletics is{" "}
                    <span className="font-semibold">
                      not responsible for children
                    </span>{" "}
                  before or after their scheduled session time. Parents or
                  guardians must ensure timely drop-off and pick-up.
                </li>
              </ul>
            </section>

            {/* 6. Payment Policies */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                6. Payment Policies
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Payments may be processed securely via{" "}
                  <span className="font-semibold">third-party gateways</span>.
                </li>
                <li>
                  If a payment fails, it may be{" "}
                  <span className="font-semibold">
                    automatically reattempted within 48–72 hours
                  </span>
                  .
                </li>
                <li>
                  Members are responsible for keeping payment information
                  accurate and up to date. Unresolved failed payments may result
                  in suspension of access.
                </li>
              </ul>
            </section>

            {/* 7. Privacy & Data Protection */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                7. Privacy &amp; Data Protection
              </h2>
              <p className="mb-3">
                Dreamland Athletics follows{" "}
                <span className="font-semibold">PIPEDA</span> (Personal
                Information Protection and Electronic Documents Act) guidelines
                for handling personal data.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Personal information is stored securely and used only for
                  service delivery, communication, and billing.
                </li>
                <li>
                  Dreamland Athletics does{" "}
                  <span className="font-semibold uppercase">
                    not sell personal data
                  </span>{" "}
                  to third parties.
                </li>
                <li>
                  Clients may request access to or correction of their data by
                  contacting us.
                </li>
              </ul>
            </section>

            {/* 8. Conduct & Studio Rules */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                8. Conduct &amp; Studio Rules
              </h2>
              <p className="mb-3">
                To maintain a safe and respectful environment, all members are
                expected to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintain personal hygiene and wear appropriate attire.</li>
                <li>Respect gym equipment and use it safely and correctly.</li>
                <li>Follow coach and staff guidance at all times.</li>
                <li>Treat staff and fellow members with respect.</li>
              </ul>
              <p className="mt-3">
                Violations of these rules, harassment, or unsafe behaviour may
                result in{" "}
                <span className="font-semibold">
                  suspension or termination of membership
                </span>{" "}
                without refund.
              </p>
            </section>

            {/* 9. Website Terms */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                9. Website Terms
              </h2>
              <p>
                Users agree not to misuse the Dreamland Athletics website or its
                content. This includes:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Attempting unauthorized access to any part of the system.</li>
                <li>Copying or redistributing website content without permission.</li>
                <li>Engaging in any activity that disrupts site functionality.</li>
              </ul>
            </section>

            {/* 10. Changes to Terms */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                10. Changes to Terms
              </h2>
              <p>
                Dreamland Athletics may update or modify these Terms &amp;
                Conditions at any time. Changes will be reflected by updating
                the{" "}
                <span className="font-semibold">&quot;Last Updated&quot;</span>{" "}
                date at the top of this page. Your continued use of our website
                or services after any changes indicates your acceptance of the
                updated Terms.
              </p>
            </section>

            {/* 11. Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl mb-3 font-semibold tracking-normal">
                11. Contact
              </h2>
              <p className="mb-2">
                For questions, cancellation requests, or concerns related to
                these Terms &amp; Conditions, please contact:
              </p>
              <p className="mt-1">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:dreamlandathletics@gmail.com"
                  className="text-[#e7b826] underline"
                >
                  dreamlandathletics@gmail.com
                </a>
                <br />
                <span className="font-semibold">Location:</span> Brampton,
                Ontario, Canada
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
