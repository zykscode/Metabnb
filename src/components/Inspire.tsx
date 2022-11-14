import React from "react";
import img1 from "../assets/images/Frame 151.png";
import img2 from "../assets/images/Frame 151 (1).png";
import img3 from "../assets/images/Frame 151 (2).png";
import img4 from "../assets/images/Frame 151 (3).png";
import img5 from "../assets/images/Frame 151 (4).png";
import img6 from "../assets/images/Frame 151 (7).png";
import img7 from "../assets/images/Frame 151 (5).png";
import img8 from "../assets/images/Frame 151 (6).png";
import InspireContainer from "./InspireContainer";
type Props = {};

const images = [
  { title: "img1", src: img1 },
  { title: "img2", src: img2 },
  { title: "img3", src: img3 },
  { title: "img4", src: img4 },
  { title: "img5", src: img5 },
  { title: "img6", src: img6 },
  { title: "img7", src: img7 },
  { title: "img8", src: img8 },
];

function Inspire({}: Props) {
  return (
    <div className='Inspiration_inspiration'>
      <h1>Inspiration for your next adventure</h1>
      <div className='Inspiration_container'>
        {images.map((img) => (
          <InspireContainer key={img.title} img={img.src} />
        ))}
      </div>
    </div>
  );
}

export default Inspire;
