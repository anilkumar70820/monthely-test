import React from "react";
import heart_icon from "../assets/images/svg/heart_icon.svg";
import { topNft } from "./MapData";
import { Col, Row } from "react-bootstrap";

const TopNft = () => {
  return (
    <section className="py-5">
      <div className="my_container my-lg-4 py-md-3">
        <h2 className="headings_h2 text-black mb-4 pb-3">
          Top NFT to look out for in 2022
        </h2>
        <Row className="px-2">
        {topNft.map((data) => {
                        return (
          <Col md={3} sm={4} xs={6} key={data.id} className="mb-md-2 mb-sm-2 mb-4 col_2_4 d-flex justify-content-center align-items-center px-1">
            <div className="top_nft_box">
              <img className="w-100 mb-2" src={data.img} alt="top_nft1" />
              <h3 className="fs_md fw-semibold text-black ff_josefin_sans lh_normal mb-2">
               {data.heading}
              </h3>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="mb-0 ff_josefin_sans fs_2xsm text-black fw-semibold lh_normal opacity_70">
                  $33,915
                </p>
                <p className="mb-0 ff_josefin_sans fs_3xsm text-black fw-semibold lh_normal opacity_70">
                  <span className="me-1">
                    <img src={heart_icon} alt="hear_icon" />
                  </span>{" "}
                  915
                </p>
              </div>
              <div className="d-flex justify-content-center">
              <button className="buy_now_btn fw-semibold fs_sm opacity-50 ff_josefin_sans text-black lh_normal ">
                {data.btn}
              </button>
              </div>
            </div>
          </Col>
           );
        },
        )}
        </Row>
      </div>
    </section>
  );
};

export default TopNft;
