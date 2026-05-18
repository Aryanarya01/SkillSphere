import React from "react";
import clientServer from "../api/client.js";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slices/authSlice.js";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state)=>state.auth);
  const fetchUser = async () => {
    try {
      const res = await clientServer.get("/admin/users");
      setUsers(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handelDelete = async (id) => {
    dispatch(setLoading(true));
    try {
      await clientServer.delete(`/admin/user/${id}`);
      fetchUser();
      toast.success("User deleted")
    } catch (err) {
      toast.error("Error deleting user")
      console.log(err);
    }finally{
      dispatch(setLoading(false));
    }
  };

  const handelVerify = async (id)=>{
    try{
      const res = await clientServer.put(`/freelancer/verify/${id}`);
      toast.success(res.data.message)
    }catch(err){
      toast.error("Error verifying user!");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Manage Users</h1>
        <p className="text-gray-500 mt-2">Admin user management panel</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Action</th>
              <th className="p-4 text-left">Verification</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 capitalize">{user.role}</td>
                <td className="p-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handelDelete(user._id)}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </button>
                </td>
                <td>
                  <button onClick={()=>handelVerify(user._id)} className="bg-green-500 text-white px-4 py-2 rounded-lg mr-3">Verify</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
