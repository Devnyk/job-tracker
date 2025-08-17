import { Menu } from "lucide-react";
import SearchBar from "./SearchBar";
import dp from "../assets/devmy.jpg";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-40">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between bg-white shadow px-4 py-3">
        {/* Left: Logo */}
        <h1 className="text-lg sm:text-xl font-bold text-indigo-600">
          Job Tracker
        </h1>

        {/* Right: Search + Avatar */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block w-full max-w-xs">
            <SearchBar />
          </div>
          <img
            src={dp}
            alt="User"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 shadow-sm"
          />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between bg-indigo-600 px-4 py-3 text-white">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-lg hover:bg-indigo-700"
            onClick={onToggleSidebar}
          >
            <Menu size={22} />
          </button>
          <h1 className="text-lg font-bold">Job Tracker</h1>
        </div>

        {/* Right: Avatar */}
        <img
          src={dp}
          alt="User"
          className="w-9 h-9 rounded-full border border-white/30 shadow-sm"
        />
      </div>
    </header>
  );
}
