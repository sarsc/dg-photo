import React from 'react'
import { Link } from "gatsby"

import MainLogo from '../svg/MainLogo'
import LogoSmall from '../svg/LogoSmall'

import './style.scss'
const Logo = ({ isMainPage }) => {

  return isMainPage ?  <MainLogo addClass={'largeLogo'}/> : <Link to="/" ><LogoSmall /> </Link >

}

export default Logo

