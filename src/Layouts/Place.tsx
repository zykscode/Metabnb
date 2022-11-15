import React from "react";
import { Route, Routes } from "react-router-dom";
import settings from "../assets/images/setting.svg";
import Aspire from "../components/Aspire";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {};

const Place = (props: Props) => {
  return (
    <div className='App overflow-clip py-2 md:px-4 px-2 lg:px-[100px] '>
      <Header />
  
      <div>
        <div className='Location_location'>
          <div className='Location_wrapper'>
            <p>Restaurant</p>
            <p>Cotagge</p>
            <p>Castle</p>
            <p>Fantast city</p>
            <p>Beach</p>
            <p>Cabins</p>
            <p>Off-grid</p>
            <p>Farm</p>
            <div className='Location_box'>
              Location
              <img src={settings} alt='settings' />
            </div>
          </div>
        </div>
        <Aspire />
      </div>
      <Footer />
    </div>
  );
};

export default Place;
