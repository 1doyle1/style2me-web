import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AppStoreBadge from "../components/AppStoreBadge";
import BrandForm from "../components/BrandForm";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Style2Me — AI stylist app</title>
      </Head>

      <NavBar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Find the <span className="text-blue-400">exact</span> pieces you want.
                Build outfits you’ll actually wear.
              </h1>
              <p className="mt-5 text-lg text-gray-300 max-w-xl">
                Style2Me is your AI stylist. Upload inspo, tap to match the real
                products, and get instant outfit ideas based on your taste and budget.
              </p>
              <div className="mt-8 flex items-center gap-4">
                {/* Replace href with your real App Store URL when ready */}
                <AppStoreBadge href="https://apps.apple.com/app/idXXXXXXXXX" />
                <a href="#brands" className="text-sm text-gray-300 hover:text-white underline underline-offset-4">
                  Are you a clothing brand?
                </a>
              </div>
            </div>

            <div className="relative aspect-[9/19.5] w-full max-w-[360px] md:max-w-[420px] justify-self-center">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl"/>
              <Image
                src="/og-image.png"
                alt="Style2Me iOS preview"
                fill
                className="rounded-[2rem] border border-white/10 object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Spot-on matching",
              desc: "We identify exact items (not just lookalikes) and surface verified links to buy.",
            },
            {
              title: "Smart outfit builder",
              desc: "Our AI builds complete fits from your saved items with adjustable vibe, color, and budget.",
            },
            {
              title: "Real-time prices",
              desc: "Pricing, stock, and sales are refreshed continuously across thousands of stores.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For brands */}
      <section id="brands" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">For Brands & Boutiques</h2>
            <p className="mt-4 text-gray-300 max-w-xl">
              Get your catalog in front of high-intent shoppers. We support live
              product feeds, Shopify, CSVs, and simple links. Tell us about your brand
              and we’ll get you set up.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>• Native Shopify & feed support (CSV, JSON, XML).</li>
              <li>• UTM / affiliate-friendly links preserved.</li>
              <li>• Real-time stock and price syncing.</li>
            </ul>
          </div>
          <div>
            <BrandForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

{/* deploy bump 2025-09-17T11:37:01 */}

