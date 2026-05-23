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
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8">Add Project</h1>

        <form>
          <input type="text" name="title" placeholder="Project Title" />
          <textarea
            name=""
            id=""
            name="description"
            placeholder="Project Description"
          />
          <input
            type="text"
            name="technology"
            placeholder="React, Node.js, MongoDB"
          />
          <input type="text" name="githubLink" placeholder="Github Link" />
          <input type="text" name="liveLink" placeholder="Live Project Link" />
          <input type="file" />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
