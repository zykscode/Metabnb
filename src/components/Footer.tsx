import React from "react";
import FooterLogo from "./FooterLogo";
import SocialLogo from "./SocialLogo";

type Props = {};

const socials = [
  {width:10, height:18,name:'facebook',path:"M9.5 6.1875H6.125V3.9375C6.125 3.63913 6.24353 3.35298 6.4545 3.142C6.66548 2.93103 6.95163 2.8125 7.25 2.8125H8.375V0H6.125C5.22989 0 4.37145 0.355579 3.73851 0.988515C3.10558 1.62145 2.75 2.47989 2.75 3.375V6.1875H0.5V9H2.75V18H6.125V9H8.375L9.5 6.1875Z"},
  {width:18, height:18,name:'instagram',path:"M12.375 0H5.625C4.13316 0 2.70242 0.592632 1.64752 1.64752C0.592632 2.70242 0 4.13316 0 5.625L0 12.375C0 13.8668 0.592632 15.2976 1.64752 16.3525C2.70242 17.4074 4.13316 18 5.625 18H12.375C13.8668 18 15.2976 17.4074 16.3525 16.3525C17.4074 15.2976 18 13.8668 18 12.375V5.625C18 4.13316 17.4074 2.70242 16.3525 1.64752C15.2976 0.592632 13.8668 0 12.375 0V0ZM16.3125 12.375C16.3125 14.5463 14.5463 16.3125 12.375 16.3125H5.625C3.45375 16.3125 1.6875 14.5463 1.6875 12.375V5.625C1.6875 3.45375 3.45375 1.6875 5.625 1.6875H12.375C14.5463 1.6875 16.3125 3.45375 16.3125 5.625V12.375Z"},
  {width:18, height:15,name:'twitter',path: "M18 1.98135C17.3229 2.27666 16.6068 2.47293 15.8737 2.5641C16.6463 2.1058 17.2238 1.38011 17.4971 0.524473C16.7738 0.953476 15.9824 1.25558 15.1571 1.41772C14.6511 0.877474 13.9944 0.501881 13.2722 0.339742C12.55 0.177602 11.7957 0.236409 11.1073 0.508525C10.419 0.78064 9.82836 1.25348 9.41223 1.86563C8.9961 2.47777 8.77368 3.20091 8.77387 3.9411C8.77387 4.2336 8.79862 4.51485 8.85938 4.7826C7.39134 4.71062 5.95503 4.32961 4.64434 3.66448C3.33365 2.99935 2.17811 2.06507 1.25325 0.922723C0.779422 1.73481 0.632935 2.69697 0.843619 3.61328C1.0543 4.52958 1.60631 5.33114 2.38725 5.85472C1.8031 5.83906 1.23128 5.68318 0.72 5.40022V5.44072C0.720979 6.29283 1.0155 7.11859 1.55398 7.77899C2.09247 8.43939 2.84203 8.89411 3.6765 9.0666C3.36081 9.1498 3.03546 9.19065 2.709 9.1881C2.47454 9.19227 2.24031 9.17114 2.01038 9.1251C2.24881 9.8575 2.70843 10.498 3.32594 10.9583C3.94346 11.4187 4.68851 11.6763 5.4585 11.6957C4.15231 12.7173 2.54135 13.2714 0.883125 13.2696C0.5805 13.2696 0.29025 13.2561 0 13.219C1.68737 14.3063 3.65364 14.8815 5.661 14.875C12.4515 14.875 16.164 9.24997 16.164 4.37422C16.164 4.2111 16.1584 4.0536 16.1505 3.89722C16.8783 3.37633 17.5051 2.72709 18 1.98135Z"},
];

const Footer = (props: Props) => {
  return (
    <footer id='footer' className='bg-[#1D1D1E] px-28  '>
      <div className='container mx-auto pt-14 '>
        <div className=' flex flex-col text-white  gap-12 lg:flex-row'>
          <div className='mx-auto mb-6 gap-4 flex-col flex justify-between max-w-[285px] flex-1 lg:mx-0'>
            <FooterLogo />
            <div className='flex flex-row gap-2 items-self-start justify-start '>
              {socials.map((a) => (
                <SocialLogo height={a.height} width={a.width} d={a.path} key={a.name} />
              ))}
            </div>
          </div>
          <div className='flex flex-1 justify-center flex-col gap-16 p-2 lg:flex-row'>
            <div className='w-full flex justify-center flex-col items-center lg:items-start text-center lg:text-left'>
              <div className={`footerLinks mb-6`}>Community</div>
              <ul className={`footerSublinks space-y-4`}>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    NFT
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Tokens
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Landlords
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full text-center lg:text-left'>
              <div className={`footerLinks mb-6`}>Community</div>
              <ul className={`footerSublinks space-y-4`}>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    NFT
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Tokens
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Landlords
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full text-center lg:text-left'>
              <div className={`footerLinks mb-6`}>Community</div>
              <ul className={`footerSublinks space-y-4`}>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    NFT
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Tokens
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Landlords
                  </a>
                </li>
                <li>
                  <a className='hover:text-blue transition' href='#'>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=' py-12'>
        <div className='container mx-auto flex flex-col items-center gap-y-6 copywright lg:flex-row lg:justify-between lg:gap-y-0'>
          <div className={`min-h-[18px] max-w-[139px] `}>©2022 Metabnb</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
