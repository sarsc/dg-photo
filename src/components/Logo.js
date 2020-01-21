import React from 'react'

import MainLogo from './svg/MainLogo'
import LogoSmall from './svg/LogoSmall'

const Logo = ({ isMainPage }) => {

  return isMainPage ? <MainLogo /> : <LogoSmall />
}

export default Logo
