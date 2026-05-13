import React, { useState } from 'react'

const ViewProposals = () => {

    const [proposals, setProposals]  = useState([]);

  const fetchPropsals = async()=>{
    try{

    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>ViewProposals</div>
  )
}

export default ViewProposals