import React from 'react'
import SVGComponent from './House'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="max-w-[223px]  z-[1000]  px-2 lg:w-[223px] lg:h-[36.67px]  w-full h-full max-h-[36.67px]">
    <SVGComponent/>
    </div>
  )
}

export default Logo