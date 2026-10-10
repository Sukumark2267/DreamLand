import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import { indiaInstagram, canadaInstagram, officialInstagram, indiaHours } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="!bg-[#181818] !px-5 !py-12 !text-left border-t border-white/10 font-sans text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-7 sm:flex-row sm:items-center">
          <Image src="/images/logo/dl_primary_logo.png" alt="Dreamland Athletics" width={260} height={65} className="h-auto w-60" />
          <div className="flex flex-wrap gap-5 text-sm text-gray-200">
            <Link href="/AboutUs">About</Link><Link href="/WhatWeOffer">What We Offer</Link><Link href="/MemberShip">Memberships</Link><Link href="/ContactUs">Contact</Link>
          </div>
        </div>
        <div className="grid gap-6 py-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#222] p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#e7b826]">Canada</p>
            <h3 className="text-2xl">Brampton, Ontario</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">860 North Park Drive, Brampton, L6S 4N5<br />(Back side of the day care)</p>
            <p className="mt-3 text-sm leading-6 text-gray-300">Mon–Fri: 6:00 am – 9:00 pm · Lunch: 2:00 pm – 4:00 pm<br />Sat: 10:00 am – 2:00 pm</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm"><a href="tel:+12265772122">226-577-2122</a><a href="tel:+12265032486">226-503-2486</a></div>
            <a href={canadaInstagram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-[#e7b826]"><Instagram size={18} /> @dreamland_brampton <ArrowUpRight size={16} /></a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#222] p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#e7b826]">India</p>
            <h3 className="text-2xl">Vikas Nagar, Dehradun</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">Dinkar Vihar, Vikas Nagar<br />Dehradun, Uttarakhand, India</p>
            <p className="mt-3 text-sm leading-6 text-gray-300">{indiaHours}<br />Saturday: Closed</p>
            <a href="tel:+919639202122" className="mt-4 block text-sm">+91 96392 02122</a>
            <a href={indiaInstagram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-[#e7b826]"><Instagram size={18} /> @dreamland_vikasnagar <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <a href="mailto:dreamlandathletics@gmail.com" className="text-sm text-gray-200">dreamlandathletics@gmail.com</a>
          <a href={officialInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#e7b826]"><Instagram size={18} /> Official brand Instagram <ArrowUpRight size={16} /></a>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/15 pt-5 text-xs text-gray-400 sm:flex-row"><p>© {new Date().getFullYear()} Dreamland Athletics</p><div className="flex gap-5"><Link href="/PrivacyPolicy">Privacy Policy</Link><Link href="/TermsAndConditions">Terms &amp; Conditions</Link></div></div>
      </div>
    </footer>
  );
}
