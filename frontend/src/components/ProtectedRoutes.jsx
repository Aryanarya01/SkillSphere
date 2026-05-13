
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
 

const ProtectedRoutes = ({children, role}) => {
    const navigate = useNavigate();

    const {user} = useSelector((state)=>state.auth);

        if(!user){
          return <Navigate to="/login" />
        }

        if(role && user.role !== role){
            return <Navigate to="/home" />
        }

  return (
    children
  )
}

export default ProtectedRoutes