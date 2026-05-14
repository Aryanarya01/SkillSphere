import React from "react";
import clientServer from "../api/client.js";
import { useState } from "react";
import { useEffect } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

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
    try {
      await clientServer.delete(`/admin/user/${id}`);
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  };
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
                    Delete
                  </button>
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
