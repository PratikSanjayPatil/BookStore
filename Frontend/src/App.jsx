import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/courses'
import { Route, Routes } from "react-router-dom"
import Signup from './Components/Signup'

function App() {
  return (
    <>
      {/*<Home />
      <Course /> */}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course' element={<Courses />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
