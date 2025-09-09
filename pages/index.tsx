import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";

export default function Explore() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snap = await getDocs(collection(db, "app", "products", "items"));
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
