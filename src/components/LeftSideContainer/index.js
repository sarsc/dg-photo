import React from 'react'

import Logo from '../Logo'
import MenuList from '../Menu/MenuList'
// import MENULIST from '../components/menu-list'
// TO DO

import './style.scss'

const LeftSideContainer = () => {
  const menuList = ['gallery','aboutme', 'contact'];
  return (
     <div className="leftContainer">
      <div className="logoContainer">
       <Logo />
      </div>
      <MenuList menuList={menuList} />
    </div>
  )
}

export default LeftSideContainer
