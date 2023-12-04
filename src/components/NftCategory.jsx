import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { category } from './MapData';
import heart_icon from "../assets/images/svg/heart_icon.svg"

const NftCategory = () => {
  return (
   <section className='pb-5' id='Activity'>
    <div className="my_container">
        <h2 className='headings_h2 text-black mb-4 text-center'>Top NFT by Category</h2>
        <p className='fs_xsm fw-semibold text-black opacity_70 text-center lh_120 category_para_max_w mx-auto mb-5 pb-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
    <div className='d-flex align-items-center overflow-x-auto gap-4 justify-content-center mb-5 pb-4'>
        <button className='category_btn border-0 fs_md fw-medium text-black ff_josefin_sans lh_normal'>Sports</button>
        <button className='category_btn border-0 fs_md fw-medium text-black ff_josefin_sans lh_normal'>Ats</button>
        <button className='category_btn border-0 fs_md fw-medium text-black ff_josefin_sans lh_normal'>Music</button>
        <button className='category_btn border-0 fs_md fw-medium text-black ff_josefin_sans lh_normal'>Fashion</button>
        <button className='category_btn border-0 fs_md fw-medium text-black ff_josefin_sans lh_normal'>Memes</button>
    </div>
    <Row>
    {category.map((data) => {
                        return (
        <Col lg={3} md={4} sm={6} xs={12}  key={data.id} className='mb-4'>
            <div className='rank_box'>
                <h4 className='fs_sm fw-medium ff_josefin_sans text-black lh_normal mb-2'>{data.heading4}</h4>
            <img className="w-100 mb-3 pb-1" src={data.img} alt="top_nft1" />
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
    <div className='mt-4 pt-2 d-flex justify-content-center'>
        <button className='text-white lh_normal fs_sm fw-semibold ff_josefin_sans view_more_btn'>
            View more
        </button>
    </div>
    </div>
   </section>
  )
}

export default NftCategory