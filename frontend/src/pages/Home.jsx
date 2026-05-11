import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="flex flex-col justify-center items-center text-center py-28 px-6">
        <h1 className="text-5xl font-bold text-gray-900 max-w-3xl leading-tight">Find Top Freelancers & Build Amazing Projects</h1>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl">  SkillSphere helps clients connect with
          talented freelancers around the world.</p>
          <div className="flex gap-4 mt-8">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Hire Freelancer
            </button>
            <Link to={'/jobs'}>
              <button className="border border-black px-6 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition">
                  Explore Jobs
              </button>
            </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;
