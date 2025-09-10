import NavBar from "../components/NavBar";

export default function Profile() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
        <p>Manage your account details here.</p>
      </div>
    </div>
  );
}
