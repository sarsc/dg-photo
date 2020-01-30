import React from 'react'

import '../styles/main.scss'
import Image from '../components/image/Image'
import LeftSideContainer from '../components/LeftSideContainer'
// import { graphql, data } from "gatsby"
// import PropTypes from 'prop-types'

class Gallery extends React.Component {

// static propTypes = {
//     data: PropTypes.object.isRequired
// }
  render() {
  //   const getData = ({ data }) => {
  //    console.warn(data)
  //   }



    return (
      <div className="mainContainer">
        <LeftSideContainer />
        <Image />
      </div>
      )
  }
}
export default Gallery


// export const query = graphql`
//   query GalleryQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
