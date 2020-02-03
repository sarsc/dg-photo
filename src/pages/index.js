import React from "react"

// import NameLogo from '../components/NameLogo'
// import MenuList from '../components/Menu/MenuList'
import '../styles/main.scss'
// import Logo from "../components/Logo"
import LeftSideContainer from "../components/LeftSideContainer"

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
  return (
   <div className="main-container">
      <LeftSideContainer isMainPage={hasMainPageFeature}/>
      <div className="right-c main-bg">
      </div>
    </div>
    )
  }
}


export default HomePage;
 // <Logo isMainPage={hasMainPageFeature} />
      // <div className="left-c">
      //   <MenuList menuList={menuList}/>
      // </div>
