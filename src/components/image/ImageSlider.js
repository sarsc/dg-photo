import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import 'react-awesome-slider/dist/styles.css';
import imageTest1 from '../../images/img_1.jpg'
import imageTest2 from '../../images/img_2.jpg'
import imageTest3 from '../../images/img_3.jpg'
import imageTest4 from '../../images/img_4.jpg'


const ImageSlider = () => {
  const imageList = [
    imageTest1,
    imageTest2,
    imageTest3,
    imageTest4
  ]

const mapImages = imageList.map( (image, index) => (
  <div>
    <img data-set={`img_${index + 1}`} src={`${image}`} alt="" />
  </div>)
)

const slider = (
  <AwesomeSlider cssModule={AwesomeSliderStyles}>
    {mapImages}
  </AwesomeSlider>
)

return <div>
  {slider}
</div>

}

export default ImageSlider
