import React, { useEffect, useState } from "react";
import clientServer from "../api/client.js";
import { Link } from "react-router-dom";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setkeyword] = useState("");

  const fetchJobs = async () => {
    try {
      const res = await clientServer.get(`/jobs?keword=${keyword}`);
      setJobs(res.data.jobs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [keyword]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Available Jobs</h1>
        <p className="text-gray-500 mt-2"> Explore freelance opportunities</p>
      </div>
      <div className="mb-8">

  <input
    type="text"
    placeholder="Search jobs..."
    value={keyword}
    onChange={(e) =>
      setKeyword(e.target.value)
    }
    className="w-full md:w-96 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
  />

</div>
      {
  jobs.length === 0 && (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">
        No Jobs Found
      </h2>

      <p className="text-gray-500 mt-2">
        No jobs available right now.
      </p>
    </div>
  )
}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {jobs.map((job) => (
          <Link to={`/jobs/${job._id}`} key={job._id}>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <p className="text-gray-600 mt-3 line-clamp-3">
                {job.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-center">
                  {" "}
                  ₹ {job.budget}
                </span>
                <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                  {job.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Job;
