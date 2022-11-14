import React from 'react'
import Connect from './Connect'
import Logo from './Logo'
import Toggle from './mobile/Toggle'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className=''>
      <div className="flex relative  justify-between gap-4 items-center lg:hidden">
        <Logo/>
        <Toggle/>
        <Connect/>
      </div>
      <div className="hidden lg:flex lg:flex-between ">
        <Logo/>
        
        <Connect/>
      </div>
    </div>
  )
}

export default Header