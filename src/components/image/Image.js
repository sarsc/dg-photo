import React from 'react'

import ImageCategory from '../ImageCategory'
import slider from '../image/slider'

class Image extends React.Component {
  render () {
    return (
      <div>
        <ImageCategory />
        <div style={{width: '700px'}}>
          {slider}
        </div>
      </div>
      )
  }
}

export default Image
