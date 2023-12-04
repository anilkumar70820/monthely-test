import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg";
import search_icon from "../assets/images/svg/Icon.svg";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <header className="w-100">
      <div className="my_container">
        <nav className="d-flex justify-content-between align-items-center py-1">
          <img className="cursor_pointer logo_size" src={logo} alt="logo" />
          <div className="d-flex align-items-center gap-5">
          <div className="input_box d-flex align-items-center me-2">
            <span className="pe-2">
            <img src={search_icon} alt="search_icon" />
            </span>
            <input type="search" placeholder="Search" />
          </div>
          <ul
            className={`${
              showNavbar
                ? "d-flex align-items-center gap-4 mb-0 nav_sm p-0"
                : "d-flex align-items-center gap-2 mb-0 nav_sm nav_show p-0"
            } `}
          >
            <li>
              <a
                href="#My_Profile"
                onClick={() => setShowNavbar(true)}
                className="under_line fs_xsm fw-medium text-black opacity_06 ff_josefin_sans me-lg-1"
              >
                My Profile
              </a>
            </li>
            <li className="nav_lines d-lg-none"></li>
            <li>
              <a
                href="#Explore"
                onClick={() => setShowNavbar(true)}
                className="under_line fs_xsm fw-medium text-black opacity_06 ff_josefin_sans me-lg-1"
              >
                Explore
              </a>
            </li>
            <li className="nav_lines d-lg-none"></li>
            <li>
              <a
                href="#News"
                onClick={() => setShowNavbar(true)}
                className="under_line fs_xsm fw-medium text-black opacity_06 ff_josefin_sans me-lg-1"
              >
                News
              </a>
            </li>
            <li className="nav_lines d-lg-none"></li>
            <li className="pe-lg-1">
              <a
                href="#Activity"
                onClick={() => setShowNavbar(true)}
                className="under_line fs_xsm fw-medium text-black opacity_06 ff_josefin_sans me-lg-1"
              >
                Activity
              </a>
            </li>
            <li className="ms-lg-4 ps-lg-2">
              <button className="ff_josefin_sans fw-semibold fs_sm lh_normal text-white nav_btn">
              SIGN IN
              </button>
            </li>
            <span
              title="close"
              className="ms-4 close_nav text-black opacity_06 fw-bold fs-1 d-lg-none"
              onClick={() => setShowNavbar(true)}
            >
              &times;
            </span>
          </ul>
          </div>
          <span
            title="open"
            className="d-inline d-lg-none fw-bold fs-1 text-black opacity_06"
            onClick={() => setShowNavbar(false)}
          >
            &#9776;{" "}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
