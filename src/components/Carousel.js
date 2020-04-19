import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import recipeCapLogo from '../assets/logo2.png'
import logo from '../logo192.png'
import './Carousel.css'

const Gallery = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled>
        <img src={recipeCapLogo} onDragStart={handleOnDragStart} className="yours-custom-class" alt=''/>
        <img src={logo} onDragStart={handleOnDragStart} className="yours-custom-class" alt=''/>
      </AliceCarousel>
    )
  }

export default Gallery