import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import clientServer from "../api/client.js";
import { logoutUser } from "../redux/slices/authSlice.js";
import { useEffect } from "react";

const Navbar = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handelLogout = async () => {
    try {
      await clientServer.get("/logout");
      dispatch(logoutUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNotifications = async()=>{
    try{
      const res = await clientServer.get("/notifications");
      const unread = res.data.notifications.filter((n)=>!n.read)
      setCount(unread.length)
    }catch(err){
      console.log(err);
      
    }
  }

  useEffect(()=>{
    fetchNotifications()
  },[])

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        SkillSphere
      </Link>

      <div className="flex items-center gap-5">
        {user ? (
          <>
            {user.role === "client" && (
              <>
                <Link to="/jobs/create">Create Job</Link>
                <Link to="/client-dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
              </>
            )}
            {user.role === "freelancer" && (
              <>
                <Link to="/jobs">Find Jobs</Link>
                <Link to="/saved-jobs">Saved Jobs</Link>
                <Link to="/freelancer-dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/notifications">Notifications</Link>
              </>
            )}
            {user.role === "admin" && (
              <>
                <Link to="/admin_dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
              </>
            )}
            <p>{user.name}</p>
            <button
              className="bg-white text-black px-4 py-2 rounded-lg"
              onClick={handelLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link
              className="bg-white text-black px-4 py-2 rounded-lg"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
