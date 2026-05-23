
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import PortfolioProjects from "../components/PortfolioProjects";
import clientServer from "../api/client.js";
const UserProfile = () => {
    const [inspectedUser, setInspectedUser] = useState(null);
    const {id} = useParams();
 const fetchUser = async()=>{
    try{
        const res = await clientServer.get(`/freelancers/${id}`);
        setInspectedUser(res.data.freelancer);
    }catch(err){
        console.log(err)
    }
 }
 

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <img
            src={`http://localhost:9090${inspectedUser?.profilePicture}`}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-black"
          />
           </div>
        
      </div>
    </div>
  );
};

export default UserProfile;
