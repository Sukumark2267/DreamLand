"use client";


import { MapPin, Star, ArrowUpRight, MessageSquareQuote } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/Xj5h5VkeN24n7Mgq9?g_st=ic";

const reviews = [
  {
    name: "Rochelle Mcdonald",
    time: "3 weeks ago",
    text: "Kajal, Chiral and Jay are the best trainers I have had in a long time; professional, knowledgeable and friendly. The space is welcoming and clean. If you’re looking for people that hold you accountable, check in with you, and teach you about weight, nutrition and portions while getting healthy and toned – come here and check them out.",
  },
  {
    name: "Manjot Singh",
    time: "a month ago",
    text: "Dreamland Athletics is a really nice gym and a great place to work on yourself. The trainers give proper guidance and are always helpful. The environment is friendly and motivating. Definitely recommend it if you’re serious about improving your fitness.",
  },
  {
    name: "Ravi Gogna",
    time: "3 months ago",
    text: "Honestly if you are looking to transform yourself and ready to put in the effort, this is the right place for it. My coach SANYAM has helped me out day and night tracking every meal and every workout late nights & early morning cardio sessions. He motivated me throughout my fat loss journey and helped me loose 15 kgs in just 3 months, their right advice and dedication towards each and every person is truly amazing. I must recommend everyone to join their studio and change your life forever!",
  },
  {
    name: "Sukhvir Kaur",
    time: "3 months ago",
    text: "I recently joined this gym and am currently being coached by Kajal—she’s absolutely amazing. Professional, knowledgeable, and passionate, she brings such positive energy. All the staff greet you with a warm welcome. Highly recommended!",
  },
  {
    name: "Gurbani Kaur",
    time: "3 weeks ago",
    text: "I’ve had an excellent experience at the gym, thanks especially to the incredible coaches—Kajal, Sanyam, Chirag, and Jay. They are highly supportive, knowledgeable, and always attentive to proper form and technique. Their personalized guidance on using the equipment correctly has made my workouts both safer and more effective. With their consistent training and encouragement, I’ve achieved a significant transformation—going from size L to size S. This journey has greatly boosted my confidence and overall fitness. Highly recommended!",
  },
  {
    name: "Kaur Maan",
    time: "a month ago",
    text: "Highly rated for personalized training and clean, modern equipment. Staff is very helpful and humble. Coach helped me get stronger and his workouts are amazing!",
  },
  {
    name: "Navneet Kaur",
    time: "a month ago",
    text: "This gym + this trainer = transformation. Professional guidance, constant motivation, and positive vibes. Couldn’t ask for better support on my fitness journey. Highly recommended!",
  },
  {
    name: "Dhiren Chauhan",
    time: "6 months ago",
    text: "This is by far the best gym in Brampton! The facility is clean, the equipment is excellent, and the atmosphere is motivating. A special shoutout to Chirag, who is an amazing trainer. He is very knowledgeable, patient, and pushes you to give your best. Highly recommend this gym!",
  },
];

function ReviewCard({ review }) {
  const preview =
    review.text.length > 150 ? `${review.text.slice(0, 150)}...` : review.text;

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.45)] hover:border-[#e7b826]/50 transition duration-300 h-[280px] overflow-hidden">
      {/* Normal card */}
      <div className="h-full flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base text-white">{review.name}</h3>
            <p className="text-xs text-gray-400">{review.time}</p>
          </div>
          <MessageSquareQuote className="h-4 w-4 text-[#e7b826] shrink-0" />
        </div>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[#e7b826] text-[#e7b826]"
            />
          ))}
        </div>

        <p className="text-sm leading-7 text-gray-200">{preview}</p>
      </div>

      {/* Hover full text */}
      <div className="absolute inset-0 z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-300 bg-black/95 p-5 overflow-y-auto">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base text-white">{review.name}</h3>
            <p className="text-xs text-gray-400">{review.time}</p>
          </div>
          <MessageSquareQuote className="h-4 w-4 text-[#e7b826] shrink-0" />
        </div>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[#e7b826] text-[#e7b826]"
            />
          ))}
        </div>

        <p className="text-sm leading-7 text-gray-200">{review.text}</p>
      </div>
    </div>
  );
}

export default function GoogleReviewsPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="bg-black text-white min-h-screen pt-12">
        {/* Hero */}
        <section className="px-4 pt-16 md:pt-20 pb-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#e7b826] mb-3">
              Google Reviews & Location
            </p>

            <h1 className="text-4xl md:text-6xl leading-tight">
              Trusted by the Dreamland community
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-sm md:text-lg text-gray-300 leading-relaxed">
              Read member experiences and find Dreamland Athletics directly on
              Google Maps.
            </p>
          </div>
        </section>

        {/* Location */}
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-black/70 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#e7b826] mb-3">
                    Visit the Studio
                  </p>

                  <h2 className="text-2xl md:text-4xl leading-tight">
                    Dreamland Athletics
                  </h2>

                  <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
                    Explore our location on Google Maps and discover why members
                    trust Dreamland Athletics for transformation, coaching, and a
                    premium training environment.
                  </p>

                  <div className="mt-6 flex items-start gap-3 text-gray-200">
                    <MapPin className="h-5 w-5 text-[#e7b826] mt-0.5" />
                    <p className="text-sm md:text-base">
                      Dreamland Athletics, Brampton, Ontario, Canada
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e7b826] hover:bg-[#ffd84e] text-black px-6 py-3 text-sm uppercase tracking-[0.15em] transition"
                    >
                      Open in Google Maps
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/40 p-6 md:p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#e7b826] text-[#e7b826]"
                      />
                    ))}
                  </div>

                  <h3 className="text-xl md:text-2xl mb-3">
                    Real member experiences
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Professional coaching, supportive trainers, a clean premium
                    space, positive vibes, and visible transformation are the most
                    common themes across Dreamland Athletics reviews.
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#e7b826] mb-2">
                      Why members recommend us
                    </p>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li>• Personalized guidance</li>
                      <li>• Friendly and motivating environment</li>
                      <li>• Professional, knowledgeable coaches</li>
                      <li>• Clean and modern studio space</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#e7b826] mb-2">
                  Member Reviews
                </p>
                <h2 className="text-3xl md:text-5xl">
                  What people are saying
                </h2>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-white hover:text-[#e7b826] transition"
              >
                View all on Google
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}