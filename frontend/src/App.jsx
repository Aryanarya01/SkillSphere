 import React from 'react'
import Login from './pages/Login.jsx'
 import "./index.css";
import Register from './pages/Register.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

 const App = () => {
   return (
    <BrowserRouter>
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
   )
 }
 
 export default App