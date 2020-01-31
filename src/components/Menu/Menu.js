import React from "react"
import { Link } from "gatsby"

import "./style.scss"

class Menu extends React.Component {

  render () {

    const { itemName } = this.props
    const link =  <Link to={`/${itemName}/`} >{itemName}</Link>
    return (
        <div className="itemMenu">
            {link}
        </div>
      )
  }
}

export default Menu;
