import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
      <Search size={18} className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search jobs..."
        className="bg-transparent outline-none text-sm"
      />
    </div>
  );
}
