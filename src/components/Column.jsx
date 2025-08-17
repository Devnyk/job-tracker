import { Droppable, Draggable } from "@hello-pangea/dnd";
import Card from "./Card";

export default function Column({ title, jobs, onAddJob }) {
  const headerColors = {
    Applied: "text-blue-600 bg-blue-50",
    Interviewing: "text-yellow-600 bg-yellow-50",
    Offer: "text-green-600 bg-green-50",
    Rejected: "text-red-600 bg-red-50",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col min-h-[220px] max-h-[85vh] overflow-y-auto">
      {/* Header */}
      <div
        className={`flex justify-between items-center px-2 py-2 rounded-md mb-3 ${headerColors[title]}`}
      >
        <h2 className="font-semibold text-sm sm:text-base">{title}</h2>
        <span className="text-xs text-gray-500">{jobs.length}</span>
      </div>

      {/* Droppable area */}
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex-1 flex flex-col gap-3"
          >
            {jobs.map((job, index) => (
              <Draggable key={job.id} draggableId={job.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Card job={job} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Add new job */}
      <button
        onClick={() => onAddJob(title)}
        className="mt-4 w-[60%] self-center py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
      >
        + Add Job
      </button>
    </div>
  );
}
