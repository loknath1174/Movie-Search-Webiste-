import React, { useEffect } from 'react';
import AOS from 'aos';
import Data from './Data' // ?autoplay=1&mute=1 This line is essential for built-in animations
import Card from 'react-bootstrap/Card';
import ScrollStack1 from './ScrollStack1';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


import { color } from 'framer-motion';
const DetailCollection = ({ movie }) => {
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleClick=() =>{
    if(movie.book){
      window.open(movie.book,'_blank');
    }
    else if(movie.ott){
      window.open(movie.ott,'_blank');
    }
    else{
      alert("Not Available ");
    }
  }

  return (

    <>
    <div className="grid grid-cols-2 sm:grid-cols-3">
      <div className="coolie">
        <h1 className="title">{movie.name}</h1>

        <div className="hero-video-section w-full h-screen overflow-hidden">
          <ReactPlayer light={<img src={movie.image} alt='Thumbnail' />} />
            <ReactPlayer playing={true} controls={true}  src={movie.videoUrl} playIcon
             width="88%"
             height="140%"
           />
        </div>

        <div data-aos="fade-right">
          <p className="description">Description: {movie.description}</p>
        </div>

        
     <ScrollStack1  movie={movie}/>
     <div className="flex flex-row justify-between items-center px-4 py-2 gap-2 bg-transparent">
  <Link to="/movie">
    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
      Back
    </button>
  </Link>

  <button className="bg-indigo-600 text-[#fbfff9] px-6 py-2 rounded hover:bg-indigo-700 transition" onClick={handleClick}>
{movie.book ? "Book Tickets ": movie.ott ? "Watch on Ott": "Not Available"}

  </button>

</div>




      </div>
      
          
    </div>
    

</>
  );
};

export default DetailCollection;
