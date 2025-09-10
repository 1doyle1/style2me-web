import NavBar from "../components/NavBar";

export default function Favorites() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">❤️ Favorites</h1>
        <p>Your saved outfits and items will appear here.</p>
      </div>
    </div>
  );
}
