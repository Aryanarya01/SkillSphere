import React from 'react'

const ViewProposals = () => {
  const [proposals, setProposals] =
    useState([]);


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Job Proposals
        </h1>

        <p className="text-gray-500 mt-2">
          Manage freelancer applications
        </p>

      </div>

      {/* Proposal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {
          proposals.map((proposal) => (

            <div
              key={proposal._id}
              className="bg-white rounded-2xl shadow-md p-6"
            >

              {/* Freelancer */}
              <h2 className="text-2xl font-bold">
                {
                  proposal.freelancer?.name
                }
              </h2>

              <p className="text-gray-500 mt-1">
                {
                  proposal.freelancer?.email
                }
              </p>

              {/* Cover Letter */}
              <div className="mt-5">

                <h3 className="font-semibold mb-2">
                  Cover Letter
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {
                    proposal.coverLetter
                  }
                </p>

              </div>

              {/* Bid */}
              <div className="mt-5">

                <span className="font-bold">
                  Bid Amount:
                </span>

                <span className="ml-2">
                  ₹ {proposal.bidAmount}
                </span>

              </div>

              {/* Status */}
              <div className="mt-5">

                <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  {proposal.status}
                </span>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">

                <button
                  
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold"
                >
                  Accept
                </button>

                <button
                  
                 
                  className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold"
                >
                  Reject
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default ViewProposals