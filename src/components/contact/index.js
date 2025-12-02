"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import "./contact.css";

const ContactSection = () => {
  const controls = useAnimation();
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

    const form = e.target;
    const formData = {
      fname: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      message: form[3].value,
    };

    try {
      console.log(formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        form.reset();
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (err) {
      alert("Network error. Please try again.");
      console.error(err);
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
        className="relative bg-black py-16 px-4 text-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#e7b826] mb-2">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              Have questions about memberships, coaching or studio access? Send
              us a message and we’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Glassy 2-column layout: info + form */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: Studio info */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-6 flex flex-col gap-6 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
              <div>
                <h4 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">
                  Location
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
                  Monday–Friday: 5:00 am – 10:00 pm
                </p>
                <p className="text-sm text-gray-200">
                  Saturday–Sunday: 7:00 am – 8:00 pm
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">
                  Contact
                </h4>
                <div className="flex flex-col gap-1 text-sm">
                  <a
                    href="tel:+19055551234"
                    className="text-gray-200 hover:text-[#e7b826] transition"
                  >
                    (905) 555-1234
                  </a>
                  <a
                    href="mailto:info@dreamlandathletics.com"
                    className="text-gray-200 hover:text-[#e7b826] transition"
                  >
                    info@dreamlandathletics.com
                  </a>
                  <a
                    href="https://www.instagram.com/dreamland_brampton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-[#e7b826] transition"
                  >
                    @dreamland_brampton
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-2">
                  Visit / Call / Message
                </p>
                <p className="text-sm text-gray-300">
                  Whether you’re just starting or ready to level up, we’re here
                  to help you move slow, steady and unstoppable.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-[0.18em]">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your goals, questions or how we can help."
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/15 text-sm outline-none focus:border-[#e7b826] focus:ring-1 focus:ring-[#e7b826] transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cta-button mt-2 bg-[#e7b826] hover:bg-[#ffd84e] text-black font-semibold py-2.5 rounded-md text-xs md:text-sm uppercase tracking-[0.18em] transition"
                >
                  Send Message
                </button>
              </form>
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
              height="450"
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
