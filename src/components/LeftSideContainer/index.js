import React from 'react'

import Logo from '../Logo'
import MenuList from '../Menu/MenuList'
// import MENULIST from '../components/menu-list'
// TO DO

import './style.scss'

const LeftSideContainer = ({ isMainPage }) => {
  const menuList = ['gallery','about', 'contact'];
  return (
     <div className="leftContainer">
       <Logo isMainPage={isMainPage}/>
      <MenuList menuList={menuList} />
    </div>
  )
}

export default LeftSideContainer
