
import Image1 from "../components/image0";
import Image2 from "../components/image1";
import img1 from '../assets/images/image7.png'
import img2 from '../assets/images/image8.png'
import img3 from '../assets/images/image9.png'
import ImageLast from "../components/LastHome";
import TopSection from "../components/TopSection";
type Props = {};

function Meta({}: Props) {
  return (
    <>
    <TopSection/>
    <div className='sectionBtm  justify-between gap-4 items-center   flex flex-col lg:flex-row'>
      <div className='nftBg max-w-[400px] gap-9 flex flex-shrink flex-col'>
        <span className='boldText'>Metabnb NFTs</span>
        <span className='textNormal'>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </span>
        <div className='cursor-pointer  bg-white w-[156px]  px-[33px] py-[14px] rounded-lg flex'>
          <span className='text-center textLearn '>Learn more</span>
        </div>
      </div>
      <div className='lg:w-[704px] flex-col lg:flex-row object-contain flex  max-w-[704px] overflow-clip  relative mx-auto h-[574.85px]'>
         <div className="absolute top-0 right-0 bg-red-400">       
         <img alt="here" src={img3}/>
        </div> 
         <div className="absolute top-[30%] left-0">
        <img alt="here" src={img1}/>
        </div>  
        <div className="right-0 bottom-0 shrink  absolute">
        <img alt="here" className="object-contain" src={img2}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Meta;
