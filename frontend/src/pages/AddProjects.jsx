import React from "react";
import { useState } from "react";

const AddProjects = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technology: "",
    githubLink: "",
    liveLink: "",
  });

  const [image, setImage] = useState(null);

  const handelChange = async (e) => {
    try {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handelSubmit = async(e)=>{
    e.preventDefault();
    try{

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8">Add Project</h1>

        <form className="space-y-5" onSubmit={handelSubmit}>
          <input
            type="text"
            value={formData.title}
            name="title"
            placeholder="Project Title"
            onChange={handelChange}
            className="w-full border border-gray-300 rounded-xl p-4"
          />
          <textarea
            id=""
            name="description"
            value={formData.description}
            placeholder="Project Description"
            onChange={handelChange} className="w-full border border-gray-300 rounded-xl p-4"
          />
          <input
            type="text"
            value={formData.technology}
            name="technology"
            placeholder="React, Node.js, MongoDB"
            onChange={handelChange} className="w-full border border-gray-300 rounded-xl p-4"
          />
          <input
            type="text"
            value={formData.githubLink}
            name="githubLink"
            placeholder="Github Link"
            onChange={handelChange} className="w-full border border-gray-300 rounded-xl p-4"
          />
          <input
            type="text"
            value={formData.liveLink}
            name="liveLink"
            placeholder="Live Project Link"
            onChange={handelChange} className="w-full border border-gray-300 rounded-xl p-4"
          />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full" />
          <button type="submit" className="w-full bg-black text-white p-4 rounded-xl font-semibold hover:opacity-90 transition">Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
