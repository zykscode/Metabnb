import Image1 from "../components/image0";
import Image2 from "../components/image1";
import img1 from "../assets/images/image7.png";
import img2 from "../assets/images/image8.png";
import img3 from "../assets/images/image9.png";
import ImageLast from "../components/LastHome";
import TopSection from "../components/TopSection";
import Sponsor from "../components/Sponsor";
import Inspire from "../components/Inspire";
type Props = {};

function Meta({}: Props) {
  return (
    <>
      <TopSection />
      <Sponsor/>
      <Inspire/>
      <div className='Nfts_nfts justify-center'>
        <div className='Nfts_left'>
          <h1 className=''>Metabnb NFTs</h1>
          <p className=''>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>

          <a href='/'> Learn more</a>
        </div>
        <div className='Nfts_right'>
          <div className='Nfts_imageContainer Nfts_container1'>
            <img alt='here' src={img3} />
          </div>
          <div className='Nfts_imageContainer Nfts_container2'>
            <img alt='here' src={img1} />
          </div>
          <div className='Nfts_imageContainer Nfts_container3'>
            <img alt='here' className='object-contain' src={img2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Meta;
