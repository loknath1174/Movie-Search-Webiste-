import React from "react";
import Data from "../Components/Data";
import Series from "../Components/Series";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import  { useMediaQuery } from "react-responsive";
const Services = () => {
    const sevenmovies=Data.slice(5,12)
    const animated=Data.slice(13,20)
    const eightmovies=Data.slice(21,28)
     const upcoming=Data.slice(29,35)
      const series=Series.slice(0,7)
    const isMobile = useMediaQuery({ maxWidth: 768 })

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  
  return (
    <div
      className="slider-section" //whole services bg
      style={{
        width: "100%",
        minHeight: "100vh",
        
        backgroundColor: "#111",
        padding: " 20px",
      }}
    >
        <div style={{margin: "0px 0px 8px", padding: "0px"}}>
      <h2 style={{ color: "#fff", textAlign: "left",fontSize:"25px",fontWeight:"bold" }}>
        Featured Movies
      </h2>
      <Link to ={`/movie`}>
      <h2  style={{ textAlign: "right",fontSize:"20px",fontWeight:"bold" }} className="text-white hover:text-sky-500 transition-colors duration-300">See All</h2></Link>
</div>
      <div className="slider-container" style={{ maxWidth: "", maxHeight:"1000px",margin: "0 auto" }}>
        <Slider {...settings}>
          {sevenmovies.map((movie, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div
                style={{ // card 
                
                 
                  overflow: "hidden",
                  textAlign: "center",
                  
                  padding: " 20px",
                  margin:"px",
                
                }}
              >
                <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie. image}
                  alt={movie.title}
                  style={{ width: "70%",
                        height: "auto",
                          maxHeight: "350px",
                          objectFit: "cover", 
                          borderRadius: "8px",}}
                />
                </Link>
                <h3 style={{ color: "#fff", marginTop: "10px" }}>{movie.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>


   <div style={{margin: "20px 0px 8px", padding: "0px"}}>
      <h2 style={{ color: "#fff", textAlign: "left" ,fontSize:"25px",fontWeight:"bold"}}>
        Animated Movies
      </h2>
      <Link to ={`/movie`}>
      <h2  style={{  textAlign: "right",fontSize:"20px" }}  className="text-white hover:text-sky-500 transition-colors duration-300">See All</h2></Link>
</div>
      <div className="slider-container" style={{ maxWidth: "", maxHeight:"1000px",margin: "0 auto" }}>
        <Slider {...settings}>
          {animated.map((movie, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div
                style={{ // card 
                
                 
                  overflow: "hidden",
                  textAlign: "center",
                  
                  padding: " 20px",
                  margin:"px",
                
                }}
              >
                <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie. image}
                  alt={movie.title}
                  style={{  width: "70%",
                              height: "auto",
                              maxHeight: "350px",
                              objectFit: "cover",
                               borderRadius: "8px",}}
                />
                </Link>
                <h3 style={{ color: "#fff", marginTop: "10px" }}>{movie.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>





  <div style={{margin: "20px 0px 8px", padding: "0px"}}>
      <h2 style={{ color: "#fff", textAlign: "left" ,fontSize:"25px",fontWeight:"bold"}}>
       2025 Released Movies
      </h2>
      <Link to ={`/movie`}>
      <h2  style={{  textAlign: "right",fontSize:"20px" }}  className="text-white hover:text-sky-500 transition-colors duration-300">See All</h2></Link>
</div>
      <div className="slider-container" style={{ maxWidth: "", maxHeight:"1000px",margin: "0 auto" }}>
        <Slider {...settings}>
          {eightmovies.map((movie, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div
                style={{ // card 
                
                 
                  overflow: "hidden",
                  textAlign: "center",
                  
                  padding: "20px",
                  margin:"px",
                
                }}
              >
                <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie. image}
                  alt={movie.title}
                  style={{  width: "70%",
                              height: "auto",
                              maxHeight: "350px",
                              objectFit: "cover",
                               borderRadius: "8px",}}
                />
                </Link>
                <h3 style={{ color: "#fff", marginTop: "10px" }}>{movie.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>



  <div style={{margin: "20px 0px 8px", padding: "0px"}}>
      <h2 style={{ color: "#fff", textAlign: "left" ,fontSize:"25px",fontWeight:"bold"}}>
       Upcoming Movies
      </h2>
      <Link to ={`/movie`}>
      <h2  style={{  textAlign: "right",fontSize:"20px" }}  className="text-white hover:text-sky-500 transition-colors duration-300">See All</h2></Link>
</div>
      <div className="slider-container" style={{ maxWidth: "", maxHeight:"1000px",margin: "0 auto" }}>
        <Slider {...settings}>
          {upcoming.map((movie, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div
                style={{ // card 
                
                 
                  overflow: "hidden",
                  textAlign: "center",
                  
                  padding: "20px",
                  margin:"px",
                
                }}
              >
                <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie. image}
                  alt={movie.title}
                  style={{  width: "70%",
                              height: "auto",
                              maxHeight: "350px",
                              objectFit: "cover",
                               borderRadius: "8px",}}
                />
                </Link>
                <h3 style={{ color: "#fff", marginTop: "10px" }}>{movie.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>


  <div style={{margin: "20px 0px 8px", padding: "0px"}}>
      <h2 style={{ color: "#fff", textAlign: "left" ,fontSize:"25px",fontWeight:"bold"}}>
       Popular Series 
      </h2>
      <Link to ={`/webseries`}>
      <h2  style={{  textAlign: "right",fontSize:"20px" }}  className="text-white hover:text-sky-500 transition-colors duration-300">See All</h2></Link>
</div>
      <div className="slider-container" style={{ maxWidth: "", maxHeight:"1000px",margin: "0 auto" }}>
        <Slider {...settings}>
          {series.map((webseries, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div
                style={{ // card 
                
                 
                  overflow: "hidden",
                  textAlign: "center",
                  
                  padding: "20px",
                  margin:"px",
                
                }}
              >
                <Link to={`/webseries/${webseries.id}`}>
                <img
                  src={webseries. image}
                  alt={webseries.title}
                  style={{  width: "70%",
                              height: "auto",
                              maxHeight: "350px",
                              objectFit: "cover",
                               borderRadius: "8px",}}
                />
                </Link>
                <h3 style={{ color: "#fff", marginTop: "10px" }}>{webseries.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>




    </div>
  );
};

export default Services;
