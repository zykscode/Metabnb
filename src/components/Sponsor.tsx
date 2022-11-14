import React from 'react'

import logo1 from '../assets/images/Frame 4041.svg'
import logo2 from '../assets/images/Group 4040.svg'
import logo3 from '../assets/images/Group 59537.svg'

type Props = {}

const Sponsor = (props: Props) => {
  return (
    <div className="Sponsor_sponsor">
  <div className="Sponsor_imageContainer">
    <img
      src={logo1}
      alt="mbtoken-logo"
    />
  </div>
  <div className="Sponsor_imageContainer">
    <img
      src={logo2}
      alt="metamask-logo"
    />
  </div>
  <div className="Sponsor_imageContainer">
    <img
      src={logo3}
      alt="opensea-logo"
    />
  </div>
</div>

  )
}

export default Sponsor