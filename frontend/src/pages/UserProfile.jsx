
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
import PortfolioProjects from "../components/PortfolioProjects";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user?._id);
 
  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <img
            src={`http://localhost:9090${user?.profilePicture}`}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-black"
          />

          {/* Name */}
          <h1 className="text-4xl font-bold mt-5">{user?.name}</h1>

          {/* Username */}
          <p className="text-gray-500 mt-2">@{user?.username}</p>

          {/* Role */}
          <span className="mt-4 bg-black text-white px-4 py-2 rounded-full capitalize">
            {user?.role}
          </span>
      {user?.role === "freelancer" && (
  <div className="mt-6 bg-gray-100 rounded-xl p-5">
    <h2 className="text-gray-500">
      Verification Status
    </h2>

    <p className="text-lg font-semibold mt-2">
      {user?.isVerified
        ? "✔ Verified Freelancer"
        : "Not Verified"}
    </p>
  </div>
)}
          <Link
            to="/edit-profile"
            className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Edit Profile
          </Link>
        </div>

        

        {/* User Info */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="text-gray-500">Email</h2>

            <p className="text-lg font-semibold mt-2">{user?.email}</p>
          </div>

          <Reviews userId={user?._id} />

          {
            user.role === "freelancer" && (
              <PortfolioProjects userId={user?._id}/>
            )
          }

          {/* Account Status */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="text-gray-500">Account Status</h2>

            <p className="text-lg font-semibold mt-2">
              {user?.active ? "Active" : "Inactive"}
            </p>
          </div>
          {
            user.role === "freelancer" && (
               <Link to="/add-project"  className="mt-4 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Add Projects
          </Link>
            )
          }
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
