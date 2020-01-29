import React from 'react'

import '../styles/main.scss'
// import MENULIST from '../components/menu-list'
import MenuList from '../components/MenuList'
import Logo from '../components/Logo'
import Image from '../components/image/Image'
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



  const menuList = ['gallery','aboutme', 'contact'];

    return (
      <div className="mainContainer">
        <div className="Left-container">
          <Logo />
          <MenuList menuList={menuList} />
        </div>
        <div className="imageContainer">
        <Image />
        </div>
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
