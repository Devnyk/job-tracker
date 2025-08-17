import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import JobProvider from "./context/JobContext";

export default function App() {
  return (
    <JobProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Dashboard />
          </main>
        </div>
      </div>
    </JobProvider>
  );
}
