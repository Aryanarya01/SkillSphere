import React, { useState } from 'react'
import clientServer from "../api/client.js";
import { useParams } from 'react-router-dom';

const ViewProposals = () => {

    const [proposals, setProposals]  = useState([]);
  const {JobId}= useParams()
  const fetchPropsals = async()=>{
    try{
      const res = await clientServer.get(`/proposal/job/${JobId}`);
      setProposals(res.data.proposal);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>ViewProposals</div>
  )
}

export default ViewProposals