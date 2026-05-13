import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import clientServer from "../api/client.js";
import { logoutUser } from "../redux/slices/authSlice.js";

const Navbar = () => {
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
              <Link to="/dashboard">Dashboard</Link>
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
