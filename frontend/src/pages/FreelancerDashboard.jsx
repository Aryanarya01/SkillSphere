

import React, { useEffect, useState } from 'react'
import clientServer from '../api/client.js';

const FreelancerDashboard = () => {

    const [proposals,setProposals] = useState([]);

    const fetchPropsals = async()=>{
        try{
            const res = await clientServer.get("/proposal/my_proposals")
            console.log(res.data);
    setProposals(res.data.proposals);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchPropsals()
    },[])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Freelancer Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Track your job applications
        </p>

      </div>

      {/* Proposal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          proposals.map((proposal) => (

            <div
              key={proposal._id}
              className="bg-white rounded-2xl shadow-md p-6"
            >

              {/* Job Title */}
              <h2 className="text-2xl font-bold">
                {
                  proposal.job?.title
                }
              </h2>

              {/* Description */}
              <p className="text-gray-600 mt-3 line-clamp-3">
                {
                  proposal.job?.description
                }
              </p>

              {/* Bid Amount */}
              <div className="mt-5">

                <span className="font-semibold">
                  Your Bid:
                </span>

                <span className="ml-2">
                  ₹ {proposal.bidAmount}
                </span>

              </div>

              {/* Status */}
              <div className="mt-5">

                <span
                  className={`px-4 py-2 rounded-full text-white text-sm
                  ${
                    proposal.status ===
                    "accepted"
                      ? "bg-green-500"
                      : proposal.status ===
                        "rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {proposal.status}
                </span>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default FreelancerDashboard