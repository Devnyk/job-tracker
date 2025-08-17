import { useContext } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { JobContext } from "../context/JobContext";
import Column from "../components/Column";

export default function Dashboard() {
  const { jobs, setJobs } = useContext(JobContext);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      const sourceCol = [...jobs[source.droppableId]];
      const destCol = [...jobs[destination.droppableId]];
      const [movedItem] = sourceCol.splice(source.index, 1);
      movedItem.status = destination.droppableId;
      destCol.splice(destination.index, 0, movedItem);

      setJobs({
        ...jobs,
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol,
      });
    } else {
      const col = [...jobs[source.droppableId]];
      const [movedItem] = col.splice(source.index, 1);
      col.splice(destination.index, 0, movedItem);
      setJobs({ ...jobs, [source.droppableId]: col });
    }
  };

  // Add new job handler
  const handleAddJob = (status) => {
    const newJob = {
      id: Date.now().toString(),
      company: "New Company",
      role: "New Role",
      dateApplied: new Date().toLocaleDateString(),
      logo: "https://via.placeholder.com/40",
      status,
    };

    setJobs({
      ...jobs,
      [status]: [...jobs[status], newJob],
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 auto-rows-min">
        {Object.entries(jobs).map(([status, jobsList]) => (
          <div key={status} className="flex flex-col">
            <Column title={status} jobs={jobsList} onAddJob={handleAddJob} />
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
