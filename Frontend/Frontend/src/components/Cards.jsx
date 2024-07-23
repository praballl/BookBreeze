import React from "react";
import defaultBook from '../assets/defaultbook.jpeg';

function Cards({ item }) {
  
  function readBook() {
    window.open(item.link, '_blank', 'noopener,noreferrer');
  }
  return (
   
    <div className="mt-4 my-3 p-3 flex items-center justify-center">
      <div className="card max-w-xs w-full h-full shadow-xl hover:scale-105 duration-200 bg-slate-300 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="relative w-full h-56"> {/* Increased height */}
          <img
            src={item.imageLink === "" ? defaultBook : item.imageLink}
            alt="Books"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-base font-semibold flex justify-between items-center">
            {item.title}
            <div className="badge badge-secondary text-xs h-fit">{item.language}</div>
          </h2>
          <p className="text-sm mt-1">{item.author}</p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="badge badge-outline text-xs">{item.year}</div>
            <div
            onClick={readBook} 
            className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 text-xs">
              Know more
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;
