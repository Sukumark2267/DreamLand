import Image from "next/image";

export default function StudioTimings() {
  return (
    <section className="bg-[#111] text-yellow-400 py-16 border-y-8 border-yellow-400 relative overflow-hidden">
      {/* Caution Stripes (top & bottom) */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[repeating-linear-gradient(-45deg,_#fcd232,_#fcd232_20px,_#2b2b2b_20px,_#2b2b2b_40px)]" />
      <div className="absolute bottom-0 left-0 w-full h-3 bg-[repeating-linear-gradient(-45deg,_#fcd232,_#fcd232_20px,_#2b2b2b_20px,_#2b2b2b_40px)]" />

      {/* Header */}
      <div className="relative flex flex-col items-center gap-4 mb-10">
        {/* <Image
          src="/images/logo/dl_icon_white_empty.png"
          alt="Dreamland Athletics Logo"
          width={100}
          height={100}
          className="object-contain"
        /> */}
        <h2 className="text-2xl md:text-5xl text-center">
          {/* DREAMLAND ATHLETICS{" "} */}
          <span className="text-white font-medium">STUDIO TIMINGS</span>
        </h2>
      </div>

      {/* Timings Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 text-center">
        {/* Monday */}
        <div className="bg-[#3a3a3a27] border border-yellow-400 rounded-lg p-6 hover:-translate-y-1 transition-transform">
          <h3 className="bg-yellow-400 text-black text-3xl py-1 rounded mb-2">
            MONDAY
          </h3>
          <p>6 AM - 2 PM</p>
          <p>3:30 PM - 9 PM</p>
        </div>

        {/* Tuesday */}
        <div className="bg-[#3a3a3a27] border border-yellow-400 rounded-lg p-6 hover:-translate-y-1 transition-transform">
          <h3 className="bg-yellow-400 text-black text-3xl py-1 rounded mb-2">
            TUESDAY
          </h3>
          <p>6 AM - 2 PM</p>
          <p className="italic text-yellow-400">Break (2 PM - 3:30 PM)</p>
          <p>3:30 PM - 9 PM</p>
        </div>

        {/* Wednesday */}
        <div className="bg-[#3a3a3a27] border border-yellow-400 rounded-lg p-6 hover:-translate-y-1 transition-transform">
          <h3 className="bg-yellow-400 text-black text-3xl py-1 rounded mb-2">
            WEDNESDAY
          </h3>
          <p>6 AM - 2 PM</p>
          <p>3:30 PM - 9 PM</p>
        </div>

        {/* Thursday */}
        <div className="bg-[#3a3a3a27] border border-yellow-400 rounded-lg p-6 hover:-translate-y-1 transition-transform">
          <h3 className="bg-yellow-400 text-black text-3xl py-1 rounded mb-2">
            THURSDAY
          </h3>
          <p>6 AM - 2 PM</p>
          <p>3:30 PM - 9 PM</p>
        </div>

        {/* Friday */}
        <div className="bg-[#3a3a3a27] border border-yellow-400 rounded-lg p-6 hover:-translate-y-1 transition-transform">
          <h3 className="bg-yellow-400 text-black text-3xl py-1 rounded mb-2">
            FRIDAY
          </h3>
          <p>6 AM - 2 PM</p>
          <p className="italic text-yellow-400">Break (2 PM - 3:30 PM)</p>
          <p>3:30 PM - 9 PM</p>
        </div>

        {/* Saturday */}
        <div className="bg-[#3a3a3a27] border border-yellow-400 rounded-lg p-6 hover:-translate-y-1 transition-transform">
          <h3 className="bg-yellow-400 text-black text-3xl py-1 rounded mb-2">
            SATURDAY
          </h3>
          <p>10 AM - 12 PM</p>
        </div>

        {/* Sunday */}
        <div className="bg-[#3a3a3a27] border border-yellow-400 rounded-lg p-6 opacity-70">
          <h3 className="bg-yellow-400 text-black text-3xl py-1 rounded mb-2">
            SUNDAY
          </h3>
          <p>Closed</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="relative text-center mt-10 text-lg space-y-1 w-100 md:w-screen">
        <p className="tracking-wide">
          APPOINTMENT BASED — KINDLY CALL US AT
        </p>
        <p>
          <a href="tel:2265032486" className="text-white hover:underline">
            226-503-2486
          </a>{" "}
          |{" "}
          <a href="tel:5488882122" className="text-white hover:underline">
            548-888-2122
          </a>
        </p>
      </div>
    </section>
  );
}
