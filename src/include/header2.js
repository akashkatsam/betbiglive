import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function header2() {
  return (
    <>
      <header class="header-section header-hidden">
        <div class="header-wrapper">
          <div class="menu-logo-adjust d-flex align-items-center">
            <div class="logo-menu me-5">
              <Link to="/" class="logo">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </Link>
              <Link to="/" class="dark-logo">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </Link>
            </div>
            <div class="header-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="ticker-wrap">
              <div class="ticker">
                <div class="ticker__item">In publishing and graphic design</div>
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
              <img
                class="img-circle"
                src="https://edunet.vercel.app/images/avatar/1.png"
                alt=""
              />
            </div>

            <div className="profilebox">
              <h5>Katherine Pechon </h5>
              <span>
                {" "}
                <div class="language">
                  <div class="nice-select" tabindex="0">
                    <span class="current"> </span>
                    <ul class="list">
                      <li data-value="2" class="option">
                        {" "}
                        <Link to="/profile">
                          <span>
                            <i
                              class="fas fa-gear"
                              style={{
                                "font-size": "20px",
                                "margin-right": "3px",
                              }}
                            ></i>{" "}
                            Setting
                          </span>
                        </Link>
                      </li>
                      <li data-value="3" class="option">
                        <Link class=" link-secondary" to="#">
                          <span>
                            <i
                              class="fas fa-sign-out"
                              style={{
                                "font-size": "20px",
                                "margin-right": "3px",
                              }}
                            ></i>{" "}
                            Logout
                          </span>
                        </Link>
                      </li>
                    </ul>
                    <div class="glo-icon">
                      <div className="profilebox">
                        <span>
                          {" "}
                          abc@gmail.com <i class="fa-solid fa-chevron-down"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </span>

              <ul class="dropdown-menu">
                <li>
                  <Link href="#">Profile</Link>
                </li>
                <li>
                  <Link href="#">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
