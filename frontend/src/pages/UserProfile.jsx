import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews.jsx";
import PortfolioProjects from "../components/PortfolioProjects.jsx";
import clientServer, { BASE_URL } from "../api/client.js";
const UserProfile = () => {
  const [inspectedUser, setInspectedUser] = useState(null);
  const { id } = useParams();
  const fetchUser = async () => {
    try {
      const res = await clientServer.get(`/user/${id}`);
      setInspectedUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
    console.log(inspectedUser);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <img
            src={`${BASE_URL}${inspectedUser?.profilePicture}`}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-black"
          />

          {/* Name */}
          <h1 className="text-4xl font-bold mt-5">{inspectedUser?.name}</h1>

          {/* Username */}
          <p className="text-gray-500 mt-2">@{inspectedUser?.username}</p>

          {/* Role */}
          <span className="mt-4 bg-black text-white px-4 py-2 rounded-full capitalize">
            {inspectedUser?.role}
          </span>
          {inspectedUser?.role === "freelancer" && (
            <div className="mt-6 bg-gray-100 rounded-xl p-5">
              <h2 className="text-gray-500">Verification Status</h2>

              <p className="text-lg font-semibold mt-2">
                {inspectedUser?.isVerified
                  ? "✔ Verified Freelancer"
                  : "Not Verified"}
              </p>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="text-gray-500">Email</h2>

            <p className="text-lg font-semibold mt-2">{inspectedUser?.email}</p>
          </div>

          {inspectedUser?._id && <Reviews userId={inspectedUser._id} />}

          {inspectedUser?._id && (
            <PortfolioProjects userId={inspectedUser._id} />
          )}

          {/* Account Status */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="text-gray-500">Account Status</h2>

            <p className="text-lg font-semibold mt-2">
              {inspectedUser?.active ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
