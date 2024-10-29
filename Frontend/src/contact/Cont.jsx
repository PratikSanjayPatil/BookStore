import React from 'react'
import NavBAr from '../Components/NavBAr'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function contact() {
  return (
    <>
        <NavBAr />
        <div className='h-screen'>
            <Contact />
        </div>
        <Footer />
    </>
  )
}

export default contact
