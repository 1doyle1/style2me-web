export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Style2Me. All rights reserved.</p>
        <div className="text-sm text-gray-400">
          <a href="#brands" className="hover:text-white">For Brands</a>
          <span className="mx-3">•</span>
          <a href="mailto:hello@style2me.com" className="hover:text-white">hello@style2me.com</a>
        </div>
      </div>
    </footer>
  );
}
