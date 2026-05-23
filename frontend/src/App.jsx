import React from "react";
import Login from "./pages/Login.jsx";
import "./index.css";
import Register from "./pages/Register.jsx";
import { BrowserRouter, data, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Job from "./pages/Job.jsx";
import SingleJob from "./pages/SingleJob.jsx";
import CreateJob from "./pages/CreateJob.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import ViewProposals from "./pages/ViewProposals.jsx";
import FreelancerDashboard from "./pages/FreelancerDashboard.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import AdminDashoboard from "./pages/AdminDashoboard.jsx";
import ManageUser from "./pages/ManageUser.jsx";
import ManageJobs from "./pages/ManageJobs.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import SavedJobs from "./pages/SavedJobs.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
import Reviews from "./components/Reviews.jsx";
import Notifications from "./pages/NotificationPage.jsx";
import { useEffect } from "react";
import socket from "./socket.js";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Chats from "./pages/Chats.jsx";
import AddProjects from "./pages/AddProjects.jsx";
import UserProfile from "./pages/UserProfile.jsx";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected :", socket.id);
    });

    if (user?._id) {
      socket.emit("register", user._id);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/jobs/:id" element={<SingleJob />} />
        <Route
          path="/jobs/create"
          element={
            <ProtectedRoutes role="client">
              <CreateJob />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/client-dashboard"
          element={
            <ProtectedRoutes role="client">
              <ClientDashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/proposals/:JobId"
          element={
            <ProtectedRoutes role="client">
              <ViewProposals />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/freelancer-dashboard"
          element={
            <ProtectedRoutes role="freelancer">
              <FreelancerDashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin_dashboard"
          element={
            <ProtectedRoutes role="admin">
              <AdminDashoboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/manage-users"
          element={
            <ProtectedRoutes role="admin">
              <ManageUser />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/manage-jobs"
          element={
            <ProtectedRoutes role="admin">
              <ManageJobs />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/edit-profile"
          element={
            <ProtectedRoutes>
              <EditProfile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/saved-jobs"
          element={
            <ProtectedRoutes role="freelancer">
              <SavedJobs />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/review-form"
          element={
            <ProtectedRoutes>
              <ReviewForm />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/reviews"
          element={
            <ProtectedRoutes>
              <Reviews />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoutes>
              <Notifications />
            </ProtectedRoutes>
          }
        />
        <Route
          path="chat/:id"
          element={
            <ProtectedRoutes>
              <Chats />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/add-project"
          element={
            <ProtectedRoutes role="freelancer">
              <AddProjects />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/user/:id"
          element={
            <ProtectedRoutes>
              <UserProfile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
