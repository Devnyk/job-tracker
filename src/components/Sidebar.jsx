import { Briefcase, Settings, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-indigo-600 text-white p-6 flex flex-col gap-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <button className="flex items-center gap-2 hover:text-gray-200">
          <Briefcase size={18} /> Jobs
        </button>
        <button className="flex items-center gap-2 hover:text-gray-200">
          <User size={18} /> Profile
        </button>
        <button className="flex items-center gap-2 hover:text-gray-200">
          <Settings size={18} /> Settings
        </button>
      </nav>
    </aside>
  );
}
