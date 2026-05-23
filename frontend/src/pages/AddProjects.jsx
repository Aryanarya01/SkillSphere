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


  const handelChange = async()=>{
    try{

    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8">Add Project</h1>

        <form>
          <input
            type="text"
            value={formData.title}
            name="title"
            placeholder="Project Title" onChange={handelChange}
          />
          <textarea
            id=""
            name="description"
            value={formData.description}
            placeholder="Project Description" onChange={handelChange}
          />
          <input
            type="text"
            value={formData.technology}
            name="technology"
            placeholder="React, Node.js, MongoDB" onChange={handelChange}
          />
          <input
            type="text"
            value={formData.githubLink}
            name="githubLink"
            placeholder="Github Link" onChange={handelChange}
          />
          <input
            type="text"
            value={formData.liveLink}
            name="liveLink"
            placeholder="Live Project Link" onChange={handelChange}
          />
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
