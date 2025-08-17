export default function Card({ job }) {
  const statusColors = {
    Applied: "bg-blue-100 text-blue-700",
    Interviewing: "bg-yellow-100 text-yellow-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition border border-gray-200">
      <div className="flex items-center gap-4">
        <img
          src={job.logo}
          alt={job.company}
          className="w-12 h-12 rounded-lg object-contain bg-gray-50 p-2"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{job.company}</h3>
          <p className="text-sm text-gray-600">{job.role}</p>
          <p className="text-xs text-gray-400">Applied on {job.dateApplied}</p>
        </div>
      </div>
      <span
        className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${statusColors[job.status]}`}
      >
        {job.status}
      </span>
    </div>
  );
}
