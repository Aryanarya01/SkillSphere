
import React from 'react'
import { useSelector } from 'react-redux'

const ProtectedRoutes = ({children, role}) => {
    const {user} = useSelector((state)=>state.auth);
    
  return (
    <>

    </>
  )
}

export default ProtectedRoutes