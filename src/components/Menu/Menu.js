import React from "react"
import { Link } from "gatsby"

import "./style.scss"

class Menu extends React.Component {
  render () {
    const { itemName } = this.props
    const link = <Link to={`/${itemName}/`} >{itemName}</Link>
    return (
      <h3 className="itemMenu">
        {link}
      </h3>
    )
  }
}

export default Menu;
