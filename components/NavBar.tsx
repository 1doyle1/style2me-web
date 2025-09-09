import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-950 text-white flex justify-between px-6 py-4 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-400">Style2Me</h1>
      <div className="flex gap-6">
        <Link href="/">Explore</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/style">Style Chat</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}
