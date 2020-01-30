import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import 'react-awesome-slider/dist/styles.css';
import imageTest1 from '../../images/IMG_4096.jpg'
import imageTest2 from '../../images/IMG_4211.jpg'
import imageTest3 from '../../images/main-bg.jpg'


const ImageSlider = () => {
  const imageList = [
    imageTest1,
    imageTest2,
    imageTest3
  ]

const mapImages = imageList.map( image =>  <div> <img src={`${image}`} alt=""/> </div> )
console.warn(mapImages)
const slider = (
   <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div> <img src={imageTest3} alt=""/> </div>
  </AwesomeSlider>
)

return slider

}

export default ImageSlider
