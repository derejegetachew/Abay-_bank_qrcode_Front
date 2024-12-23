import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import Scrollbar from "smooth-scrollbar";
import { connect } from "react-redux";
import { getDarkMode } from "../../../../store/mode";

//img
import logo from "../../../../../src/assets/images/abay_logo.png";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const minisidbar = () => {
  document.body.classList.toggle("sidebar-main");
};

const SidebarStyle = (props) => {
  //location
  let location = useLocation();

  const urlParams = new URLSearchParams(window.location.search);
  const sidebar = urlParams.get("sidebar");
  var variant = "";
  if (sidebar !== null) {
    variant = "";
    switch (sidebar) {
      case "0":
        variant = "sidebar-dark";
        break;
      case "1":
        variant = "sidebar-light";
        break;
      default:
        variant = "";
        break;
    }
  }

  // Collapse state
  const [activeMenu, setActiveMenu] = useState(false);
  const [activesubMenu, setSubmenu] = useState(false);
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));
  });
  return (
    <>
      <div className={`iq-sidebar sidebar-default ${variant}`}>
        <div className="iq-sidebar-logo d-flex align-items-end justify-content-between">
          <Link to="/" className="header-logo">
            <img
              src={logo}
              className={`img-fluid rounded-normal light-logo ${
                props.darkMode ? "d-none" : ""
              }`}
              alt="logo"
            />
            <span>QRCG</span>
          </Link>
          <div className="side-menu-bt-sidebar-1">
            <svg
              onClick={minisidbar}
              xmlns="http://www.w3.org/2000/svg"
              className="text-light wrapper-menu"
              width="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="data-scrollbar" data-scroll="1" id="my-scrollbar">
          <nav className="iq-sidebar-menu">
            <Accordion
              as="ul"
              id="iq-sidebar-toggle"
              className="side-menu"
              onSelect={(e) => setActiveMenu(e)}
            >
              
              <li className="px-3 pt-3 pb-2 ">
                <span className="text-uppercase small font-weight-bold">
                  Application
                </span>
              </li>

              
              <li
                className={`${
                  location.pathname === "/product" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/product" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Generate QR</span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/order" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/order" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Test QR</span>
                </Link>
              </li>
             
            </Accordion>
          </nav>
          <div className="pt-5 pb-5"></div>
        </div>
      </div>
    </>
  );
};

// export default SidebarStyle;
export default connect(mapStateToProps)(SidebarStyle);
