


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {

    const dispatch = useDispatch();
    const {isLoading} = useSelector((state)=>state.auth)

     const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "client",
  });
    
  return (
    <div>Register</div>
  )
}

export default Register