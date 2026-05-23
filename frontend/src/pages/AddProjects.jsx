

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
        
    </div>
  )
}

export default AddProjects