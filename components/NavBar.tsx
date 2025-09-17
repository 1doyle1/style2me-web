import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-xl font-extrabold tracking-tight">
          <span className="text-white">Style</span><span className="text-blue-400">2</span><span className="text-white">Me</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#brands" className="text-sm text-gray-300 hover:text-white">For Brands</a>
          <a href="#download" className="text-sm text-gray-300 hover:text-white">Download</a>
        </div>
        <div className="md:hidden">
          <a href="#brands" className="text-sm text-gray-300 hover:text-white">Brands</a>
        </div>
      </div>
    </nav>
  );
}
