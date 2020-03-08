import React from 'react'

import Logo from '../Logo'
import MenuList from '../Menu/MenuList'
import PropTypes from 'prop-types'

// import MENULIST from '../components/menu-list'
// TO DO

import './style.scss'

class LeftSideContainer extends React.Component {

  static propTypes = {
    isMainPage: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      isPageActicve: undefined,
    };
  }

  render() {

    const menuList = ['gallery','about', 'contact'];

    return (
       <div className="leftContainer">
        <Logo isMainPage={this.props.isMainPage}/>
        <MenuList
          menuList={menuList}
          isPageActive={this.state.isPageActive}
        />
      </div>
    )
  }
}

export default LeftSideContainer
