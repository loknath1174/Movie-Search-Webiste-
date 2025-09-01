import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Data from '../Components/Data'; // adjust path as needed


const ImageCardSlider = () => {
  const [images, setImages] = useState([0, 1, 2, 3, 4,5,6,7,8]);
const navigate = useNavigate();

const handleImageClick = (movieId) => {

  navigate(`/movie/${movieId}`);
};
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setImages((prevIndexes) =>
      prevIndexes.map((index) => (index + 1) % 9)
    );
  };

 const pics = Data; 


  const positionStyle = ['center', 'left1', 'left', 'right1', 'right', 'farRight', 'farRight1','farLeft','farLeft1']

  const imgvar = {
   center:    { x: '0%',   scale: 1,   zIndex: 5 },
  left1:     { x: '-50%', scale: 0.7, zIndex: 2 },
  left:      { x: '-90%', scale: 0.5, zIndex: 1 },
  farLeft1:  { x: '-140%', scale: 0.3, zIndex: 0 },
  farLeft:   { x: '-180%', scale: 0.2, zIndex: 0 },

  right1:    { x: '50%',  scale: 0.7, zIndex: 2 },
  right:     { x: '90%',  scale: 0.5, zIndex: 1 },
  farRight1: { x: '140%', scale: 0.3, zIndex: 0 },
  farRight:  { x: '190%', scale: 0.2, zIndex: 0 }

  };

  return (
   <div className="h-[65vh] w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center  relative">

    
      {images.map((imgIndex, i) => {
  const movie = pics[imgIndex];
  return (
    <motion.img
      key={movie.id}
      src={movie.image}
      alt={movie.name}
      className="rounded-[12px] shadow-lg cursor-pointer"
      variants={imgvar}
      initial="center"
      animate={positionStyle[i]}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        width: '24%',
        position: 'absolute',
        zIndex: imgvar[positionStyle[i]].zIndex
      }}
      onClick={() => handleImageClick(movie.id)}
    />
  );
})}

      </div>
      

  );
};

export default ImageCardSlider;
