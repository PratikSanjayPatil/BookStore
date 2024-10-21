import React from 'react'
import NavBAr from '../Components/NavBAr'
import Course from '../Components/Course'
import Footer from '../Components/Footer'
import list from "../../public/list.json"

function courses() {
  return (
    <>
        <NavBAr/>
        <div className='min-h-screen'>
          <Course/>
        </div>
        <Footer />
    </>
  )
}

export default courses
