import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import clientServer from "../api/client.js";

const PortfolioProjects = ({ userId }) => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    try {
      const res = await clientServer.get(`/portfolio/${userId}`);
      setProjects(res.data.projects);
    } catch (err) {
      console.log(err);
      toast.error("Error fetching projects.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [userId]);
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">Portfolio Projects</h2>

      <div className="grid grid-cols-1  gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {project.image && (
              <img
                src={`http://localhost:9090${project.image}`}
                alt="project"
                className="w-full h-52 object-cover"
              />
            )}

            <div className="p-5">
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-gray-600 mt-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="bg-black text-white px-4 py-2 rounded-lg"
                  >
                    Github
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="border border-black px-4 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;
