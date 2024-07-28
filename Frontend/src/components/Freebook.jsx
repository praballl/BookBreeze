import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const rootUrl = import.meta.env.VITE_API_URL
  const [book,setBook] = useState([])
  const getBook = async () => {
    try {
      const res = await axios.get(`${rootUrl}/api/books`);

      console.log(res.data);
      const data = res.data.filter((data) => data.free);
      
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    getBook();
  }, []);

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
          dots: true,
        },
      },
      {
        breakpoint: 850, // Adjust this breakpoint if necessary
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books Details</h1>
          <p>
          Whether you’re into thrilling mysteries, heartwarming romances, or enlightening non-fiction, you’ll find a book that captivates your interest. Here are some free to read books.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            
            {book.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
