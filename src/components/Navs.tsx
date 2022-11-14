/* eslint-disable array-callback-return */
import React from 'react'
import { Link } from 'react-router-dom'




function Navs() {
    const navs =[
    {
    name:'Home',
    link:'/',
    enabled:true
  },
    {
    name:'Place to stay',
    link:'/place-to-stay',
    enabled:true
  },
    {
    name:'NFTs',
    link:'/nfts',
    enabled:false
  },
    {
    name:'Community',
    link:'/community',
    enabled:false
  },
  ]
  return (
    <div className='flex items-center justify-evenly 2xl:gap-12 gap-8 w-full'>
        {navs.map(nav=>{
            if(nav.enabled){
             return <Link className='navText' key={nav.name} to={nav.link}>
                {nav.name}
              </Link>
            }else{
             return <span className='navText' key={nav.name}>
                {nav.name}
              </span>
            }
          })}
    </div>
  )
}

export default Navs