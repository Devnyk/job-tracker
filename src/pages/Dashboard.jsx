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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        {Object.entries(jobs).map(([status, jobsList]) => (
          <Column key={status} title={status} jobs={jobsList} />
        ))}
      </div>
    </DragDropContext>
  );
}
