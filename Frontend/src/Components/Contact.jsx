import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='p-5 flex justify-center item-center'>
                <div className='modal-box w-[550px] flex justify-center'>
                    <form action="" className='text-xl w-[350px]'>
                        <div className='w-80 mt-5'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter email' className='w-[350px] p-2 rounded-md'/>
                        </div>
                        <div className='w-80 pt-3 mt-3'>
                            <span>Mobile_Number</span>
                            <br />
                            <input type="text" placeholder='Enter mobile number' className='w-[350px] p-2 rounded-md'/>
                        </div>
                        <div className='w-80 pt-3 mt-3'>
                            <span>Description</span>
                            <br />
                            <input type="text" placeholder='Description' className='w-[350px] h-20 p-2 rounded-md'/>
                        </div>
                        <div className='w-80 pt-3 mt-3 flex justify-between'>
                            <button className='bg-red-500 p-2 rounded-md'>Submit</button>
                            <Link to="/" className='cursor-pointer'>Home</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact
