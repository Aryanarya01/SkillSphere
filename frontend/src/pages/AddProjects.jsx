

import React from 'react'
import { useState } from 'react'

const AddProjects = () => {
    const [formData, setFormData] = useState({

      title: "",
      description: "",
      technology: "",
      githubLink: "",
      liveLink: "",
    });

    const [image, setImage] = useState(null)
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
         <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
             <h1 className="text-3xl font-bold mb-8">

          Add Project

        </h1>

        <form >
            <input type="text" />
            <textarea name="" id=""/>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button></button>
        </form>

         </div>
    </div>
  )
}

export default AddProjects