import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Data from '../Components/Data';
import Header from '../Components/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

const Cards = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);

 
  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  const filteredMovies = Data.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#1c1c1c] min-h-screen">
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-24 px-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="flex justify-center">
              <Card sx={{ width: 300, borderRadius: "12px", overflow: "hidden" }}>
                <CardActionArea component={Link} to={`/movie/${movie.id}`}>
                  <CardMedia
                    component="img"
                    image={movie.image}
                    alt={movie.name}
                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">{movie.name}</Typography>
                    <Typography variant="body2">{movie.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <div className="flex justify-between px-2 pb-2">
                  <Button size="small" color="primary" component={Link} to={`/movie/${movie.id}`}>
                    More Details
                  </Button>
                  <Button size="small" color="primary" component={Link} to={`/home`}>
                    Back
                  </Button>
                </div>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full py-10">No movies found 👀</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
