import NavBar from "../components/NavBar";

export default function Settings() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>
        <p>Edit your style preferences here.</p>
      </div>
    </div>
  );
}
