import React from "react"
import Menu from "./Menu"

const MenuList = ({ menuList }) => {
  const renderMenu = menuList.map(item => <Menu itemName={item} />)
  return <div>{renderMenu}</div>
}

export default MenuList;
