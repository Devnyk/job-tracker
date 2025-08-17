import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import dp from "../assets/devmy.jpg";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow p-4 sticky top-0 z-40">
      <h1 className="text-2xl font-bold text-indigo-600">Job Tracker</h1>
      <div className="flex items-center gap-4">
        <SearchBar />
        <img
          src= {dp}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
