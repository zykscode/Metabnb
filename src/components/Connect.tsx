import React from 'react'

type Props = {}

const Connect = (props: Props) => {
  return (
    <div className='z-[1000] connectButton items-center w-full h-12 flex gap-[10px] cursor-pointer'>
        <span className='connectButtonText text-white mx-auto'>Connect wallet</span>
    </div>
  )
}

export default Connect