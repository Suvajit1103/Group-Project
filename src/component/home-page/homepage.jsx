import React,{useRef, useState,useEffect} from 'react'
import './home.css';
import Card from '../card/card';
const images = [
    'https://i.pinimg.com/736x/51/d3/88/51d38806d50482762c700eca5717a32f.jpg',
    'https://helloyubo.com/wp-content/uploads/2022/09/IMG-20220913-WA0040-1024x465.jpg',
    'https://cdn.prod.website-files.com/605826c62e8de87de744596e/66b9a6e182d716e727515048_6304972b0f458d536743e9d9_reebok.jpeg','https://static.vecteezy.com/system/resources/previews/048/909/710/non_2x/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg	','https://static.vecteezy.com/system/resources/thumbnails/047/961/634/small/cheerful-redhead-man-buying-gifts-holding-shopping-bags-and-smiling-standing-over-pink-background-photo.jpg','https://i.pinimg.com/736x/ff/7f/5e/ff7f5e94f2f885e26a244d839e975adc.jpg'
  ];

const Homepage = () => {
  const listRef = useRef(); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Function to scroll to a specific index
  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  // Handler for navigating to the next image
  function handleNext() {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  }

  
  function handlePrev() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length; 
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]); 
  return (
    <div className='home'>
      <div  style={{ width: "800px", overflow: "hidden", margin: "0 auto" }}>
        {/* Carousel container */}
        <ul
          ref={listRef}
          style={{
            display: "flex",
            listStyleType: "none",
            padding: 0,
            margin: 0,
            gap: "10px",
            scrollSnapType: "x mandatory",
          }}
        >
          {images.map((src, index) => (
            <li
              key={index}
              style={{
                flex: "0 0 auto",
                scrollSnapAlign: "center",
              }}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                style={{ width: "800px", height: "300px", borderRadius: "8px", objectFit:"fill"}}
              />
            </li>
          ))}
        </ul>

        {/* Navigation controls */}
      </div>

      
    
    
    </div>
    
  );
}
export default Homepage;