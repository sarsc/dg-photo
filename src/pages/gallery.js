import React from 'react'

import '../styles/main.scss'
// import MENULIST from '../components/menu-list'
import MenuList from '../components/MenuList'
import Logo from '../components/Logo'
import Image from '../components/Image'

class Gallery extends React.Component {

  render() {
    const menuList = ['gallery','aboutme', 'contact']
    return (
      <div className="mainContainer">
        <div className="Left-container">
          <Logo />
          <MenuList menuList={menuList} />
        </div>
        <div className="imageContainer">
          <Image/>
        </div>
      </div>
      )
  }
}
export default Gallery
