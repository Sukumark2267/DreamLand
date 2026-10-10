"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { indiaInstagram, canadaInstagram, indiaMaps, indiaMapsSearch, indiaHours } from "@/data/locations";
import Image from "next/image";
import "./contact.css";

const ContactSection = () => {
  const controls = useAnimation();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: "100%",
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    } else {
      controls.start({
        width: "0%",
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form));
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, text: data.message });
        form.reset();
      } else {
        setStatus({ success: false, text: data.error || "Unable to send your message. Please email or call us." });
      }
    } catch (err) {
      setStatus({ success: false, text: "Unable to connect. Please email or call the studio." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Animated yellow divider */}
      <div className="flex justify-center">
        <motion.div
          ref={ref}
          initial={{ width: "0%" }}
          animate={controls}
          className="yellowborder relative h-3 mt-[-1px] overflow-hidden"
          style={{ originX: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/elements/YellowBorder.png"
            alt="Section Divider Border"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative bg-[#0c0c0c] py-8 sm:py-10 px-5 sm:px-8 text-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#e7b826] mb-2">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              Have questions about memberships, coaching or studio access? Send
              us a message and we’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Glassy 2-column layout: info + form */}
          <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* Left: Studio info */}
            <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 flex flex-col gap-5">
              <div>
                <h4 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">
                  Canada Location
                </h4>
                <p className="text-base font-semibold">
                  Dreamland Athletics Studio
                </p>
                <p className="text-sm text-gray-300">
                  860 N Park Dr, Brampton, ON L6S 4N5, Canada
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">
                  Hours
                </h4>
                <p className="text-sm text-gray-200">
                  Monday–Friday: 6:00 am – 9:00 pm
                </p>
                 <p className="text-sm text-gray-200">
                  Lunch Time: 2:00 pm - 4:00 pm
                </p>
                <p className="text-sm text-gray-200">
                  Saturday: 10:00 am – 2:00 pm
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">
                  Contact
                </h4>
                <div className="flex flex-col gap-1 text-sm">
                  <a
                    href="tel:+12265772122"
                    className="text-gray-200 hover:text-[#e7b826] transition"
                  >
                     226-577-2122
                  </a>
                  <a href="tel:+12265032486" className="text-gray-200 hover:text-[#e7b826]">226-503-2486</a>
                  <a
                    href="mailto:dreamlandathletics@gmail.com"
                    className="text-gray-200 hover:text-[#e7b826] transition"
                  >
                    dreamlandathletics@gmail.com
                  </a>
                  <a
                    href={canadaInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-[#e7b826] transition"
                  >
                    @dreamland_brampton
                  </a>
                </div>
              </div>

              </div>
              <div
                id="india-location"
                className="scroll-mt-28 rounded-2xl border border-[#e7b826]/25 bg-[#171717] p-6"
              >
                <h4 className="text-sm uppercase tracking-[0.2em] text-[#e7b826] mb-1">
                  India Location
                </h4>
                <p className="text-base font-semibold">
                  Dreamland Athletics India
                </p>
                <p className="text-sm text-gray-300">
                  Dinkar Vihar, Vikas Nagar, Dehradun, Uttarakhand, India
                </p>

                <div className="mt-4">
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">Hours</h4>
                  <p className="text-sm text-gray-200">{indiaHours}</p>
                  <p className="text-sm text-gray-200 mb-4">Saturday: Closed</p>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">
                    Contact
                  </h4>
                  <a
                    href="tel:+919639202122"
                    className="text-sm text-gray-200 hover:text-[#e7b826] transition"
                  >
                    +91 96392 02122
                  </a>
                  <a href={indiaInstagram} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-[#e7b826]">@dreamland_vikasnagar</a>
                </div>

                <a
                  href={indiaMaps || indiaMapsSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full border border-[#e7b826]/50 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#e7b826] transition hover:bg-[#e7b826] hover:text-black"
                >
                  Open India Location
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 sm:p-8">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-[0.18em]">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-location" className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">Studio</label>
                  <select id="contact-location" name="location" className="w-full rounded-md border border-white/15 bg-black px-3 py-2 text-white">
                    <option value="Canada">Canada — Brampton</option>
                    <option value="India">India — Vikas Nagar</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="contact-name"
                    maxLength={120}
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    maxLength={254}
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    maxLength={40}
                    placeholder="Phone Number (optional)"
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    maxLength={5000}
                    placeholder="Tell us about your goals, questions or how we can help."
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full cta-button mt-2 bg-[#e7b826] hover:bg-[#ffd84e] text-black font-semibold py-2.5 rounded-md text-xs md:text-sm uppercase tracking-[0.18em] transition"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
              {status && <p role="status" aria-live="polite" className={`mt-4 text-sm ${status.success ? "text-green-300" : "text-amber-200"}`}>{status.text}</p>}
              <a href="mailto:dreamlandathletics@gmail.com" className="mt-4 inline-block text-sm text-[#e7b826] underline">Email us directly</a>
            </div>
          </div>

          {/* MAP BELOW – full width, matches brand */}
          <motion.div
            className="map-container mt-12 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, scaleX: 0.5, transformOrigin: "center" }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.7687165970583!2d-79.74951353497413!3d43.72977157442773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b173a1b0a0e17%3A0xdadb9bd5d608dd4e!2sDreamland%20Athletics!5e0!3m2!1sen!2sin!4v1747585502192!5m2!1sen!2sin"
              width="100%"
              height="260"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            className="map-container mt-8 rounded-2xl overflow-hidden border border-[#e7b826]/25 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, scaleX: 0.5, transformOrigin: "center" }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <iframe
              title="Dreamland Athletics India - Vikas Nagar, Dehradun"
              src="https://www.google.com/maps?q=Dreamland%20Athletics%20Vikasnagar%20Dehradun&output=embed"
              width="100%"
              height="260"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
