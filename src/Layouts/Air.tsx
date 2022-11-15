import React from 'react'

import Img1 from '../assets/images/image 66 (1).png'
import Img2 from '../assets/images/image 69.png'

type Props = {modal:boolean;
handleClick:()=>void}

const Air = ({modal, handleClick}: Props) => {
  return (
    <div className={`${modal?'block':'hidden'} WalletModal_walletmodal`}>
  <div className="WalletModal_overlay"></div>
  <div className="WalletModal_container">
    <div className="WalletModal_top-section">
      <h3>Connect Wallet</h3>
      <div>
        <svg
        onClick={handleClick}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="xmark"
          className="svg-inline--fa fa-xmark WalletModal_icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
          ></path>
        </svg>
      </div>
    </div>
    <p>Choose your preferred wallet</p>
    <div className="WalletModal_bottom-section">
      <div className="WalletModal_box">
        <div className="WalletModal_text">
          <img
            src={Img1}
            alt="lion-logo"
          />Metamask
        </div>
        <div>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-right"
            className="svg-inline--fa fa-angle-right WalletModal_icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="WalletModal_box">
        <div className="WalletModal_text">
          <img
            src={Img2}
            alt="wallet-logo"
          />WalletConnect
        </div>
        <div>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-right"
            className="svg-inline--fa fa-angle-right WalletModal_icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
           <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Air 