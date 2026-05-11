import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.auth);


const handelLogout = async()=>{
    try{

    }catch(err){
        console.log(err);
        
    }
}

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
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                    <p>{user.name}</p>
                    <button onClick={handelLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            Login
                        </Link>   
                        <Link to="/register">
                            Register
                        </Link>
                    </>
                )
            }
        </div>

      </nav>

  )
}

export default Navbar