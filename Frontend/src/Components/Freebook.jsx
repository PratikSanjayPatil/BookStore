import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useEffect,useState } from "react";

import React from 'react';
import Cards from "./Cards";

function Freebook() {

  const [book,setBook] = useState([])
        useEffect(()=>{
            const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:4001/books")
                setBook(res.data.filter((data) => data.category === "FREE"))
            }
            catch(err){
                console.log(err)
            }
            }
            getBook();
    },[])


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-bold text-xl pd-2'>Free Books</h1>
          <p>
            Discover the magic of reading with our carefully curated 
            collection of books across genres. Whether you’re looking 
            for timeless classics, thrilling mysteries, heartwarming 
            romances, or insightful non-fiction, we have something for 
            every reader!
          </p>

        </div>
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Freebook
