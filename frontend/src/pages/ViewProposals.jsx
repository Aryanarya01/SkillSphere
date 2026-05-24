import React, { useEffect, useState } from "react";
import clientServer from "../api/client.js";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slices/authSlice.js";
import ReviewForm from "../components/ReviewForm.jsx";
import socket from "../socket.js";
import toast from "react-hot-toast";

const ViewProposals = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [proposals, setProposals] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { JobId } = useParams();
  console.log(JobId);

  const fetchPropsals = async () => {
    try {
      const res = await clientServer.get(`/proposal/job/${JobId}`);
      console.log(res.data);

      setProposals(res.data.proposal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPropsals();
    socket.on("onlineUser", (users) => {
      setOnlineUsers(users);
    });
    return () => {
      socket.off("onlineUser");
    };
  }, []);

  const handelAccept = async (id) => {
    dispatch(setLoading(true));
    try {
      const res = await clientServer.put(`/proposal/accept/${id}`);
      fetchPropsals();
      toast.success("Proposal accepted")
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handelReject = async (id) => {
    dispatch(setLoading(true));
    try {
      const res = await clientServer.put(`/proposal/reject/${id}`);
     toast.success("Proposal rejected")
      fetchPropsals();
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Job Proposals</h1>

        <p className="text-gray-500 mt-2">Manage freelancer applications</p>
      </div>

      {proposals.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">No Proposal Found</h2>

          <p className="text-gray-500 mt-2">No proposals right now.</p>
        </div>
      )}
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proposals.map((proposal) => (
          <div
            key={proposal._id}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <Link to={`/user/${proposal.freelancer._id}`}>
              <h2 className="text-2xl font-bold">
                {proposal.freelancer?.name}
              </h2>
            </Link>
            {onlineUsers.includes(proposal.freelancer._id) && (
              <span className="text-green-500 text-sm font-semibold">
                ● Online
              </span>
            )}
            <p className="text-gray-500 mt-1">{proposal.freelancer?.email}</p>

            <div className="mt-5">
              <h3 className="font-semibold mb-2">Cover Letter</h3>

              <p className="text-gray-600 leading-relaxed">
                {proposal.coverLetter}
              </p>
            </div>

            <div className="mt-5">
              <span className="font-bold">Bid Amount:</span>

              <span className="ml-2">₹ {proposal.bidAmount}</span>
            </div>

            <div className="mt-5">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                {proposal.status}
              </span>
            </div>
            <div className="mt-5">
              <Link
                to={`/chat/${proposal.freelancer._id}`}
                className="bg-black text-white px-4 py-2 rounded-lg inline-block"
              >
                Message
              </Link>
            </div>

            {/* Buttons */}
            {proposal.status === "pending" && (
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => handelAccept(proposal._id)}
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold"
                >
                  {isLoading ? "Accepting..." : "Accept"}
                </button>

                <button
                  onClick={() => handelReject(proposal._id)}
                  className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold"
                >
                  {isLoading ? "Rejecting... " : "Reject"}
                </button>
              </div>
            )}
            <hr className="mt-6" />
            {proposal.status === "accepted" && (
              <ReviewForm
                receiverId={proposal.freelancer?._id}
                jobId={proposal.job?._id}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProposals;
