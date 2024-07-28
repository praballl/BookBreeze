import React from "react";
import banner from "../../public/gitlWithBook.png";
import { Link } from "react-router-dom";
function Banner() { 
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to read something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            Welcome to our online book haven, where avid readers and casual book lovers alike can explore a vast library of literary treasures.  Our platform is designed to make your reading experience as enjoyable and accessible as possible.
            </p>
            
          </div>
          <Link to='/course'>
          <button className="btn mt-6 btn-secondary">Get Started</button>
          </Link>
        </div>
        <div className=" order-1 w-full  md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
