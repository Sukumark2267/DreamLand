import Image from "next/image";
import Link from "next/link";
import { Camera, Dumbbell, Images, MapPin, Users } from "lucide-react";

export const metadata = {
  title: "India Gallery | Vikas Nagar, Dehradun",
  description:
    "Dreamland Athletics India gallery for the new Vikas Nagar, Dehradun branch.",
  alternates: {
    canonical: "/india/gallery",
  },
};

const galleryPlaceholders = [
  { label: "Training Floor", icon: Dumbbell },
  { label: "Studio Spaces", icon: Images },
  { label: "Community", icon: Users },
  { label: "Member Moments", icon: Camera },
  { label: "Strength Zone", icon: Dumbbell },
];

export default function IndiaGalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 pb-14 pt-20 md:pb-20 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,184,38,0.18),transparent_48%)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e7b826]/30 bg-[#e7b826]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#e7b826]">
            <MapPin size={15} />
            Vikas Nagar, Dehradun
          </div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#e7b826] md:text-sm">
            India Gallery
          </p>
          <h1 className="text-4xl font-bold uppercase leading-tight md:text-6xl">
            A new Dreamland is taking shape
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-lg">
            The India branch gallery is ready for its first studio and community
            photos. New images will be added as soon as the client shares them.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <div className="group relative flex h-[320px] items-center justify-center overflow-hidden rounded-[24px] border border-[#e7b826]/25 bg-gradient-to-br from-[#e7b826]/20 via-white/5 to-black md:col-span-2 md:row-span-2 md:h-[660px]">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="relative flex flex-col items-center px-8 text-center">
                <Image
                  src="/images/logo/logo-primary.png"
                  alt="Dreamland Athletics India"
                  width={130}
                  height={130}
                  className="mb-6 h-24 w-24 object-contain"
                />
                <h2 className="text-3xl uppercase md:text-5xl">India branch</h2>
                <p className="mt-3 max-w-md text-sm text-gray-300 md:text-base">
                  Dinkar Vihar, Vikas Nagar, Dehradun
                </p>
              </div>
            </div>

            {galleryPlaceholders.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={`relative flex items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-8 text-center ${
                  index === 0 ? "h-[320px] md:h-[320px]" : "h-[230px] md:h-[260px]"
                }`}
              >
                <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,#e7b826_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="relative">
                  <Icon className="mx-auto mb-4 h-8 w-8 text-[#e7b826]" />
                  <p className="text-lg uppercase tracking-[0.16em]">{label}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-500">
                    Photos coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <Link
              href="/ContactUs#india-location"
              className="rounded-full bg-[#e7b826] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#ffd84e]"
            >
              Contact India Studio
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.16em] text-white transition hover:border-[#e7b826] hover:text-[#e7b826]"
            >
              View Canada Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
