import { ArrowUpRight, Instagram } from "lucide-react";
import { instagramAccounts } from "@/data/locations";
import InstagramQr from "@/components/InstagramQr";

export default function SocialMediaSection() {
  return (
    <section id="studio-socials" className="bg-[#111] px-5 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-[#e7b826]">Two locations. One Dreamland.</p>
        <h2 className="mb-3 text-center text-3xl md:text-5xl">Follow your community</h2>
        <p className="mb-8 text-center font-sans text-sm text-gray-300">Choose your studio or follow the official brand. Scan a code or tap a button.</p>
        <div className="grid gap-5 md:grid-cols-3">
          {instagramAccounts.map((account) => (
            <article key={account.id} className="flex min-w-0 flex-col items-center rounded-3xl border border-[#e7b826]/20 bg-gradient-to-br from-[#28231a] to-[#171717] p-6 text-center">
              <div className="flex w-full items-center justify-between"><Instagram className="h-6 w-6 text-[#e7b826]" /><span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-widest">{account.label}</span></div>
              <h3 className="mt-5 text-2xl">{account.city}</h3>
              <p className="mb-6 mt-2 break-all font-sans text-sm text-[#e7b826]">{account.handle}</p>
              <div className="mt-auto"><InstagramQr account={account} /></div>
              <a href={account.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e7b826] px-5 py-3 font-sans text-sm font-semibold text-black transition hover:bg-[#ffd84e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Follow {account.label} <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
