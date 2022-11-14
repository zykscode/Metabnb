import React from 'react'
import star from '../assets/images/Star 2.png'

type Props = {img:string}

function InspireContainer({img}: Props) {
  return (
    <div className="Inspo_inspo">
      <div className="Inspo_imageContainer">
        <img
          src={img}
          alt="inspo-pic"
        />
      </div>
      <div className="Inspo_box">
        <p className="Inspo_text">Desert king</p>
        <p className="Inspo_text Inspo_bold">1MBT per night</p>
      </div>
      <div className="Inspo_box">
        <p className="Inspo_text">2345km away</p>
        <p className="Inspo_text">available for 2weeks stay</p>
      </div>
      <div className="Inspo_stars">
        <div>
          <img
            src={star}
            alt="star"
          />
        </div>
        <div>
          <img
            src={star}
            alt="star"
          />
        </div>
        <div>
          <img
            src={star}
            alt="star"
          />
        </div>
        <div>
          <img
            src={star}
            alt="star"
          />
        </div>
        <div>
          <img
            src={star}
            alt="star"
          />
        </div>
      </div>
    </div>
  )
}

export default InspireContainer