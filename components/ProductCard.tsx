import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition">
      <img src={product.image_url || product.cropped_image_url || "/placeholder.png"} alt={product.title} className="w-full h-64 object-cover"/>
      <div className="p-3">
        <h3 className="font-bold text-sm">{product.title || "Product"}</h3>
        <p className="text-sm text-gray-400">{product.brand || "Brand"}</p>
        <p className="text-blue-400 font-semibold">{product.price_text || ""}</p>
        <Link href={product.product_url || "#"} target="_blank" className="text-sm text-green-400 hover:underline">
          Buy Now →
        </Link>
      </div>
    </div>
  );
}
