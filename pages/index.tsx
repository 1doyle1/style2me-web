export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">No More Fashion Gatekeeping.</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Style2Me lets you discover the outfits and brands people try to keep hidden. 
          Find your style, and for brands—get discovered by the next wave of fashion lovers.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
            Join Waitlist
          </button>
          <button className="px-6 py-3 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition">
            Partner With Us
          </button>
        </div>
      </section>

      {/* Why Users Love Us */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Style2Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-3">🚫 Gatekeeping Ends Here</h3>
            <p className="text-gray-600">
              Find the exact clothing pieces others try to keep secret.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">🤖 AI-Powered Search</h3>
            <p className="text-gray-600">
              Upload a photo or browse—Style2Me finds the real thing.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">⚡ Stay Ahead</h3>
            <p className="text-gray-600">
              Discover underground fashion labels before they blow up.
            </p>
          </div>
        </div>
      </section>

      {/* For Brands */}
      <section className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">For Fashion Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-2">👀 Get Seen</h3>
            <p className="text-gray-600">
              Put your products in front of style-hungry users actively looking for new fashion.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">📈 Grow Fast</h3>
            <p className="text-gray-600">
              Reach a new audience who loves discovering niche and indie labels.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">💳 Drive Sales</h3>
            <p className="text-gray-600">
              Direct traffic straight to your store and boost conversions.
            </p>
          </div>
        </div>
        <button className="mt-10 px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
          Work With Us
        </button>
      </section>

      {/* Showcase */}
      <section className="py-20 px-8 text-center bg-gray-200">
        <h2 className="text-3xl font-bold mb-8">Your AI-Powered Fashion Feed</h2>
        <div className="flex justify-center">
          <div className="w-72 h-[500px] bg-white rounded-3xl shadow-xl flex items-center justify-center text-gray-500">
            App Preview Here 📱
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Be Part of the Future of Fashion</h2>
        <p className="text-gray-700 mb-8">
          Whether you’re a fashion lover or a brand—Style2Me is built for you.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
            Join Waitlist
          </button>
          <button className="px-6 py-3 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition">
            Partner With Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 bg-gray-300">
        <p>© {new Date().getFullYear()} Style2Me. All rights reserved.</p>
      </footer>
    </div>
  );
}
