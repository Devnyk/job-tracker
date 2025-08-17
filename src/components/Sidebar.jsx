import { Briefcase, Settings, User, X } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-indigo-600 text-white p-6 flex-col gap-6 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 z-50`}
      >
        {/* Close button for mobile */}
        <button className="md:hidden mb-4" onClick={onClose}>
          <X size={22} />
        </button>

        <h2 className="text-xl font-bold">Dashboard</h2>
        <nav className="flex flex-col gap-4 mt-6">
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
    </>
  );
}
