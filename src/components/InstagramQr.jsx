import Image from "next/image";

export default function InstagramQr({ account, compact = false }) {
  return (
    <a href={account.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${account.label} Instagram: ${account.handle}`} className="inline-flex shrink-0 flex-col items-center gap-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7b826]">
      <Image src={account.qr} alt={`Scan to follow ${account.handle} on Instagram`} width={compact ? 112 : 164} height={compact ? 112 : 164} className="rounded-xl bg-white" unoptimized />
      <span className="font-sans text-xs text-gray-300">Scan or tap to follow</span>
    </a>
  );
}
