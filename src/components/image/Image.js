import React from 'react'

import ImageCategory from '../ImageCategory'
import ImageSlider from '../image/ImageSlider'

class Image extends React.Component {
  render () {
  // const images = [
  //   'IMG_4096.jpg', 'IMG_4211.jpg', 'main-bg.jpg'
  // ]

    return (
      <div className="imageContainer">
        <ImageCategory />
        <div className="sliderMainContainer">
          <ImageSlider  />
        </div>
      </div>
      )
  }
}

export default Image
