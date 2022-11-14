import React from "react";

type Props = { d: string; d2?:string; d3?:string, width: number; height: number };

function SocialLogo({ d,d2,d3, width, height }: Props) {
  return (
    <svg
      width={width}
      className='w-full cursor-pointer'
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d={d} fill='#F7F7F7' />
      <path fillRule='evenodd' clipRule='evenodd' d={d2} fill='#F7F7F7' />
      <path fillRule='evenodd' clipRule='evenodd' d={d3} fill='#F7F7F7' />
    </svg>
  );
}

export default SocialLogo;
