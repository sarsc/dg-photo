import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import 'react-awesome-slider/dist/styles.css';
import imageTest1 from '../../assets/images/img_1.jpg'
import imageTest2 from '../../assets/images/img_2.jpg'
import imageTest3 from '../../assets/images/img_3.jpg'
import imageTest4 from '../../assets/images/img_4.jpg'

import './style.scss'

const ImageSlider = () => {
  const imageList = [
    imageTest1,
    imageTest2,
    imageTest3,
    imageTest4
  ]

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
    };

const mapImages = imageList.map( (image, index) => (
  <div className="imageContainer">
    <img src={`${image}`} alt="" className="imageSize" />
    <p className="indexPhoto">{index + 1}</p>
  </div>)
)

const slider = (
  <Slider {...settings}>
    {mapImages}
  </Slider>
)

return slider

}

export default ImageSlider
