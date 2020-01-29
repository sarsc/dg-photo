import React from 'react'

import ImageCategory from './ImageCategory'
// import Data from '../images/Data'
import imageTest from '../images/IMG_4096.jpg'

class Image extends React.Component {
  render () {
    return (
      <div>
        <ImageCategory />
        <div>
          <img src={imageTest} alt=""  style={{ width: '500px' }}/>
        </div>
      </div>
      )
  }
}

export default Image
