import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import 'react-awesome-slider/dist/styles.css';
import imageTest from '../../images/IMG_4096.jpg'

const slider = (
   <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div> <img src={imageTest} alt=""/> </div>
    <div> <img src={imageTest} alt=""/> </div>
    <div> <img src={imageTest} alt=""/> </div>
    <div> <img src={imageTest} alt=""/> </div>
  </AwesomeSlider>
);

export default slider
