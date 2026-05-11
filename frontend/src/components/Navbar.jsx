import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">

        <Link
        to="/"
        className="text-2xl font-bold"
      >
        SkillSphere
      </Link>

        

      </nav>

  )
}

export default Navbar