 import React from 'react'
import Login from './pages/Login.jsx'
 import "./index.css";
import Register from './pages/Register.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Job from './pages/Job.jsx';
import SingleJob from './pages/SingleJob.jsx';
 

 const App = () => {
   return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/jobs' element={<Job/>}/>
          <Route path='/jobs/:id' element={<SingleJob/>} />
      </Routes>
    </BrowserRouter>
   )
 }
 
 export default App