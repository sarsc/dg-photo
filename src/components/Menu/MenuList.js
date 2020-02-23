import React from "react"
import Menu from "./Menu"

import './style.scss'

const MenuList = ({ menuList }) => {
  const renderMenu = menuList.map(item => <Menu itemName={item} />)
  return <div className="listContainer" >{renderMenu}</div>
}

export default MenuList;
