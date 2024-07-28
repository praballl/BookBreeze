/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  const rootUrl = import.meta.env.VITE_API_URL


  const getBook = async () => {
    try {
      const res = await axios.get(`${rootUrl}/api/books`);
      console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-[64px] items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl pt-6">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to our online book haven, where avid readers and casual book lovers alike can explore a vast library of literary treasures. Our platform is designed to make your reading experience as enjoyable and accessible as possible. You can know more about books.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {book.map((item) => (
            
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
