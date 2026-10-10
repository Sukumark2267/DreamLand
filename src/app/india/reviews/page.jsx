import Link from "next/link";
import { MapPin, MessageSquareQuote, Sparkles } from "lucide-react";
import ReviewForm from "@/components/GoogleReviews";
import { indiaMaps, indiaMapsSearch } from "@/data/locations";

export const metadata = {
  title: "India Reviews | Vikas Nagar, Dehradun",
  description:
    "Read and share experiences with the Dreamland Athletics India community in Vikas Nagar, Dehradun.",
  alternates: {
    canonical: "/india/reviews",
  },
};

export default function IndiaReviewsPage() {
  return (
    <main className="min-h-screen bg-black px-4 pb-20 pt-20 text-white md:pt-28">
      <section className="mx-auto max-w-6xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e7b826]/30 bg-[#e7b826]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#e7b826]">
          <MapPin size={15} />
          Vikas Nagar, Dehradun
        </div>
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#e7b826] md:text-sm">
          India Reviews
        </p>
        <h1 className="text-4xl font-bold uppercase leading-tight md:text-6xl">
          India member experiences
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-lg">
          Discover the Dreamland Athletics community in Vikas Nagar, Dehradun.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e7b826]/25 bg-gradient-to-br from-[#e7b826]/15 via-white/5 to-black p-7 md:p-10">
            <Sparkles className="mb-6 h-8 w-8 text-[#e7b826]" />
            <h2 className="text-3xl uppercase md:text-4xl">India studio on Google</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
              Explore our India studio and read member experiences on Google Maps.
            </p>
            <a href={indiaMaps || indiaMapsSearch} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#e7b826] px-6 py-3 text-sm text-black">Open India studio on Google</a>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-10">
            <MessageSquareQuote className="mb-6 h-8 w-8 text-[#e7b826]" />
            <h2 className="text-2xl uppercase md:text-3xl">Visited our India studio?</h2>
            <p className="mt-4 text-sm leading-7 text-gray-300 md:text-base">
              Share your experience with the India team. Submitted reviews can
              be verified before they are published on this page.
            </p>
            <a
              href="#india-review-form"
              className="mt-7 inline-flex rounded-full bg-[#e7b826] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#ffd84e]"
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>

      <div id="india-review-form" className="scroll-mt-24">
        <ReviewForm
          location="India"
          title="Share Your India Experience"
          description="Tell us about your visit to the Dreamland Athletics studio in Vikas Nagar, Dehradun."
        />
      </div>

      <div className="mx-auto mt-12 max-w-6xl text-center">
        <p className="text-sm text-gray-400">Looking for Canada reviews?</p>
        <Link
          href="/Reviews"
          className="mt-3 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.16em] text-white transition hover:border-[#e7b826] hover:text-[#e7b826]"
        >
          View Canada Reviews
        </Link>
      </div>
    </main>
  );
}
