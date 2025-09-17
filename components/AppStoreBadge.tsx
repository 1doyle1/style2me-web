import Image from "next/image";

export default function AppStoreBadge({ href }: { href: string }) {
  return (
    <a id="download" href={href} target="_blank" rel="noreferrer" className="inline-flex">
      <Image src="/app-store-badge.svg" alt="Download on the App Store" width={180} height={54} />
    </a>
  );
}
