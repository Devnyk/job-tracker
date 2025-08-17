export default function Card({ job }) {
  const statusColors = {
    Applied: "bg-blue-100 text-blue-700",
    Interviewing: "bg-yellow-100 text-yellow-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white p-3 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-transform duration-200">
      {/* Logo + Info */}
      <div className="flex items-center gap-3">
        <img
          src={job.logo}
          alt={job.company}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-contain bg-gray-50 p-1 border"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
            {job.company}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            {job.role}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-[11px] sm:text-xs text-gray-400 italic">
          {job.dateApplied}
        </span>
        <span
          className={`px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full ${statusColors[job.status]}`}
        >
          {job.status}
        </span>
      </div>
    </div>
  );
}
