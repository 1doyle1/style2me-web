import { useState } from "react";

export default function BrandForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/brand-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setOk(true);
      (form as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      {ok ? (
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-300">
          Thanks! We got your request and will reach out shortly.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300">Brand name *</label>
            <input name="brandName" required placeholder="Acme Studio" className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm text-gray-300">Website</label>
              <input name="website" type="url" placeholder="https://example.com" className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Contact email *</label>
              <input name="email" type="email" required placeholder="you@brand.com" className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm text-gray-300">Contact name</label>
              <input name="contactName" placeholder="Alex Rivera" className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Catalog / feed URL</label>
              <input name="feedUrl" type="url" placeholder="https://brand.com/products.csv" className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300">Message</label>
            <textarea name="message" rows={4} placeholder="Tell us about your brand, catalog size, and preferred integration (Shopify, CSV, etc.)" className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {error && (
            <div className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-red-300">{error}</div>
          )}

          <button disabled={loading} className="w-full rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Submitting…" : "Request to be added"}
          </button>
          <p className="text-xs text-gray-400">We’ll reply within 1–2 business days.</p>
        </form>
      )}
    </div>
  );
}
