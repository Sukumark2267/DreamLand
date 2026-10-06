import Link from "next/link";
import { Check, Crown, Dumbbell, Trophy } from "lucide-react";

const indiaMembershipPlans = [
  {
    name: "Peak Result",
    icon: Trophy,
    price: "₹1,999",
    regularPrice: "₹2,299",
    isBestValue: true,
    features: [
      "State-of-the-art equipment",
      "Dreamland ONE KickOff",
      "Online class reservations",
      "Group fitness",
      "CrossFit rooftop",
      "Bring a friend (1 week/month)",
      "Recovery zone",
      "Free Wi-Fi",
      "Physio session discount",
      "Steam bath",
      "Air compressor leg massages",
    ],
  },
  {
    name: "Peak",
    icon: Crown,
    price: "₹1,599",
    regularPrice: "₹1,799",
    features: [
      "State-of-the-art equipment",
      "Dreamland ONE KickOff",
      "Online class reservations",
      "Group fitness",
      "CrossFit rooftop",
    ],
  },
  {
    name: "Base",
    icon: Dumbbell,
    price: "₹1,399",
    features: [
      "State-of-the-art equipment",
      "Dreamland ONE KickOff",
    ],
  },
];

export default function IndiaMembershipSection() {
  return (
    <section id="india-memberships" className="scroll-mt-24 bg-black text-white border-t border-[#e7b826]/20">
      <div className="px-4 pt-8 pb-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#e7b826] md:text-sm">
            India Memberships
          </p>
          <h2 className="text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-5xl">
            Studio Membership — India
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300">
            Vikas Nagar, Dehradun · ₹0 enrollment · Pre-sale ends 31 October 2026
          </p>
        </div>
      </div>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {indiaMembershipPlans.map((plan) => {
              const Icon = plan.icon;

              return (
                <article
                  key={plan.name}
                  className={`relative flex h-full flex-col rounded-2xl border bg-gradient-to-b from-white/10 via-white/5 to-black/80 px-6 pb-6 pt-8 shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 ${
                    plan.isBestValue
                      ? "border-[#e7b826] shadow-[0_0_50px_rgba(231,184,38,0.3)]"
                      : "border-white/10"
                  }`}
                >
                  {plan.isBestValue && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#e7b826] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-black">
                      Best Value
                    </div>
                  )}

                  <div className="mb-1 flex items-center gap-2">
                    <Icon size={22} className="text-[#e7b826]" />
                    <h2 className="text-xl font-bold uppercase tracking-[0.22em] md:text-2xl">
                      {plan.name}
                    </h2>
                  </div>
                  <p className="mb-4 text-xs uppercase tracking-wide text-gray-300 md:text-sm">
                    Monthly Membership
                  </p>
                  <p className="mb-5 text-3xl font-bold text-[#e7b826]">
                    {plan.price}
                    <span className="ml-2 text-sm font-normal text-gray-300">/ month</span>
                  </p>
                  {plan.regularPrice && (
                    <p className="mb-5 text-sm text-gray-400">
                      Regular price: <s>{plan.regularPrice} / month</s>
                    </p>
                  )}
                  <p className="mb-6 rounded-lg border border-[#e7b826]/25 bg-[#e7b826]/10 px-3 py-2 text-sm text-[#e7b826]">
                    Enrollment: ₹0
                  </p>

                  <ul className="mb-5 space-y-2 text-sm text-gray-100">
                    {plan.features.slice(0, 2).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e7b826]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.features.length > 2 && (
                    <details className="mb-5 text-sm text-gray-100">
                      <summary className="cursor-pointer text-[#e7b826]">View all included benefits</summary>
                      <ul className="mt-3 space-y-2">
                        {plan.features.slice(2).map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e7b826]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}

                  <p className="mb-5 mt-auto border-t border-white/10 pt-3 text-xs text-gray-300">
                    Personal training is available at an additional cost.
                    Contact the studio for pricing.
                  </p>

                  <Link
                    href="/ContactUs#india-location"
                    className="w-full rounded-lg bg-[#e7b826] px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#ffd84e]"
                  >
                    Enquire Now
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl uppercase tracking-wide">Membership Details</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-300">
              <li>An annual maintenance fee of ₹99 plus applicable taxes is billed once a year from your joining date.</li>
              <li>A 30-day cancellation notice is required to cancel any membership.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-[#e7b826]/25 bg-[#e7b826]/5 p-6 md:p-8">
            <h2 className="text-2xl uppercase tracking-wide">Gym Etiquette</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl uppercase text-[#e7b826]">Shoes required at all times</h3>
                <p className="mt-2 text-sm leading-7 text-gray-300">No slippers or sandals. No shoes, no entry.</p>
              </div>
              <div>
                <h3 className="text-xl uppercase text-[#e7b826]">Keep your shirt on</h3>
                <p className="mt-2 text-sm leading-7 text-gray-300">Please wear a shirt at all times on the gym floor.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              Looking for the Canada studio plans?
            </p>
            <Link
              href="#memberships"
              className="mt-3 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.16em] text-white transition hover:border-[#e7b826] hover:text-[#e7b826]"
            >
              View Canada Memberships
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
