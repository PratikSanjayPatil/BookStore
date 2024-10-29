import React from 'react'
import NavBAr from '../Components/NavBAr'
import Course from '../Components/Course'
import Footer from '../Components/Footer'

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
