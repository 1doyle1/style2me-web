import NavBar from "../components/NavBar";

export default function StyleChat() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">🧑‍🎨 Style Chat</h1>
        <p>Talk to the AI stylist (coming soon).</p>
      </div>
    </div>
  );
}
