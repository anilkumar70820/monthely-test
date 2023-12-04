import React from "react";
import { Col, Row } from "react-bootstrap";

const UpcommingNft = () => {
  return (
    <section className="py-5">
      <div className="my_container my-lg-5 pt-lg-5 pb-lg-4">
        <Row>
          <Col lg={6} className="mb-lg-0 mb-4 d-flex justify-content-center align-items-center" >
            <div className="upcomming_nft_box upcomming_nft_box_bg">
              <h2 className="headings_h2 text-white text-center mb-4 pb-1">Upcoming top nfts</h2>
              <p className="upcomming_nft_para_max_w mx-auto text-white opacity_70 ff_josefin_sans fs_xsm fw-medium lh_120 text-center mb-5 pb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="d-flex justify-content-center">
              <button className="fs_sm ff_josefin_sans fw-semibold lh_normal text-black explore_btn">Explore more</button>
            </div>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <div className="upcomming_nft_box upcomming_nft_box_bg2">
              <h2 className="headings_h2 text-white text-center mb-4 pb-1">Upcoming top nfts</h2>
              <p className="upcomming_nft_para_max_w mx-auto text-white opacity_70 ff_josefin_sans fs_xsm fw-medium lh_120 text-center mb-5 pb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="d-flex justify-content-center">
              <button className="fs_sm ff_josefin_sans fw-semibold lh_normal text-black explore_btn">Explore more</button>
            </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default UpcommingNft;
