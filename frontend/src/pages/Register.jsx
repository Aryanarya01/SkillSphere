


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {

    const dispatch = useDispatch();
    const {isLoading} = useSelector((state)=>state.auth)
    
  return (
    <div>Register</div>
  )
}

export default Register