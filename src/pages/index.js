import React from "react"

// import NameLogo from '../components/NameLogo'
import MenuList from '../components/MenuList'
import "../styles/main.scss"
import Logo from "../components/svg/Logo"

class HomePage extends React.Component {

 constructor (props) {
  super(props)

  this.state = {
      menuList: ['gallery','about me', 'contact']
    }
  }

  render() {

   const { menuList } = this.state
  return ( <div className="main-container">
      <Logo />
      <div className="left-c">
        <MenuList menuList={menuList}/>
      </div>
      <div className="right-c main-bg">
      </div>
    </div>
    )
  }
}


export default HomePage;
