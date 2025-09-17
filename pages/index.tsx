export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gray-100">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-6">
          Style2Me
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          Discover the future of fashion. AI-powered outfit building,
          personalized recommendations, and a platform for small fashion
          brands.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
            Join Waitlist
          </button>
          <button className="px-6 py-3 bg-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-400 transition">
            For Brands
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Style2Me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <span className="text-4xl mb-4 block">🧑‍🎨</span>
            <h3 className="font-bold text-lg">AI Stylist</h3>
            <p className="text-gray-600">
              Get personalized outfit recommendations tailored to your style.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <span className="text-4xl mb-4 block">🛍️</span>
            <h3 className="font-bold text-lg">Brand Discovery</h3>
            <p className="text-gray-600">
              Discover new fashion labels and support small creators.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <span className="text-4xl mb-4 block">❤️</span>
            <h3 className="font-bold text-lg">Favorites</h3>
            <p className="text-gray-600">
              Save your favorite outfits and build your dream wardrobe.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
            <span className="text-4xl mb-4 block">📱</span>
            <h3 className="font-bold text-lg">Seamless App</h3>
            <p className="text-gray-600">
              A modern app experience built for fashion lovers.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-8 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold mb-8">Your Wardrobe, Smarter</h2>
        <div className="flex justify-center">
          <div className="w-72 h-[500px] bg-white rounded-3xl shadow-xl flex items-center justify-center text-gray-500">
            App Preview Here 📱
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 bg-gray-300">
        <p>© {new Date().getFullYear()} Style2Me. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
