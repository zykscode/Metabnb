import React from 'react'

type Props = {}

const Connect = (props: Props) => {
  return (
    <div className='connectButton items-center w-full h-12 flex gap-[10px]'>
        <span className='connectButtonText text-white mx-auto'>Connect wallet</span>
    </div>
  )
}

export default Connect