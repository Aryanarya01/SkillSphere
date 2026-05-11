import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const dispatch = useDispatch();
  return (
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">

        <Link
        to="/"
        className="text-2xl font-bold"
      >
        SkillSphere
      </Link>

        <div>
            {

            }
        </div>

      </nav>

  )
}

export default Navbar