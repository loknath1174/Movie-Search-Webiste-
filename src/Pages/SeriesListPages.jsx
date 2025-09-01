import React, { useEffect } from 'react';
import Series from '../Components/Series'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Header from '../Components/Header'

const Cards = () => {
 
  
  return (
    <>
 
  
    <div className="bg-[#1c1c1c] min-h-screen ">
      <div className='backdrop-blur-lg bg-[#1c1c1c] top-0 left-0 w-full '>
        <Header/></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-20" >
      
        {Series.map((webseries, index) => (
          <div key={index} className="flex justify-center md:flex md:shrink-0 ">
            <Link to={`/webseries/${webseries.id}`}>

            <Card sx={{ width: 300 ,backgroundColor:' #eae8e8',boxShadow:' 0 4px 12px rgba(207, 193, 193, 0.4)',transition: '0.3s ease-in-out',
              "&:hover": {
      backgroundColor: "#a1bdbc",
      transform: "scale(1.05)",
      boxShadow: "0 0 20px #00FFF7",
    },
            }}  >
              <CardActionArea className='mt-6'>
                <CardMedia
                  component="img"
                    image={webseries.image}
                      alt={webseries.name}
                        style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {webseries.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {webseries.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/movie/${webseries.id}`}>
                  <Button size="small" color="primary">
                    More Details
                  </Button>
                </Link>
                <Link to={`/home`}>
                 <Button size="small" color="primary">
                  Back
                  </Button></Link>
              </CardActions>
            </Card></Link>
          </div>
        ))}
        </div>
      </div>


    </>
  );
};

export default Cards;
