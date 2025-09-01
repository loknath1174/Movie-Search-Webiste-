import ScrollStack, { ScrollStackItem } from './ScrollStack';
import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from "framer-motion";
const ScrollStack1 = ({ webseries }) => {
  return (
    <>
 
    <ScrollStack >
      
      <ScrollStackItem itemClassName="bg-indigo-50 text-gray-900 ">
        
        <motion.div
    initial={{ scale: 0.9 }}
    whileInView={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
    viewport={{ once: false, amount: 0.5 }}
    className="rounded-3xl p-6 shadow-lg"
  >
        
        
        <h2 className="text-2xl font-bold mb-4">Cast:</h2>     
        {webseries.cast.map((actor) => (
          <li key={actor.id} className="cast-item text-lg font-medium italic">
            {actor.name}
          </li>
        ))}
      </motion.div>
      </ScrollStackItem>

      <ScrollStackItem itemClassName="bg-purple-50 text-gray-900">
        
        <motion.div
    initial={{ scale: 0.9 }}
    whileInView={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
    viewport={{ once: false, amount: 0.5 }}
    className="rounded-3xl p-6 shadow-lg"
  >
        <h2 className="text-2xl font-bold mb-2">Director</h2>
        {webseries.directors.map(director => (
        <p key={director.id} className="text-xl font-medium italic" >{director.name}</p>
           ))}
        <h2 className="text-xl mb-2">Genres</h2>
        <p className="text-xl font-medium italic">
           {webseries.genres.map(genre => genre.name).join(', ')
        }</p>
        <h2 className="text-xl mb-2">ReleaseDate</h2>
        <p className="text-xl font-sm italic">{webseries.releaseDate}</p>
      
      </motion.div>
      </ScrollStackItem>

      <ScrollStackItem itemClassName="bg-pink-50 text-gray-900">
        
        <h2 className="text-2xl font-bold mb-2">Trendy songs of the Movie</h2>
   
        <div className='flex flex-row gap-4 overflow-x-auto p-4'>
          <ReactPlayer controls={true}  src={webseries.videoUrl1} />
      
   
          <ReactPlayer controls={true}  src={webseries.videoUrl2} />

          <ReactPlayer controls={true}  src={webseries.videoUrl3} />

          <ReactPlayer controls={true}  src={webseries.videoUrl4} />

          <ReactPlayer controls={true}  src={webseries.videoUrl5} />
</div>

      </ScrollStackItem>
    </ScrollStack>
 
    </>
  );
};

export default ScrollStack1;
