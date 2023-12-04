import React from 'react'
import Header from './Header'
import logo from "../assets/images/svg/logo.svg"

const Hero = () => {
  return (
    <section className='d-flex flex-column min-vh-100'>
        <><Header/></>
        <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 mx-lg-4 mx-md-3 mx-sm-2 hero_bg px-3'>
<h1 className='ff_playfair_display lh_normal fw-semibold text-white fs_xl text-center'>"Best New NFT to look out for"</h1>
<p className='fs_xsm fw-semibold text-white lh_120 ff_josefin_sans pb-1 text-center hero_para_max_w'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<div className='d-flex  justify-content-center my-4 py-2'>
    <img src={logo} alt="logo" /> 
</div>
<div className='d-flex justify-content-center'>
    <button className='join_us_btn ff_josefin_sans fs_sm fe-semibold opacity-50 text-white lh_normal'>JOIN US</button>
</div>
</div>
    </section>
  )
}

export default Hero