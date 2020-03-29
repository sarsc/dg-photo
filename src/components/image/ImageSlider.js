import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from 'gatsby-image'

import './style.scss'

const ImageSlider = ( { imageList }) => {
  const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
      };

  const mapImages = imageList.map( ({ node }, index) => (
    <div className="imageContainer">
      <div className="imageSize">
        <Img
          fluid={node.childImageSharp.fluid}
          style={{maxHeight: "400px"}}
          imgStyle={{ width: 'auto'}}
          />
        <p className="indexPhoto">{index + 1}</p>
      </div>
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
