import React, { useEffect, useState } from 'react'
import clientServer from "../api/client.js";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/slices/authSlice.js';
const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const {isLoading} = useSelector((state)=>state.auth);
  const dispatch = useDispatch()
  const fetchJobs = async()=>{
    try{
      const res = await clientServer.get("/admin/jobs");
      setJobs(res.data.jobs)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchJobs();
  },[])

  const handleDelete = async(id)=>{
    dispatch(setLoading(true))
    try{
      const res = await clientServer.delete(`/admin/job/${id}`);
      fetchJobs()
      toast.success("Job Deleted")
    }catch(err){
      console.log(err);
      toast.err("Error Deleting Job")
    }finally{
      dispatch(setLoading(false))
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold">
          Manage Jobs
        </h1>

        <p className="text-gray-500 mt-2">
          Admin job management panel
        </p>

      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full min-w-700px">

          <thead className="bg-black text-white">

            <tr>

              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-left">
                Client
              </th>

              <th className="p-4 text-left">
                Budget
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {
              jobs.map((job) => (

                <tr
                  key={job._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {job.title}
                  </td>

                  <td className="p-4 break-all">
                    {
                      job.client?.name
                    }
                  </td>

                  <td className="p-4">
                    ₹ {job.budget}
                  </td>

                  <td className="p-4 capitalize">
                    {job.status}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        handleDelete(
                          job._id
                        )
                      }
                      className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm md:text-base"
                    >
                      {isLoading ? "Deleting..." : "Delete"}
                    </button>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageJobs