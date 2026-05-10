


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
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        
     </div>
  )
}

export default Register