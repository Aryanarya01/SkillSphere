import React from 'react'

const SavedJobs = () => {


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Saved Jobs
        </h1>

        <p className="text-gray-500 mt-2">
          Your bookmarked jobs
        </p>

      </div>

      {/* Jobs Grid */}
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

              <Link
                to={`/jobs/${job._id}`}
                className="block text-center mt-6 bg-black text-white py-3 rounded-xl"
              >
                View Job
              </Link>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default SavedJobs