import React from "react";
import heart_icon from "../assets/images/svg/heart_icon.svg";
import { explorerNft } from "./MapData";

const ExplorerNft = () => {
  return (
    <section className="pb-5" id="Explore">
      <div className="my_container mb-lg-4 pb-md-3">
        <h2 className="headings_h2 text-black mb-4 pb-3">Explore top NFT</h2>
        {explorerNft.map((data) => {
          return (
            <div key={data.id} className="explorer_nft_box d-flex align-items-center flex-md-row flex-column mb-3">
              <img
                className="explorer_img_size mb-md-0 mb-4"
                src={data.img}
                alt="explorer_nft1"
              />
              <div className="ps-md-4 ms-md-2">
                <h3 className="fs_lg fw-semibold text-black ff_josefin_sans lh_normal mb-2">
                 {data.heading}
                </h3>
                <p className="fs_xsm fw-semibold text-black opacity_70 ff_josefin_sans lh_120 mb-4 pb-2">
                 "{data.paragraph}"
                </p>
                <div className="d-flex justify-content-between align-items-cente">
                  <p className="mb-0 ff_josefin_sans fs_xmd text-black fw-semibold lh_normal opacity_70">
                    $33,915
                  </p>
                  <button className="d-sm-block d-none mt-2 buy_now_btn fw-semibold fs_sm opacity-50 ff_josefin_sans text-black lh_normal ">
                    {data.btn}
                  </button>
                  <p className="mb-0 ff_josefin_sans fs_3xsm text-black fw-semibold lh_normal opacity_70">
                    <span className="me-1">
                      <img src={heart_icon} alt="hear_icon" />
                    </span>{" "}
                    915
                  </p>
                </div>
                <div className="d-sm-none justify-content-center d-flex">
                  <button className="mt-3 buy_now_btn fw-semibold fs_sm opacity-50 ff_josefin_sans text-black lh_normal ">
                  {data.btn}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExplorerNft;
