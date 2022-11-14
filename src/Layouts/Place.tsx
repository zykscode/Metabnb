import React from 'react'
import settings from '../assets/images/setting.svg'
import Aspire from '../components/Aspire'

type Props = {}

const Place = (props: Props) => {
  return (
    <div>
      <div className="Location_location">
  <div className="Location_wrapper">
    <p>Restaurant</p>
    <p>Cotagge</p>
    <p>Castle</p>
    <p>Fantast city</p>
    <p>Beach</p>
    <p>Cabins</p>
    <p>Off-grid</p>
    <p>Farm</p>
    <div className="Location_box">
      Location
      <img
        src={settings}
        alt="settings"
      />
    </div>
  </div>
</div>
<Aspire/>

    </div>
  )
}

export default Place