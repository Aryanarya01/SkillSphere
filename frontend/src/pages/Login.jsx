import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/slices/authSlice.js";
import clientServer from "../api/client.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const {isLoading, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await clientServer.post("/login", formData);
      dispatch(setUser(res.data.user));
      localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);
      if(res.data.user.role === "client"){
        navigate("/client-dashboard");
      }else if(res.data.user.role === "freelancer"){
        navigate("/freelancer-dashboard")
      }else if(res.data.user.role === "admin"){
        navigate("/admin_dashboard")
      }

      toast.success("Login Successful");
    } catch (err) {
      console.log(err);

      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {

  if (user?.role === "client") {
    navigate("/client-dashboard");
  }

  else if (
    user?.role === "freelancer"
  ) {
    navigate("/freelancer-dashboard");
  }

  else if (
    user?.role === "admin"
  ) {
    navigate("/admin_dashboard");
  }

}, [user]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handelChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handelChange}
            />
          </div>

          <button
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          {" "}
          Don’t have an account?{" "}
          <span className="text-black font-medium cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
