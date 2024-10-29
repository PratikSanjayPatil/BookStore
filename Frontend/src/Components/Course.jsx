import React from 'react'
import Cards from '../Components/Cards'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect ,useState } from 'react'

function handleSearch(event){
    const inputText = event.target.value;
    console.log(inputText)
}

function Course() {
    const [book,setBook] = useState([])
        useEffect(()=>{
            const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:4001/books")
                const data = res.data.filter(paidBook=>paidBook.category==="PAID")
                setBook(data)
            }
            catch(err){
                console.log(err)
            }
            }
            getBook();
    },[])
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center '>
                <h1 className='text-2xl md:text-4xl'>
                    We're delighted to have you <span className='text-pink-500'>Here! :)</span> 
                </h1>
                <p className='mt-12'>
                    Discover the magic of reading with our carefully curated collection
                    of books across genres. 
                    Whether you’re looking for timeless classics, 
                    thrilling mysteries, heartwarming romances, or insightful 
                    non-fiction, we have something for every reader!
                </p>
                <Link to="/">
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course
