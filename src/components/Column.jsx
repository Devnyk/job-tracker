import { Droppable, Draggable } from "@hello-pangea/dnd";
import Card from "./Card";

export default function Column({ title, jobs }) {
  const headerColors = {
    Applied: "text-blue-600",
    Interviewing: "text-yellow-600",
    Offer: "text-green-600",
    Rejected: "text-red-600",
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 flex-1 min-w-[250px] border">
      <h2 className={`font-bold text-lg mb-4 ${headerColors[title]}`}>
        {title} <span className="text-sm text-gray-400">({jobs.length})</span>
      </h2>
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col gap-4 min-h-[200px]"
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
    </div>
  );
}
