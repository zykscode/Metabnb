/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Air from "../Layouts/Air";
import Meta from "../Layouts/Meta";
import Place from "../Layouts/Place";

type Props = {};

const Connect = (props: Props) => {
  const [modal, setModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const handleModal = () => {
    setModal(() => !modal);
  };
  console.log({ location: location }, navigate);
  return (
    <>
      <Link
        to='/connect'
        onClick={() => {
          handleModal();
        }}
        state={{ background: location }}
        className='z-[1000] connectButton items-center w-full h-12 flex gap-[10px] cursor-pointer'>
        <span className='connectButtonText text-white mx-auto'>
          Connect wallet
        </span>
      </Link>
<Air modal={modal} handleClick={()=>{
  handleModal()
  navigate(-1)
}}/>
      <Outlet />
    </>
  );
};

export default Connect;
