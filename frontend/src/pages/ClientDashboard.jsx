import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
 
import clientServer from "../api/client";

const ClientDashboard = () => {

  const [jobs, setJobs] = useState([]);

  // =========================
  // FETCH MY JOBS
  // =========================

  const fetchJobs = async () => {
    try {

      const res = await clientServer.get(
        "/jobs/my_jobs"
      );

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

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Client Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your posted jobs
          </p>
        </div>

        <Link
          to="/create-job"
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Create Job
        </Link>

      </div>

      {/* Jobs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          jobs.map((job) => (

            <div
              key={job._id}
              className="bg-white rounded-2xl shadow-md p-6"
            >

              <h2 className="text-2xl font-bold">
                {job.title}
              </h2>

              <p className="text-gray-600 mt-3 line-clamp-3">
                {job.description}
              </p>

              <div className="mt-5 flex justify-between items-center">

                <span className="font-semibold">
                  ₹ {job.budget}
                </span>

                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                  {job.status}
                </span>

              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">

                <Link
                  to={`/jobs/${job._id}`}
                  className="flex-1 text-center bg-gray-200 py-2 rounded-lg"
                >
                  View
                </Link>

                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg">
                  Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
};

export default ClientDashboard;