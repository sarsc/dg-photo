import React from "react"

import NameLogo from '../components/NameLogo'
import Menu from '../components/Menu'
import "../styles/main.scss"

export default () => <div className="main-container">
  <div className="left-c">
    <NameLogo />
    <Menu />
  </div>
  <div className="right-c main-bg">
  </div>
</div>
