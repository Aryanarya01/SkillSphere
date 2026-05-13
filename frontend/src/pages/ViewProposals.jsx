import React, { useEffect, useState } from "react";
import clientServer from "../api/client.js";
import { useParams } from "react-router-dom";

const ViewProposals = () => {
  const [proposals, setProposals] = useState([]);
  const { JobId } = useParams();
  const fetchPropsals = async () => {
    try {
      const res = await clientServer.get(`/proposal/job/${JobId}`);
      setProposals(res.data.proposal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPropsals();
  }, []);

  const handelAccept = async (id) => {
    try {
      const res = await clientServer.put(`/proposal/accept/${id}`);
      alert(res.data.proposal);
      fetchPropsals();
    } catch (err) {
      console.log(err);
    }
  };

  const handelReject = async (id) => {
    try {
      const res = await clientServer.put(`/proposal/reject/${id}`);
      setProposals(res.data.proposal);
      fetchPropsals();
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div>
        <div>
          <h1 className="text-4xl font-bold">
          Job Proposals
        </h1>

        <p className="text-gray-500 mt-2">
          Manage freelancer applications
        </p>
        </div>
      </div>
  );
};

export default ViewProposals;
