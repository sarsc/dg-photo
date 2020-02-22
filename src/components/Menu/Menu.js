import React from "react"
import { Link } from "gatsby"

import "./style.scss"

class Menu extends React.Component {
  render () {
    const { itemName } = this.props

    const name = {
      about: 'about me',
      contact: 'contact',
      gallery: 'gallery',
    }[itemName]

    const link = <Link to={`/${itemName}/`} >{name}</Link>
    return (
      <h3 className="itemMenu">
        {link}
      </h3>
    )
  }
}

export default Menu;
