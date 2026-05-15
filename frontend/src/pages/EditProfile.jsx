import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const EditProfile = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.auth);
    const [formData, setFormData]=  useState({
         name: user?.name || "",
      username:
        user?.username || "",
      profilePicture: null,
    })

    const handleChange = async(e)=>{
       const { name, value, files } =
      e.target;

      if(name === "profilePicture"){
        setFormData({
            ...formData,
            profilePicture : files[0],
        })
      }else{
         setFormData({
        ...formData,
        [name]: value,
         })
      }
    }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}
          <div>

            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4"
            />

          </div>

          {/* Username */}
          <div>

            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4"
            />

          </div>

          {/* Profile Picture */}
          <div>

            <label className="block mb-2 font-medium">
              Profile Picture
            </label>

            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              className="w-full"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl font-semibold"
          >
            Update Profile
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProfile