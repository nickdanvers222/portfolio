import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>Recipe Capture</h3>
        </div>
        <div>
          <h3>Scheduler</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
    
      </Slider>
    );
  }
}
export default SimpleSlider