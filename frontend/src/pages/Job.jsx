import React, { useEffect, useState } from "react";
import clientServer from "../api/client.js";

const Job = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await clientServer.get("/jobs");
      setJobs(res.data.jobs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Available Jobs</h1>
        <p className="text-gray-500 mt-2"> Explore freelance opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            key={job._id}
          >
            <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600 mt-3 line-clamp-3">{job.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-semibold text-center"> ₹ {job.budget}</span>
              <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                {job.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
