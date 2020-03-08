import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import "./style.scss"

class Menu extends React.Component {
  static propTypes = {
    isMainPage: PropTypes.bool.isRequired,
    itemName: PropTypes.string,
  }
// constructor(props) {
//     super(props);
//   }
  render () {
    const { itemName, isMainPage } = this.props
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
