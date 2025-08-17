import { createContext, useState } from "react";
import { jobsData } from "../data/JobsData";

export const JobContext = createContext();

export default function JobProvider({ children }) {
  const [jobs, setJobs] = useState(jobsData);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
}
