import React from 'react'

import './style.scss'
const LeftSideContainer = () => {

  return (
     <div className="leftContainer">
      <Logo />
      <MenuList menuList={menuList} />
    </div>
  )
}

export default LeftSideContainer
