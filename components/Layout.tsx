import Link from "next/link";
import { FaCompass, FaHeart, FaComments, FaUser, FaCog, FaSearch } from "react-icons/fa";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-20 md:w-56 bg-gray-950 p-4 flex flex-col gap-6 sticky top-0 h-screen">
        <h1 className="text-xl font-bold text-blue-400 mb-8 hidden md:block">Style2Me</h1>
        <nav className="flex flex-col gap-6 text-lg">
          <Link href="/" className="flex items-center gap-3 hover:text-blue-400">
            <FaCompass /> <span className="hidden md:inline">Explore</span>
          </Link>
          <Link href="/favorites" className="flex items-center gap-3 hover:text-blue-400">
            <FaHeart /> <span className="hidden md:inline">Favorites</span>
          </Link>
          <Link href="/style" className="flex items-center gap-3 hover:text-blue-400">
            <FaComments /> <span className="hidden md:inline">Style Chat</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 hover:text-blue-400">
            <FaUser /> <span className="hidden md:inline">Profile</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-3 hover:text-blue-400">
            <FaCog /> <span className="hidden md:inline">Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top bar with search */}
        <header className="sticky top-0 z-50 bg-gray-900 p-4 flex items-center justify-center shadow-md">
          <div className="w-full max-w-2xl relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for styles, outfits, brands..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
