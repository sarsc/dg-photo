import React from 'react'
import { Link } from "gatsby"

import MainLogo from './svg/MainLogo'
import LogoSmall from './svg/LogoSmall'

const Logo = ({ isMainPage }) => {
  console.warn(isMainPage)
  return isMainPage ? <MainLogo /> : <Link to="/" ><LogoSmall /> </Link >
}

export default Logo
