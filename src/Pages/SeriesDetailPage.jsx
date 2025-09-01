import React, { useEffect } from 'react';
import AOS from 'aos';
import Series from '../Components/Series'; // ?autoplay=1&mute=1 This line is essential for built-in animations
import Card from 'react-bootstrap/Card';
import {  useParams } from 'react-router-dom'
import SeriesListPage from './SeriesListPages'
import ScrollStack1 from '../Components/ScrollStack2';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


import { color } from 'framer-motion';
const DetailCollection = () => {
     const { id } = useParams()
        const webseries = Series.find(webseries => webseries.id === parseInt(id))
    if (!webseries) return <h1>Movie not found</h1>
     let ExtraComponent = null;

 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleClick=() =>{
    if(webseries.book){
      window.open(webseries.book,'_blank');
    }
    else if(webseries.ott){
      window.open(webseries.ott,'_blank');
    }
    else{
      alert("Not Available ");
    }
  }

  return (

    <>
    <div className="grid grid-cols-2 sm:grid-cols-3">
      <div className="coolie">
        <h1 className="title">{webseries.name}</h1>

        <div className="hero-video-section w-full h-screen overflow-hidden">
          <ReactPlayer light={<img src={webseries.image} alt='Thumbnail' />} />
            <ReactPlayer playing={true} controls={true}  src={webseries.videoUrl} playIcon
             width="70%"
             height="100%"
           />
        </div>

        <div data-aos="fade-right">
          <p className="description">Description: {webseries.description}</p>
        </div>

        
     <ScrollStack1  webseries={webseries}/>
     <div className="flex flex-row justify-between items-center px-4 py-2 gap-2 bg-transparent">
  <Link to="/webseries">
    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
      Back
    </button>
  </Link>

  <button className="bg-indigo-600 text-[#fbfff9] px-6 py-2 rounded hover:bg-indigo-700 transition" onClick={handleClick}>
{webseries.book ? "Book Tickets ": webseries.ott ? "Watch on Ott": "Not Available"}

  </button>

</div>




      </div>
      
          
    </div>
    

</>
  );
};

export default DetailCollection;
