import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
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

const mapImages = imageList.map( (image, index) => (
  <div>
    <img data-set={`img_${index + 1}`} src={`${image}`} alt="" className="imageSlider"/>
  </div>)
)

const slider = (
  <AwesomeSlider
    className="sliderContainer"
    cssModule={AwesomeSliderStyles}
    bullets={false}
    infinite
    buttons
    >
    {mapImages}
  </AwesomeSlider>
)

return slider

}

export default ImageSlider
