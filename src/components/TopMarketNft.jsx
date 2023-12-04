import React from "react";
import Slider from "react-slick";
import market_nft1 from "../assets/images/svg/market_nft1.svg";
const TopMarketNft = () => {
  var nft = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section>
      <div className="my_container">
        <h2 className="headings_h2 text-black pb-3">
          Top NFT Market places
        </h2>
        <div {...nft} className=" d-flex gap-4">
          <div className="my-5 d-flex justify-content-center">
            <div className="market_nft_box d-flex align-items-center justify-content-center">
              <img src={market_nft1} alt="market_nft1" />
            </div>
          </div>
          <div className="my-5 d-flex justify-content-center">
            <div className="market_nft_box d-flex align-items-center justify-content-center">
              <img src={market_nft1} alt="market_nft1" />
            </div>
          </div>
          <div className="my-5 d-flex justify-content-center">
            <div className="market_nft_box d-flex align-items-center justify-content-center">
              <img src={market_nft1} alt="market_nft1" />
            </div>
          </div>
          <div className="my-5 d-flex justify-content-center">
            <div className="market_nft_box d-flex align-items-center justify-content-center">
              <img src={market_nft1} alt="market_nft1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMarketNft;
