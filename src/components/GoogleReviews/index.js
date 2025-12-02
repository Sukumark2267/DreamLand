"use client";

import { useState } from "react";

const SCRIPT_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS591jqu8ft79u3Q1ISFAiG98gqRPTN6iQ11RVPHB_OpvEIhJFcORxjqSFKV0Cw1KzfcG5wqmOGbkM6/pubhtml"; // <-- paste here

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          type: "review",
          name,
          email,
          phone,
          rating,
          message,
          source: "Dreamland Website"
        })
      });

      const data = await res.json();

      if (data.status === "success") {
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setRating(5);
        setMessage("");
      } else {
        setError("There was an error saving your review. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="reviews-form"
      className="mt-12 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white text-center">
        Share Your Experience
      </h2>
      <p className="text-sm md:text-base text-gray-300 mb-6 text-center">
        Your review helps others discover Dreamland Athletics. Thank you for supporting our community.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name (optional)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#e7b826]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Phone (optional)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#e7b826]"
              placeholder="Your mobile number"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#e7b826]"
            placeholder="your@email.com"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Rating</label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  star <= rating ? "text-[#e7b826]" : "text-gray-500"
                }`}
              >
                ★
              </button>
            ))}
            <span className="text-sm text-gray-300 ml-2">{rating} / 5</span>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Your Review</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#e7b826]"
            placeholder="Tell us about your experience at Dreamland Athletics..."
          />
        </div>

        {/* Errors */}
        {error && (
          <p className="text-xs text-red-400">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-semibold bg-[#e7b826] text-black hover:bg-[#ffd84e] transition disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>

        {submitted && (
          <p className="text-xs mt-2 text-green-400 text-center">
            Thank you! Your review has been recorded.
          </p>
        )}
      </form>
    </section>
  );
}
