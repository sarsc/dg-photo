import React from "react"

// import NameLogo from '../components/NameLogo'
import MenuList from '../components/MenuList'
import '../styles/main.scss'
import Logo from "../components/Logo"

class HomePage extends React.Component {

 constructor (props) {
  super(props)

  this.state = {
      menuList: ['gallery','aboutme', 'contact']
    }
  }

 static defaultProps = {
      hasMainPageFeature: true,
    }
  render() {

   const { menuList } = this.state
   const { hasMainPageFeature } = this.props
  return ( <div className="main-container">
      <Logo isMainPage={hasMainPageFeature} />
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
