import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.auth)
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
                user ? (
                    <>
                    <Link to="dashboard">
                        Dashboard
                    </Link>
                    <p>{user.name}</p>
                    <button>Logout</button>
                    </>
                ) : (
                    <>
                        
                    </>
                )
            }
        </div>

      </nav>

  )
}

export default Navbar