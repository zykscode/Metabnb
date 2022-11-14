import React from 'react'

type Props = {d:string; width:number; height:number}



function SocialLogo({d, width, height}: Props) {
  return (
    <svg width={width} className='w-full cursor-pointer' height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d={d} fill="#F7F7F7"/>
    </svg> 
  )
}

export default SocialLogo