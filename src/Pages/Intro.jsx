import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlurText from "../Components/BlurText";
import useSound from "use-sound";

export default function Intro() {
  const [showIntro, setShowIntro] = useState(false);
  const [started, setStarted] = useState(false); 
  const navigate = useNavigate();
  const [play, { stop }] = useSound("/Intro.mp3", { volume: 1.0 });

  const handleStart = () => {
    setStarted(true);
    setShowIntro(true);
    play(); 
    const timer = setTimeout(() => {
      stop(); 
      setShowIntro(false);
      navigate("/home");
    }, 7000);

    return () => clearTimeout(timer);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      {!started ? (
       
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-sky-500 mb-4">CineVibez</h1>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-sky-600 text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            ▶ Choose Your Vibe
          </button>
        </div>
      ) : (
        showIntro && (
          <div className="text-center px-6">
            
            <BlurText
              text="CineVibez..."  
              delay={400}
              animateBy="letters"
              direction="top"
              className="text-8xl md:text-7xl font-bold font-cinzel tracking-wide mb-4"
            />
       
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 animate-fadeIn">
              Your world of movies, shows & cinematic vibes.
              Discover stories that move you — anytime, anywhere.
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-red-500 animate-fadeIn">
              Get Ready for the Experience 🎬
            </h2>
          </div>
        )
      )}
    </div>
  );
}