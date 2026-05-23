

import React from 'react'
import { useState } from 'react'

const AddProjects = () => {
    const [formData, setFormData] = useState({

      title: "",
      description: "",
      technologies: "",
      githubLink: "",
      liveLink: "",
    });

    const [image, setImage] = useState(null)
  return (
    <div>AddProjects</div>
  )
}

export default AddProjects