import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function header() {
  return (
    <>
      {/* <div className="boxes-bg">
  <div className="boxes">
    <div className="box">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="box">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="box">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="box">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</div> */}

      <header class="header-section header-hidden">
        <div class="header-wrapper">
          <div class="menu-logo-adjust d-flex align-items-center">
            <div class="logo-menu me-5">
              <Link to="/" class="logo">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </Link>
              <Link to="/" class="dark-logo">
                <img src="assets/img/logo/logo.png" alt="logo" />{" "}
              </Link>
            </div>
            <div class="header-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="ticker-wrap">
              <div class="ticker">
                <div class="ticker__item">
                  <span className="item-collection-1">
                    We're providing here the best offer for you
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-menu-reature">
            <div class="input-box">
              <i class="uil uil-search"></i>
              <input type="text" placeholder="Search here..." />
              <button class="button">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <div class="signup-area">
              <Link
                to="#0"
                class="btn--two"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span>Log In</span>
              </Link>
              <Link
                to="#0"
                class="cmn--btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <a
        href="https://api.whatsapp.com/send?phone=0000&text=Hii"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </>
  );
}
