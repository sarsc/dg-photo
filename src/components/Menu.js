import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

class Menu extends React.Component {

  render () {

    const { itemName } = this.props
    // const link =  <Link to={`/${itemName}/`} >{itemName}<Link />
    return (
        <div className="itemMenu">
            {itemName}
        </div>
      )
  }
}

export default Menu;
