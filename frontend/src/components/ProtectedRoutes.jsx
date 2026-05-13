
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children, role}) => {
    const navigate = useNavigate();
    
    const {user} = useSelector((state)=>state.auth);

  return (
    <>

    </>
  )
}

export default ProtectedRoutes