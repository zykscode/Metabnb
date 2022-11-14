import React from "react";
import Img1 from "../assets/images/image 3.png";
import Img2 from "../assets/images/image 4.png";
import Img3 from "../assets/images/image 5.png";
import Img4 from "../assets/images/image 6.png";

type Props = {};

const TopSection = (props: Props) => {
  return (
    <div className='w-full items-center mb-[64px] mt-4 lg:gap-[100px] gap-5 justify-center flex flex-col-reverse lg:flex-row'>
      <div className='max-w-[646px] gap-12 flex flex-col'>
        <h3 className='generalText2 text-[#434343]'>
          Rent a <span className='generalText1 text-[#A02279] '>Place</span>{" "}
          away from <span className='generalText1 text-[#A02279]'>Home</span> in
          the <span className='generalText1 text-[#A02279]'>Metaverse</span>
        </h3>
        <span className='inText text-[#434343]'>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </span>
        <div className='flex'>
          <input
            title='search'
            placeholder='search for location'
            className='w-full border px-4 border-[#A3A3A3] placeholder:text-[#B8B8B8] rounded-l-lg'
            value=''
            disabled
          />
          <div className='cursor-pointer buttonBg flex justify-center items-center w-full max-w-[230px] h-[54px] rounded'>
            <span className='text-white buttonText'>search</span>
          </div>
        </div>
      </div>
      <div className='Rent_right shrink-0'>
        <div className='Rent_cont1'>
          <div className='Rent_image-container'>
            <img src={Img2} alt='pic1' />
          </div>
          <div className='Rent_image-container'>
            <img src={Img4} alt='pic2' />
          </div>
        </div>
        <div className='Rent_cont2__33S6M'>
          <div className='Rent_image-container'>
            <img src={Img1} alt='pic3' />
          </div>
          <div className='Rent_image-container'>
            <img src={Img3} alt='pic4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
