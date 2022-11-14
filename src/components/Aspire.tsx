import React from "react";
import img1 from "../assets/images/Frame 151.png";
import img2 from "../assets/images/Frame 151 (1).png";
import img3 from "../assets/images/Frame 151 (2).png";
import img4 from "../assets/images/Frame 151 (3).png";
import img5 from "../assets/images/Frame 151 (4).png";
import img6 from "../assets/images/Frame 151 (7).png";
import img7 from "../assets/images/Frame 151 (5).png";
import img8 from "../assets/images/Frame 151 (6).png";
import img9 from "../assets/images/Frame 151 (8).png";
import img10 from "../assets/images/Frame 151 (9).png";
import img11 from "../assets/images/Frame 151 (10).png";
import img12 from "../assets/images/Frame 151 (11).png";
import img13 from "../assets/images/Frame 151 (12).png";
import img14 from "../assets/images/Frame 151 (13).png";
import img15 from "../assets/images/Frame 151 (14).png";
import img16 from "../assets/images/Frame 151 (15).png";
import InspireContainer from "./InspireContainer";

const images = [
 
  { title: "img5", src: img5 },
  { title: "img6", src: img6 },
  { title: "img7", src: img7 },
  { title: "img8", src: img8 },
  { title: "img1", src: img1 },
  { title: "img2", src: img2 },
  { title: "img3", src: img3 }, 
  { title: "img4", src: img4 },
  { title: "img9", src: img9 },
  { title: "img10", src: img10 },
  { title: "img11", src: img11 },
  { title: "img12", src: img12 },
  { title: "img13", src: img13 },
  { title: "img14", src: img14 },
  { title: "img15", src: img15 },
  { title: "img16", src: img16 },
];

type Props = {};

function Aspire({}: Props) {
  return (
    <div className='Stay_stay'>
      <div className='Stay_container'>
      {images.map((img) => (
          <InspireContainer key={img.title} img={img.src} />
        ))}
      </div>
    </div>
  );
}

export default Aspire;
