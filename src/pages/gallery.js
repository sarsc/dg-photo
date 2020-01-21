import React from 'react'

// import MENULIST from '../components/menu-list'
import MenuList from '../components/MenuList'
import Logo from '../components/Logo'

class Gallery extends React.Component {

  render() {
    const menuList = ['gallery','aboutme', 'contact']
    return (
      <div>
        <Logo />
        <MenuList menuList={menuList} />
      </div>
      )
  }
}
export default Gallery
