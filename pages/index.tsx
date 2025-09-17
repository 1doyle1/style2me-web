export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">Style smarter, not harder.</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Style2Me helps you discover fashion that fits your vibe, get AI-powered outfit ideas, 
          and connect with emerging brands—all in one app.
        </p>
        <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
          Join the Waitlist
        </button>
      </section>

      {/* Value Props */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why You’ll Love Style2Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-3">⏱️ Save Time</h3>
            <p className="text-gray-600">
              Let AI curate outfits for you—no more endless scrolling.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">🛍️ Discover Brands</h3>
            <p className="text-gray-600">
              Find unique fashion labels before everyone else.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">❤️ Build Your Style</h3>
            <p className="text-gray-600">
              Save looks you love and create your personalized wardrobe.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-2">1. Upload or Browse</h3>
            <p className="text-gray-600">Start with a look you like or explore curated feeds.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">2. AI Recommends</h3>
            <p className="text-gray-600">Get smart suggestions that fit your vibe and budget.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">3. Shop & Save</h3>
            <p className="text-gray-600">Find where to buy or save outfits for later.</p>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 px-8 text-center bg-gray-200">
        <h2 className="text-3xl font-bold mb-8">Your AI-Powered Fashion Feed</h2>
        <div className="flex justify-center">
          <div className="w-72 h-[500px] bg-white rounded-3xl shadow-xl flex items-center justify-center text-gray-400">
            App Preview Here 📱
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Launching Soon</h2>
        <p className="text-gray-700 mb-8">
          Be the first to experience Style2Me when we launch.
        </p>
        <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
          Join the Waitlist
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 bg-gray-300">
        <p>© {new Date().getFullYear()} Style2Me. All rights reserved.</p>
      </footer>
    </div>
  );
}
