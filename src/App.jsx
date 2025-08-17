import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import JobProvider from "./context/JobContext";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <JobProvider>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar (slide-in on mobile, static on desktop) */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header (blue in mobile, white in desktop) */}
          <Header onToggleSidebar={() => setIsSidebarOpen(true)} />

          {/* Dashboard */}
          <main className="flex-1 overflow-y-auto">
            <Dashboard />
          </main>
        </div>
      </div>
    </JobProvider>
  );
}
