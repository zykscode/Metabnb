import React from 'react'
import { Link } from 'react-router-dom'
import Connect from './Connect'
import SVGComponent from './House'
import Logo from './Logo'
import Toggle from './mobile/Toggle'
import Navs from './Navs'

type Props = {}



const Header = (props: Props) => {
  return (
    <div className=''>
      <div className="flex relative  justify-between gap-4 items-center lg:hidden">
        <Logo/>
        <Toggle/>
        <Connect/>
      </div>
      <div className="hidden lg:relative lg:flex lg:justify-between lg:items-center">
        <div className="w-full">
          <SVGComponent/>
        </div>
        <Navs/>
        <div className="w-full flex bg-green-400 justify-end">
        <Connect/>
      </div>
      </div>
    </div>
  )
}

export default Header