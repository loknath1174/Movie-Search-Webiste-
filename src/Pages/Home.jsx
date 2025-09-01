import React from 'react';
import Header from "../Components/Header";
import LightRays from './LightRays'
import SplitText from './SplitText'
import CircularGallery from './CircularGallery'
import ImageCardSlider from '../Components/ImageCardSlider';
import Services from './Services';
import ChatBot from '../Components/ChatBot';

const Home = () => {
    return (
        <>
            <div style={{ width: '100%', Height: '100vh', position: 'relative' }}>
          <Header />

                <div className="bg-contain">
                    <div className="home-container">
                        <section className="spacer" />

                        <div className="text-wrapper">
                            <section className="hero-section">
                                <LightRays
                                    raysOrigin="top-center"
                                    raysColor="#00ffff"
                                    raysSpeed={1.5}
                                    lightSpread={0.8}
                                    rayLength={1.2}
                                    followMouse={true}
                                    mouseInfluence={0.1}
                                    noiseAmount={0.1}
                                    distortion={0.05}
                                    className="custom-rays"
                                />

                                <SplitText
                                    text="CineVibez"
                                    splitType="chars"
                                    delay={200}
                                    duration={0.5}
                                    ease="power3.out"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    className="hero-text"
                                />


                                <ImageCardSlider />
                        
                    
                                
                            </section>
                        </div>
                          
                      <div className="chatbot-container">
                            <ChatBot />

</div>

                        <section className="spacer" />
                    </div>
                            <Services/>
                </div>
            </div>
        </>
    );
};
export default Home;