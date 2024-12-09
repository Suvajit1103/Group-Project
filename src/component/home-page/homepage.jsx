import React,{useState,useEffect} from 'react'
import './home.css';
const photos = [
    'https://mobirise.com/extensions/commercem4/assets/images/galleries-1-1200x800.png',
    'https://helloyubo.com/wp-content/uploads/2022/09/IMG-20220913-WA0040-1024x465.jpg',
    'https://cdn.prod.website-files.com/605826c62e8de87de744596e/66b9a6e182d716e727515048_6304972b0f458d536743e9d9_reebok.jpeg',
  ];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCrouching, setIsCrouching] = useState(false);

  const nextSlide = () => {
    setIsCrouching(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      setIsCrouching(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsCrouching(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
      setIsCrouching(false);
    }, 300); 
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="slider">
      <button onClick={prevSlide} className="slider-button">Previous</button>
      <img 
        src={photos[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className={`slider-image ${isCrouching ? 'crouch' : ''}`} 
      />
      <button onClick={nextSlide} className="slider-button">Next</button>
    </div>
  
  );
}

export default Homepage;