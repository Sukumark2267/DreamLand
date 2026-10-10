import Link from "next/link";

export default function Newsletter() {
  return (
    <section id="Newsletter" className="bg-[#e7b826] px-5 py-14 text-black">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em]">Your next chapter starts here</p>
        <h2 className="mt-4 text-4xl uppercase md:text-6xl">Join the Dreamland community</h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base">Tell our team about your goals and find the membership or coaching programme that fits you.</p>
        <Link href="/ContactUs#contact" className="mt-7 inline-flex rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#e7b826] hover:bg-neutral-800">Join the Elite</Link>
      </div>
    </section>
  );
}
