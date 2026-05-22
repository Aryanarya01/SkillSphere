import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import clientServer from "../api/client.js";
import { logoutUser } from "../redux/slices/authSlice.js";
import socket from "../socket.js";
import toast from "react-hot-toast";

const Navbar = () => {

  const [count, setCount] =
    useState(0);

  const [open, setOpen] =
    useState(false);

  const navigate =
    useNavigate();

  const dispatch =
    useDispatch();

  const { user } =
    useSelector(
      (state) => state.auth
    );

  const handelLogout =
    async () => {

      try {

        await clientServer.get(
          "/logout"
        );

        dispatch(
          logoutUser()
        );

        navigate("/login");

      } catch (err) {

        console.log(err);

      }

    };

  const fetchNotifications =
    async () => {

      try {

        const res =
          await clientServer.get(
            "/notifications"
          );

        const unread =
          res.data.notifications.filter(
            (n) => !n.read
          );

        setCount(
          unread.length
        );

      } catch (err) {

        console.log(err);

      }

    };

  useEffect(() => {

    fetchNotifications();

    socket.on(
      "newNotification",
      (data) => {

        toast.success(
          data.message
        );

        setCount(
          (prev) => prev + 1
        );

      }
    );

    return () => {

      socket.off(
        "newNotification"
      );

    };

  }, []);

  return (

    <nav className="bg-black text-white px-6 py-4">

      <div className="flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          SkillSphere
        </Link>

     
        <button
          className="md:hidden text-2xl"
          onClick={() =>
            setOpen(!open)
          }
        >
          ☰
        </button>

         
        <div className="hidden md:flex items-center gap-5">

          {user ? (
            <>
              {user.role ===
                "client" && (
                <>
                  <Link to="/jobs/create">
                    Create Job
                  </Link>

                  <Link to="/client-dashboard">
                    Dashboard
                  </Link>

                  <Link to="/profile">
                    Profile
                  </Link>
                </>
              )}

              {user.role ===
                "freelancer" && (
                <>
                  <Link to="/jobs">
                    Find Jobs
                  </Link>

                  <Link to="/saved-jobs">
                    Saved Jobs
                  </Link>

                  <Link to="/freelancer-dashboard">
                    Dashboard
                  </Link>

                  <Link to="/profile">
                    Profile
                  </Link>

                  <Link
                    to="/notifications"
                    className="relative"
                  >
                    🔔

                    {count > 0 && (
                      <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {count}
                      </span>
                    )}

                  </Link>
                </>
              )}

              <button
                onClick={handelLogout}
                className="bg-white text-black px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-white text-black px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>

      {/* MOBILE MENU */}
      {
        open && (

          <div className="flex flex-col gap-4 mt-4 md:hidden">

            {user ? (
              <>
                {user.role ===
                  "client" && (
                  <>
                    <Link to="/jobs/create">
                      Create Job
                    </Link>

                    <Link to="/client-dashboard">
                      Dashboard
                    </Link>

                    <Link to="/profile">
                      Profile
                    </Link>
                  </>
                )}

                {user.role ===
                  "freelancer" && (
                  <>
                    <Link to="/jobs">
                      Find Jobs
                    </Link>

                    <Link to="/saved-jobs">
                      Saved Jobs
                    </Link>

                    <Link to="/freelancer-dashboard">
                      Dashboard
                    </Link>

                    <Link to="/profile">
                      Profile
                    </Link>

                    <Link to="/notifications">
                      Notifications ({count})
                    </Link>
                  </>
                )}
                {user.role === "admin" && ( <> <Link to="/admin_dashboard">Dashboard</Link> <Link to="/profile">Profile</Link> </> )}
                <button
                  onClick={handelLogout}
                  className="bg-white text-black px-4 py-2 rounded-lg w-fit"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-white text-black px-4 py-2 rounded-lg w-fit"
                >
                  Register
                </Link>
              </>
            )}

          </div>

        )
      }

    </nav>

  );

};

export default Navbar;