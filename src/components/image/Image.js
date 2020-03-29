import React from 'react'
import PropTypes from 'prop-types';
import ImageCategory from '../ImageCategory/ImageCategory'
import ImageSlider from '../image/ImageSlider'

class Image extends React.Component {

  static propTypes = {
    imageList: PropTypes.array.isRequired
  }
  render () {

    return (
      <div className="rightContainer">
        <ImageCategory />
        <div className="sliderMainContainer">
          <ImageSlider imageList={this.props.imageList} />
        </div>
      </div>
      )
  }
}

export default Image
