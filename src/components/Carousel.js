import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import recipeCapLogo from '../assets/logo2.png'
import logo from '../logo192.png'
import './Carousel.css'

let options =   {
    0: {
        items: 1,
    },
    1024: {
        items: 1
    }
}

const Gallery = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled responsive={options} style={{backgroundColor:'red'}}>
        <img src={recipeCapLogo} onDragStart={handleOnDragStart} className="yours-custom-class" alt=''/>
        <img src={logo} onDragStart={handleOnDragStart} className="yours-custom-class" alt=''/>
      </AliceCarousel>
    )
  }

export default Gallery