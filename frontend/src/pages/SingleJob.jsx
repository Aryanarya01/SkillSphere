import React, { useEffect, useState } from "react";
import clientServer from "../api/client.js";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast"
// ADD THIS INSIDE SingleJob.jsx

import { useSelector } from "react-redux";
const SingleJob = () => {
  const [job, setJob] = useState(null);

  const [proposalData, setProposalData] = useState({
    coverLetter: "",
    bidAmount: "",
  });

  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const fetchJob = async () => {
    try {
      const res = await clientServer.get(`/jobs/${id}`);
      setJob(res.data.job);
    } catch (err) {
      console.log(err);
    }
  };

  const handelChange = (e) => {
    setProposalData({
      ...proposalData,
      [e.target.name]: e.target.value,
    });
  };

  const handelApply = async (e) => {
    e.preventDefault();
    try {
      const res = await clientServer.post(
        `/proposal/apply/${id}`,
        proposalData,
      );
      alert(res.data.message);
      setProposalData({
        coverLetter: "",
        bidAmount: "",
      });
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (!job) {
    return <div className="p-10">Loading...</div>;
  }

  const handleSaveJob = async()=>{
    try{
      const res = clientServer.post(`/jobs/save/${id}`);
      toast.success(res.data.message)
    }catch(err){
      toast.error(err.response?.data?.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800">{job.title}</h1>
        <p className="text-gray-600 mt-6 leading-relaxed">{job.description}</p>
        <div className="mt-6">
          <span className="font-bold text-xl">Budget:</span>
          <span className="ml-2 text-lg">₹ {job.budget}</span>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-3">Skills Required</h2>
          <div className="flex gap-3 flex-wrap">
            {job.skillsRequired?.map((skill, index) => (
              <span
                key={index}
                className="bg-black text-white px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full">
            {job.status}
          </span>
        </div>
        {user.role === "freelancer" && (
          <button
            onClick={handleSaveJob}
            className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Save Job
          </button>
        )}

        {user?.role === "freelancer" && (
          <div className="mt-10 border-t pt-8">
            <h2 className="text-2xl font-bold mb-5">Apply For This Job</h2>
            <form className="space-y-5" onSubmit={handelApply}>
              {/* coverLetter */}
              <div>
                <label className="block mb-2 font-medium">Cover Letter</label>
                <textarea
                  className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
                  name="coverLetter"
                  onChange={handelChange}
                  value={proposalData.coverLetter}
                  placeholder="Write your proposal..."
                />
              </div>

              {/* bidAmount */}
              <div>
                <label className="block mb-2 font-medium">Bid Amount</label>
                <input
                  className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
                  name="bidAmount"
                  onChange={handelChange}
                  value={proposalData.bidAmount}
                  type="number"
                  placeholder="Enter your bid amount"
                />
              </div>
              {/* submit */}
              <button
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                type="submit"
              >
                Submit Proposal
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleJob;
