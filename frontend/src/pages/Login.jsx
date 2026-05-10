import React, { useState } from 'react'
import {useDispatch} from "react-redux"
const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email : "",
    password : "",
  });
  
  return (
    <div>Login</div>
  )
}

export default Login