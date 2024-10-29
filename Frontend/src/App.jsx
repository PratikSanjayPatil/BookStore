import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/courses'
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './Components/Signup'
import { useAuth } from './context/AuthProvider'
import Cont from './contact/Cont'
 
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
      {/*<Home />
      <Course /> */}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup" />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/contact' element={<Cont />}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
