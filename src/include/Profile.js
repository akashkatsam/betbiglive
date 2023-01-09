import React from "react";
import { useState } from "react";

import Header from "../include/header";
import LeftSideBar from "../include/LeftSideBar";
import Header2 from "./header2";
export default function Profile() {
  const [bank, setBank] = useState("bankshow active");
  const [bankbtn, setBankbtn] = useState("btnact");
  const [upibtn, setUpibtn] = useState("btnact1");
  const [upi, setUpi] = useState("d-none");


  const handleChange = (event) => {
    if (event.target.value === "upi") {
      setUpi("d-block");
      setBank("d-none");
      setUpibtn("btnact");
      setBankbtn("btnact1");
    } else {
      setUpi("d-none");
      setBank("d-block");
      setBankbtn("btnact");
      setUpibtn("btnact1");
    }
  };


  const [bankright, setBankright] = useState("bankshow1 active1");
  const [bankbtnright, setBankbtnright] = useState("btnact");
  const [upibtnright, setUpibtnright] = useState("btnact1right");
  const [upiright, setUpiright] = useState("d-none");

  const handleChange1 = (event) => {
    if (event.target.value === "upiright") {
      setUpiright("d-block");
      setBankright("d-none");
      setUpibtnright("btnact")
      setBankbtnright("btnact1")
    } else {
      setUpiright("d-none");
      setBankright("d-block");
      setBankbtnright("btnact")
      setUpibtnright("btnact1")

    }
  };

  return (
    <div>
      {/* Header Section start */}
      <Header2 />
      <div className="row">
        <div className="col-2">
          <LeftSideBar />
        </div>

        <div className="col-10">
          <br></br>
          <div class="body-middle">
            {/* <!--Breadcumnd--> */}
            <div class="breadcumnd-banner">
              <div class="container">
                <div class="breadcumd-content">
                  <h1>Profile</h1>
                  <ul class="bread-tag">
                    <li>
                      <a href="#0">Home</a>
                    </li>
                    <li>
                      <i class="fas fa-arrow-right"></i>
                    </li>
                    <li>Profile</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--Breadcumnd--> */}

            {/* <!--profile-->  */}
            <div class="profile-section pb-60">
              <div class="container p-0">
                <div class="profile-tab">
                  <ul class="nav">
                    <li class="nav-item">
                      <a
                        class="nav-link link-secondary active"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile1"
                        href="#"
                      >
                        <span>
                          <i
                            class="fas fa-user"
                            style={{
                              "font-size": "20px",
                              "margin-right": "3px",
                            }}
                          ></i>{" "}
                          Profile
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link link-secondary"
                        id="profile-tab01"
                        data-bs-toggle="tab"
                        data-bs-target="#profile2"
                        href="#"
                      >
                        <span>
                          <i
                            class="fas fa-gear"
                            style={{
                              "font-size": "20px",
                              "margin-right": "3px",
                            }}
                          ></i>{" "}
                          Settings
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link link-secondary"
                        id="profile-tab02"
                        data-bs-toggle="tab"
                        data-bs-target="#profile5"
                        href="#"
                      >
                        <span>
                          <i
                            class="fa-solid fa-sack-dollar"
                            style={{
                              "font-size": "20px",
                              "margin-right": "3px",
                            }}
                          ></i>{" "}
                          Deposit Now
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link link-secondary"
                        id="profile-tab04"
                        data-bs-toggle="tab"
                        data-bs-target="#profile3"
                        href="#"
                      >
                        <span>
                          <i
                            class="fa fa-bank"
                            style={{
                              "font-size": "20px",
                              "margin-right": "3px",
                            }}
                          ></i>{" "}
                          Withdraw Now
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link link-secondary"
                        id="profile-tab03"
                        data-bs-toggle="tab"
                        data-bs-target="#profile4"
                        href="#"
                      >
                        <span>
                          <i
                            class="fa-solid fa-wallet"
                            style={{
                              "font-size": "20px",
                              "margin-right": "3px",
                            }}
                          ></i>{" "}
                          Wallet
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link link-secondary"
                        id="profile-tab06"
                        data-bs-toggle="tab"
                        data-bs-target="#profile7"
                        href="#"
                      >
                        <span>
                          <i
                            class="fa-solid fa-wallet"
                            style={{
                              "font-size": "20px",
                              "margin-right": "3px",
                            }}
                          ></i>{" "}
                          Transaction
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content pt-20" id="pro-wrap">
                  <div
                    class="tab-pane fade show active"
                    id="profile1"
                    role="tabpanel"
                  >
                    <div class="row">
                      <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                        <div class="profile-left-wrap">
                          <div class="form-box">
                            <div class="form-head">
                              {/* <span>Details</span> */}
                            </div>
                            <form action="#0">
                              <label for="exampleInputEmail1" className="mb-2">
                                Name
                              </label>
                              <div class="form-grp">
                                <input type="text" placeholder="akash chawda" />
                                <div class="left-icon">
                                  <i class="fas fa-user"></i>
                                </div>
                              </div>
                              <label for="exampleInputEmail1" className="mb-2">
                                Email address
                              </label>
                              <div class="form-grp form-grp-two">
                                <input
                                  type="email"
                                  placeholder="jijiwi2841@edxplus.com"
                                />
                                <div class="left-icon">
                                  <i class="fas fa-envelope"></i>
                                </div>
                              </div>
                              <label for="exampleInputEmail1" className="mb-2">
                                Mobile
                              </label>
                              <div class="form-grp">
                                <input
                                  type="number"
                                  placeholder="(208) 555-0112"
                                />
                                <div class="left-icon">
                                  <i class="fas fa-phone"></i>
                                </div>
                              </div>
                              <div class="form-grp">
                                <button type="submit" class="cmn--btn">
                                  <span>Edit Profile</span>
                                </button>
                              </div>
                            </form>
                          </div>
                          {/* <div class="change-picture-box">
                              <div class="head">
                                 <span>Change profile picture</span>
                              </div>
                              <div class="change-box">
                                 <div class="down">
                                    <img src="assets/img/table/details/picture.png" alt="img"/>
                                 </div>
                                 <a href="#0">
                                    Choose file to upload
                                 </a>
                                 <p>Supported Files: JPG, JPEG, PNG, BMP PDF, TIE TIFF with a max size of 5 ME</p>
                              </div>
                           </div> */}
                        </div>
                      </div>
                      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                        <div class="profile-left-wrap">
                          <div class="form-box">
                            <div class="form-head">
                              {/* <span>Details</span> */}
                            </div>
                            <form action="#0">
                              <label for="exampleInputEmail1" className="mb-2">
                                Password
                              </label>
                              <div class="form-grp">
                                <input type="text" placeholder="12345678" />
                                <div class="left-icon">
                                  <i class="fas fa-user"></i>
                                </div>
                                <div class="right-lock">
                                  <i class="fa-solid fa-lock"></i>
                                </div>
                              </div>
                              <label for="exampleInputEmail1" className="mb-2">
                                New Password
                              </label>
                              <div class="form-grp">
                                <input
                                  type="number"
                                  placeholder="
                                    1234567"
                                />
                                <div class="left-icon">
                                  <i class="fas fa-phone"></i>
                                </div>
                                <div class="right-lock">
                                  <i class="fa-solid fa-lock"></i>
                                </div>
                              </div>
                              <label for="exampleInputEmail1" className="mb-2">
                                Confirm Password
                              </label>
                              <div class="form-grp ">
                                <input type="email" placeholder="1234567" />
                                <div class="left-icon">
                                  <i class="fas fa-envelope"></i>
                                </div>
                                <div class="right-lock">
                                  <i class="fa-solid fa-lock"></i>
                                </div>
                                {/* <a href="#0" class="repeat">
                                       <i class="fas fa-repeat"></i>
                                    </a> */}
                              </div>

                              <div class="form-grp">
                                <button type="submit" class="cmn--btn">
                                  <span>Change Password</span>
                                </button>
                              </div>
                            </form>
                          </div>
                          {/* <div class="change-picture-box">
                              <div class="head">
                                 <span>Change profile picture</span>
                              </div>
                              <div class="change-box">
                                 <div class="down">
                                    <img src="assets/img/table/details/picture.png" alt="img"/>
                                 </div>
                                 <a href="#0">
                                    Choose file to upload
                                 </a>
                                 <p>Supported Files: JPG, JPEG, PNG, BMP PDF, TIE TIFF with a max size of 5 ME</p>
                              </div>
                           </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile2" role="tabpanel">
                    <div class="row">
                      {/* <div class="accounts-box">
                              <span>Account</span>
                              <p><i class="fas fa-user" style={{"font-size":"40px" ,"margin-left":"20px"}}></i>  Hello Akash  Chawda</p>
                              <a href="#0">RESET NET PROFIT</a>
                           </div> */}
                      {/* <div class="col-lg-12">
                        <div class="setting-wrap">
                           <div class="setting-box">
                              <h4>
                                 Language
                              </h4>
                              <select name="setting-select" id="setting">
                                 <option value="1">
                                    English
                                 </option>
                                 <option value="2">
                                    Bangla
                                 </option>
                              </select>
                           </div>
                           <div class="setting-box">
                              <h4>
                                 Chat History Length
                              </h4>
                              <div class="history">
                                 <span class="current-text">Live Support Button Visibility:</span>
                                 <a href="#0" class="cmn--btn">
                                    <span>50</span>
                                 </a>
                              </div>
                           </div>
                           <div class="setting-box">
                              <h4>
                                 Live Support
                              </h4>
                              <div class="history">
                                 <span class="current-text">Current history length:</span>
                                 <a href="#0" class="cmn--btn">
                                    <span>Visible</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div> */}

                      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <p className="my-2"> Edit One-click Stakes</p>

                        <div class="profile-left-wrap">
                          <div class="accounts-box accounts-box-custom ">
                            {/* <span>Account</span> */}
                            {/* <p><i class="fas fa-user" style={{"font-size":"40px" ,"margin-left":"20px"}}></i>  Hello Akash  Chawda</p> */}
                            {/* <a href="#0">RESET NET PROFIT</a> */}
                            <div className="row">
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 mt-3">
                                <a href="#0" class="btn--two btn-two-custom">
                                  <span>Edit</span>
                                </a>
                              </div>
                              <div className="col-md-6 mt-3">
                                <a href="#0" class="btn--two btn-two-custom">
                                  <span>Save</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <p className="my-2">Edit Stakes</p>

                        <div class="profile-left-wrap">
                          <div class="accounts-box accounts-box-custom ">
                            {/* <span>Account</span> */}
                            {/* <p><i class="fas fa-user" style={{"font-size":"40px" ,"margin-left":"20px"}}></i>  Hello Akash  Chawda</p> */}
                            {/* <a href="#0">RESET NET PROFIT</a> */}
                            <div className="row">
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4 my-2">
                                <div class="form-grp">
                                  <button type="submit" class="cmn--btn">
                                    <span class="v-btn__content">
                                      <div class="text-center">+1,000</div>{" "}
                                      <div
                                        class="text-center"
                                        style={{ "font-size": "8px" }}
                                      >
                                        Active Stake
                                      </div>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 mt-3">
                                <a href="#0" class="btn--two btn-two-custom">
                                  <span>Edit</span>
                                </a>
                              </div>
                              <div className="col-md-6 mt-3">
                                <a href="#0" class="btn--two btn-two-custom">
                                  <span>Save</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile5" role="tabpanel">
                    <div class="row">
                      <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                        <div class="container">
                          <div class="selector">
                            <div class="selecotr-item">
                              <input
                                type="radio"
                                checked={bank === "bank"}
                                value="bank"
                                id="radio1"
                                name="selector"
                                onClick={handleChange}
                              />
                              <label
                                for="radio1"
                                class={`selector-item_label ${bankbtn}`}
                              >
                                Bank
                              </label>
                            </div>
                            <div class="selecotr-item">
                              <input
                                checked={bank === "upi"}
                                type="radio"
                                id="radio2"
                                value="upi"
                                onClick={handleChange}
                              />

                              <label
                                for="radio2"
                                class={`selector-item_label ${upibtn}`}
                              >
                                UPI Id
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className={`profile-left-wrap ${bank}`}>
                          <div class="form-box form-box-custom">
                            <div class="form-head"></div>
                            <form action="#0">
                              <div className="row">
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Bank Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder="Axis Bank"
                                    />
                                    <div class="left-icon">
                                      <i
                                        className="fa fa-bank"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder=" Jhon Doe"
                                    />
                                    <div class="left-icon">
                                      <i
                                        class="fas fa-user"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Account Number
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="12345678" />
                                    <div class="left-icon">
                                      <i
                                        class="fa solid fa-book"
                                        style={{
                                          marginRight: "10px",
                                          "font-size": "16px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Amount
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="10,000" />
                                    <div class="left-icon">
                                      <i class="fa fa-inr"></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>

                                <div className="col-md-12 my-3">
                                  <div class="change-picture-box">
                                    <div class="head">
                                      <span>Upload Transaction Receipt</span>
                                    </div>
                                    <div class="change-box">
                                      <div class="down">
                                        <img
                                          src="assets/img/table/details/picture.png"
                                          alt="img"
                                        />
                                      </div>
                                      <a href="#0">Choose file to upload</a>
                                      <p>
                                        Supported Files: JPG, JPEG, PNG, BMP
                                        PDF, TIE TIFF with a max size of 5 ME
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-grp mt-4">
                                  <button type="submit" class="cmn--btn">
                                    <span>Submit</span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* <div class="change-picture-box">
                              <div class="head">
                                 <span>Change profile picture</span>
                              </div>
                              <div class="change-box">
                                 <div class="down">
                                    <img src="assets/img/table/details/picture.png" alt="img"/>
                                 </div>
                                 <a href="#0">
                                    Choose file to upload
                                 </a>
                                 <p>Supported Files: JPG, JPEG, PNG, BMP PDF, TIE TIFF with a max size of 5 ME</p>
                              </div>
                           </div> */}
                        </div>
                        <div class={`profile-left-wrap ${upi}`}>
                          <div class="form-box form-box-custom">
                            <div class="form-head"></div>
                            <form action="#0">
                              <div className="row">
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Provider Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder="  Google Pay"
                                    />
                                    <div class="left-icon">
                                      <i
                                        className="fa-brands fa-google-pay"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder=" Jhon Doe"
                                    />
                                    <div class="left-icon">
                                      <i
                                        class="fas fa-user"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My UPI ID
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="12345678" />
                                    <div class="left-icon">
                                      <i
                                        class="fa solid fa-book"
                                        style={{
                                          marginRight: "10px",
                                          "font-size": "16px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Amount
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="10,000" />
                                    <div class="left-icon">
                                      <i class="fa fa-inr"></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>

                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Transaction ID
                                  </label>
                                  <div class="form-grp ">
                                    <input
                                      type="email"
                                      placeholder="45Dt56GH"
                                    />
                                    <div class="left-icon">
                                      <i class="fa solid fa-book"></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                    {/* <a href="#0" class="repeat">
                                       <i class="fas fa-repeat"></i>
                                    </a> */}
                                  </div>
                                </div>

                                <div class="form-grp mt-4">
                                  <button type="submit" class="cmn--btn">
                                    <span>Submit</span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* <div class="change-picture-box">
                              <div class="head">
                                 <span>Change profile picture</span>
                              </div>
                              <div class="change-box">
                                 <div class="down">
                                    <img src="assets/img/table/details/picture.png" alt="img"/>
                                 </div>
                                 <a href="#0">
                                    Choose file to upload
                                 </a>
                                 <p>Supported Files: JPG, JPEG, PNG, BMP PDF, TIE TIFF with a max size of 5 ME</p>
                              </div>
                           </div> */}
                        </div>
                      </div>

                      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <div class="profile-left-wrap">
                          {/* <div class="accounts-box accounts-box-custom1 "> */}
                          {/* <div class="form-grp">
                              <button
                                type="submit"
                                class="cmn--btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCustom"
                              >
                                <span>
                                  <i class="fa fa-plus" aria-hidden="true"></i>{" "}
                                  Add Account
                                </span>
                              </button>
                            </div> */}

                          {/* <div class="form-grp">
                              <div class="selector">
                                <div class="selecotr-item">
                                  <input
                                    type="radio"
                                    id="radio1"
                                    name="selector"
                                    class="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    for="radio1"
                                    class="selector-item_label"
                                  >
                                    Bank
                                  </label>
                                </div>
                                <div class="selecotr-item">
                                  <input
                                    type="radio"
                                    id="radio2"
                                    name="selector"
                                    class="selector-item_radio"
                                  />
                                  <label
                                    for="radio2"
                                    class="selector-item_label"
                                  >
                                    UPI Id
                                  </label>
                                </div>
                                <button
                                  type="submit"
                                  class="cmn--btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCustom"
                                 >
                                  <span>
                                    <i
                                      class="fa fa-plus"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Add Account
                                  </span>
                                </button>
                              </div>
                            </div> */}
                          {/* </div> */}
                          <div class="selector">
                            <div class="selecotr-item">
                              <input
                                type="radio"
                                value="bankright"
                                id="radio3"
                                name="selector"
                                onClick={handleChange1}
                              />
                              <label
                                for="radio3"
                                class={`selector-item_label ${bankbtnright}`}
                              >
                                Bank
                              </label>
                            </div>
                            <div class="selecotr-item">
                              <input
                                type="radio"
                                id="radio4"
                                value="upiright"
                                onClick={handleChange1}
                              />

                              <label
                                for="radio4"
                                class={`selector-item_label ${upibtnright}`}
                              >
                                UPI Id
                              </label>
                            </div>
                          </div>
                          <div class="form-box">
                            {/* <div className='row'>
                              <div className='col-md-6 '>
                              <input type="radio" id="male" name="gender" className='col-custom-radio'/>
                              <label for="male">Male</label>
                              </div>

                              <div className='col-md-6 '>
                              <input type="radio" id="female" name="gender" className='col-custom-radio'/>
                              <label for="female">Female</label>
                              </div>
                              </div> */}
                            {/* <table class="table table-responsive ">
                              <thead className="text-white text-center">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Bank Name</th>
                                  <th scope="col">Account No.</th>
                                  <th scope="col">IDFC Code</th>
                                  <th scope="col">Branch Name</th>
                                  <th scope="col">Account Name</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody className="text-white text-center">
                                <tr>
                                  <td>1</td>
                                  <td>HDFC</td>
                                  <td>222222334</td>
                                  <td>HD00867</td>
                                  <td>Vijay Nager</td>
                                  <td>Vijay</td>
                                  <td>
                                    {" "}
                                    <div class="form-grp">
                                      <button type="submit" class="cmn--btn">
                                        <span>
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>ICICI</td>
                                  <td>3233231</td>
                                  <td>HD00867</td>
                                  <td>Vijay Nager</td>
                                  <td>Vijay </td>
                                  <td>
                                    <div class="form-grp">
                                      <button type="submit" class="cmn--btn">
                                        <span>
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>SBI</td>
                                  <td>21115564</td>
                                  <td>HD00867</td>
                                  <td>Vijay Nager</td>
                                  <td>Vijay </td>
                                  <td>
                                    <div class="form-grp">
                                      <button type="submit" class="cmn--btn">
                                        <span>
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table> */}

                            <div class="countries-tab">
                              <div class="accordion" id="countries">
                                <div class="accordion-item">
                                  <div class="match-fixing">
                                    <div
                                      class="accordion-header"
                                      id="countriestab1"
                                    >
                                      {" "}
                                     {/* UPI accordian Section starts */}
                                     <div className={upiright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#upiID1"
                                            aria-expanded="false"
                                            aria-controls="upiID1"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              PayTm
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          id="upiID1"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#upiID1"
                                        >
                                          <div class="accordion-body">
                                            <div >
                                              <div className="depositAccordion">sayan@paytm</div>
                                              <div className="depositAccordion">akash@paytm</div>
                                              <div className="depositAccordion">nikesh@paytm</div>

                                            </div>
                                          </div>
                                        </div>
                                        <div className={upiright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#upiID2"
                                            aria-expanded="false"
                                            aria-controls="upiID2"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              Google Pay
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          id="upiID2"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#upiID2"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div>
                                              <div className="depositAccordion">sayan@Gpay</div>
                                              <div className="depositAccordion">akash@Gpay</div>
                                              <div className="depositAccordion">nikesh@Gpay</div>

                                            </div>
                                          </div>
                                        </div>
                                        <div className={upiright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#upiID3"
                                            aria-expanded="false"
                                            aria-controls="upiID3"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              PhonePe
                                            </span>
                                          </button>
                                      
                                        </div>
                                        <div
                                          id="upiID3"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#upiID3"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div className="depositAccordion">sayan@ybl</div>
                                            <div className="depositAccordion">akash@ybl</div>
                                            <div className="depositAccordion">nikesh@ybl</div>

                                          </div>
                                        </div>

                                        {/* UPI accordian Section ends */}
                                    
                                          {/* Bank accordian Section starts */}
                                        <div className={bankright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#bankID1"
                                            aria-expanded="false"
                                            aria-controls="bankID1"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              AXIS BANK
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          id="bankID1"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#bankID1"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Akash Chawda
                                              </span>
                                              <span className="col-md-6">
                                                AXIS123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Sayan Mukherjee
                                              </span>
                                              <span className="col-md-6">
                                                AXIS123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Nikesh Zhope
                                              </span>
                                              <span className="col-md-6">
                                                AXIS123456
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={bankright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#bankID2"
                                            aria-expanded="false"
                                            aria-controls="bankID2"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              SBI BANK
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          id="bankID2"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#bankID2"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Tarun Joshi
                                              </span>
                                              <span className="col-md-6">
                                                SBI123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Krishna Bagora
                                              </span>
                                              <span className="col-md-6">
                                                SBI123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Kanika Patidar
                                              </span>
                                              <span className="col-md-6">
                                                SBI123456
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={bankright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#bankID3"
                                            aria-expanded="false"
                                            aria-controls="bankID3"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              YES BANK
                                            </span>
                                          </button>
                                        </div>
                                        
                                        <div
                                          id="bankID3"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#bankID3"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Akshat Sharma
                                              </span>
                                              <span className="col-md-6">
                                                YES123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Gulrez Ansari
                                              </span>
                                              <span className="col-md-6">
                                                YES123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Priyanshi Chouhan
                                              </span>
                                              <span className="col-md-6">
                                                YES123456
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        {/* Bank accordian Section ends */}

                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile4" role="tabpanel">
                    <div class="row justify-content-between">
                      <h3 class="wallet-title">Wallet</h3>
                      <div class="wallet-tab-wrap">
                        <ul class="nav">
                          <li class="nav-item">
                            <a
                              class="nav-link link-secondary active"
                              id="wallet-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#wallet1"
                              href="#"
                            >
                              <span>Deposit</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link link-secondary"
                              id="wallet-tab01"
                              data-bs-toggle="tab"
                              data-bs-target="#wallet2"
                              href="#"
                            >
                              <span>Withdraw</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link link-secondary"
                              id="wallet-tab03"
                              data-bs-toggle="tab"
                              data-bs-target="#wallet3"
                              href="#"
                            >
                              <span>Transactions</span>
                            </a>
                          </li>
                        </ul>
                        <div class="gift-card">
                          <a href="#0" class="left-cart">
                            {/* <span>
                              <img
                                src="assets/img/table/details/gitft.png"
                                alt="img"
                              />
                            </span> */}
                            <h6>10,000,000.000</h6>
                          </a>
                          <a href="#0" class="cmn--btn">
                            <span>Claim</span>
                          </a>
                        </div>
                      </div>
                      <div class="tab-content" id="wall-wrap">
                        <div
                          class="tab-pane fade show active"
                          id="wallet1"
                          role="tabpanel"
                        >
                          <div class="currency-wrap">
                            <h5 class="currency-title">Bank Deposit</h5>
                            <div class="row mb-4 g-3">
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/b1.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Ecopayz</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/b2.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>
                                      Cards through PayDo wallet top-up
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="bitcoin-item select-algeria">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/algeria.png"
                                        alt="icon"
                                      />
                                    </span>
                                  </a>
                                  <select name="algeria" id="algeri-select">
                                    <option value="1">Algeria</option>
                                    <option value="1">England</option>
                                    <option value="1">Croatia</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <h5 class="currency-title">Gift Cards</h5>
                            <div class="row g-3">
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/master.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>MasterCard</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/visa.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Visa</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/paypal.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Paypal</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/paysafe.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Paysafecard</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/gplay.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Google Pay</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-4">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/trustly.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Trustly</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="wallet2" role="tabpanel">
                          <div class="currency-wrap">
                            <h5 class="currency-title">Crypto Currencies</h5>
                            <div class="row mb-4 g-3">
                              <div class="col-lg-6">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/bitcoin.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Bitcoin</span>
                                  </a>
                                  <a href="#0">
                                    <span> 1 BTC = $19565.46</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/ethereum.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Ethereum</span>
                                  </a>
                                  <a href="#0">
                                    <span> 1 ETH = $1343.21</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/thether.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>TETHER</span>
                                  </a>
                                  <a href="#0">
                                    <span> 1 USDT = $1.00</span>
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="bitcoin-item">
                                  <a href="#0" class="icon-wrap">
                                    <span class="icon">
                                      <img
                                        src="assets/img/table/details/litecoin.png"
                                        alt="icon"
                                      />
                                    </span>
                                    <span>Litecoin</span>
                                  </a>
                                  <a href="#0">
                                    <span> 1 LTC = $53.76</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="wallet3" role="tabpanel">
                          <div class="description-table">
                            <table>
                              <tbody>
                                <tr>
                                  <th>Amount</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$620</span>
                                  </td>
                                  <td>
                                    04:02 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>In Progress</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                                <tr class="tb2">
                                  <td>
                                    <span class="text1">-$420</span>
                                  </td>
                                  <td>
                                    05:02 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Completed</td>
                                  <td>
                                    <span class="text1">Deposit</span>
                                  </td>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$220</span>
                                  </td>
                                  <td>
                                    11:2 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Pending</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                                <tr class="tb2">
                                  <td>
                                    <span class="text1">-$320</span>
                                  </td>
                                  <td>
                                    09:45 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Completed</td>
                                  <td>
                                    <span class="text1">Deposit</span>
                                  </td>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$920</span>
                                  </td>
                                  <td>
                                    07:20 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Pending</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$920</span>
                                  </td>
                                  <td>
                                    03:53 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Cancelled</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile7" role="tabpanel">
                    <div class="row justify-content-between">
                      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div class="profile-left-wrap">
                          <div class="form-box form-box-custom">
                            <div class="form-head"></div>
                            <form action="#0">
                              <div className="row">
                                <div className="col-md-3">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    From
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="date"
                                      placeholder="Bank Name"
                                    />
                                    <div class="left-icon">
                                      <i
                                        class="fa fa-calendar"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    To
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="date"
                                      placeholder="
                                    1234567565"
                                    />
                                    <div class="left-icon">
                                      <i
                                        class="fa fa-calendar"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-md-3">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Sort by Transaction:
                                  </label>
                                  <select
                                    name="year"
                                    id="year-select2"
                                    style={{ display: "none" }}
                                  >
                                    <option value="1">Month</option>
                                    <option value="1">January</option>
                                    <option value="1">February</option>
                                  </select>
                                  <div class="nice-select open" tabindex="0">
                                    <span class="current">
                                      <span class="icon">
                                        <i
                                          class="fas fa-thumbtack"
                                          style={{ "margin-right": "5px" }}
                                        ></i>
                                      </span>
                                      Month
                                    </span>
                                    <ul class="list">
                                      <li
                                        data-value="1"
                                        class="option selected focus"
                                      >
                                        Month
                                      </li>
                                      <li data-value="1" class="option">
                                        January
                                      </li>
                                      <li data-value="1" class="option">
                                        February
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Sort by Status:
                                  </label>
                                  <select
                                    name="year"
                                    id="year-select2"
                                    style={{ display: "none" }}
                                  >
                                    <option value="1">Month</option>
                                    <option value="1">January</option>
                                    <option value="1">February</option>
                                  </select>
                                  <div class="nice-select open" tabindex="0">
                                    <span class="current">
                                      <span class="icon">
                                        <i
                                          class="fas fa-thumbtack"
                                          style={{ "margin-right": "5px" }}
                                        ></i>
                                      </span>
                                      Month
                                    </span>
                                    <ul class="list">
                                      <li
                                        data-value="1"
                                        class="option selected focus"
                                      >
                                        Month
                                      </li>
                                      <li data-value="1" class="option">
                                        January
                                      </li>
                                      <li data-value="1" class="option">
                                        February
                                      </li>
                                    </ul>
                                  </div>
                                </div> */}
                                <div class="form-grp mt-4">
                                  <button type="submit" class="cmn--btn">
                                    <span>Apply</span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div class="profile-left-wrap">
                          <div class="description-table">
                            <table>
                              <tbody>
                                <tr>
                                  <th>Amount</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$620</span>
                                  </td>
                                  <td>
                                    04:02 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>In Progress</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                                <tr class="tb2">
                                  <td>
                                    <span class="text1">-$420</span>
                                  </td>
                                  <td>
                                    05:02 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Completed</td>
                                  <td>
                                    <span class="text1">Deposit</span>
                                  </td>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$220</span>
                                  </td>
                                  <td>
                                    11:2 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Pending</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                                <tr class="tb2">
                                  <td>
                                    <span class="text1">-$320</span>
                                  </td>
                                  <td>
                                    09:45 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Completed</td>
                                  <td>
                                    <span class="text1">Deposit</span>
                                  </td>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$920</span>
                                  </td>
                                  <td>
                                    07:20 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Pending</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                                <tr class="tb1">
                                  <td>
                                    <span class="text1">-$920</span>
                                  </td>
                                  <td>
                                    03:53 PM
                                    <span>10 Mar 2022</span>
                                  </td>
                                  <td>Cancelled</td>
                                  <td>
                                    <span class="text1">Withdraw</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="profile3" role="tabpanel">
                    <div class="row">
                      <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                        <div class="container">
                          <div class="selector">
                            <div class="selecotr-item">
                              <input
                                type="radio"
                                checked={bank === "bank"}
                                value="bank"
                                id="radio1"
                                name="selector"
                                onClick={handleChange}
                              />
                              <label
                                for="radio1"
                                class={`selector-item_label ${bankbtn}`}
                              >
                                Bank
                              </label>
                            </div>
                            <div class="selecotr-item">
                              <input
                                checked={bank === "upi"}
                                type="radio"
                                id="radio2"
                                value="upi"
                                onClick={handleChange}
                              />

                              <label
                                for="radio2"
                                class={`selector-item_label ${upibtn}`}
                              >
                                UPI Id
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className={`profile-left-wrap ${bank}`}>
                          <div class="form-box form-box-custom">
                            <div class="form-head"></div>
                            <form action="#0">
                              <div className="row">
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Bank Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder="Axis Bank"
                                    />
                                    <div class="left-icon">
                                      <i
                                        className="fa fa-bank"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder=" Jhon Doe"
                                    />
                                    <div class="left-icon">
                                      <i
                                        class="fas fa-user"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Account Number
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="12345678" />
                                    <div class="left-icon">
                                      <i
                                        class="fa solid fa-book"
                                        style={{
                                          marginRight: "10px",
                                          "font-size": "16px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Amount
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="10,000" />
                                    <div class="left-icon">
                                      <i class="fa fa-inr"></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>

                                <div className="col-md-12 my-3">
                                  <div class="change-picture-box">
                                    <div class="head">
                                      <span>Upload Transaction Receipt</span>
                                    </div>
                                    <div class="change-box">
                                      <div class="down">
                                        <img
                                          src="assets/img/table/details/picture.png"
                                          alt="img"
                                        />
                                      </div>
                                      <a href="#0">Choose file to upload</a>
                                      <p>
                                        Supported Files: JPG, JPEG, PNG, BMP
                                        PDF, TIE TIFF with a max size of 5 ME
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-grp mt-4">
                                  <button type="submit" class="cmn--btn">
                                    <span>Submit</span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* <div class="change-picture-box">
                              <div class="head">
                                 <span>Change profile picture</span>
                              </div>
                              <div class="change-box">
                                 <div class="down">
                                    <img src="assets/img/table/details/picture.png" alt="img"/>
                                 </div>
                                 <a href="#0">
                                    Choose file to upload
                                 </a>
                                 <p>Supported Files: JPG, JPEG, PNG, BMP PDF, TIE TIFF with a max size of 5 ME</p>
                              </div>
                           </div> */}
                        </div>
                        <div class={`profile-left-wrap ${upi}`}>
                          <div class="form-box form-box-custom">
                            <div class="form-head"></div>
                            <form action="#0">
                              <div className="row">
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Provider Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder="  Google Pay"
                                    />
                                    <div class="left-icon">
                                      <i
                                        className="fa-brands fa-google-pay"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My Name
                                  </label>
                                  <div class="form-grp">
                                    <input
                                      type="text"
                                      placeholder=" Jhon Doe"
                                    />
                                    <div class="left-icon">
                                      <i
                                        class="fas fa-user"
                                        style={{
                                          "font-size": "16px",
                                          marginRight: "10px",
                                        }}
                                      ></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    My UPI ID
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="12345678" />
                                    <div class="left-icon">
                                      <i
                                        class="fa solid fa-book"
                                        style={{
                                          marginRight: "10px",
                                          "font-size": "16px",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Amount
                                  </label>
                                  <div class="form-grp">
                                    <input type="text" placeholder="10,000" />
                                    <div class="left-icon">
                                      <i class="fa fa-inr"></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                  </div>
                                </div>

                                <div className="col-md-6 mt-4">
                                  <label
                                    for="exampleInputEmail1"
                                    className="mb-2"
                                  >
                                    Transaction ID
                                  </label>
                                  <div class="form-grp ">
                                    <input
                                      type="email"
                                      placeholder="45Dt56GH"
                                    />
                                    <div class="left-icon">
                                      <i class="fa solid fa-book"></i>
                                    </div>
                                    {/* <div class="right-lock">
                                       <i class="fa-solid fa-lock"></i>
                                    </div> */}
                                    {/* <a href="#0" class="repeat">
                                       <i class="fas fa-repeat"></i>
                                    </a> */}
                                  </div>
                                </div>

                                <div class="form-grp mt-4">
                                  <button type="submit" class="cmn--btn">
                                    <span>Submit</span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* <div class="change-picture-box">
                              <div class="head">
                                 <span>Change profile picture</span>
                              </div>
                              <div class="change-box">
                                 <div class="down">
                                    <img src="assets/img/table/details/picture.png" alt="img"/>
                                 </div>
                                 <a href="#0">
                                    Choose file to upload
                                 </a>
                                 <p>Supported Files: JPG, JPEG, PNG, BMP PDF, TIE TIFF with a max size of 5 ME</p>
                              </div>
                           </div> */}
                        </div>
                      </div>

                      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <div class="profile-left-wrap">
                          {/* <div class="accounts-box accounts-box-custom1 "> */}
                          {/* <div class="form-grp">
                              <button
                                type="submit"
                                class="cmn--btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCustom"
                              >
                                <span>
                                  <i class="fa fa-plus" aria-hidden="true"></i>{" "}
                                  Add Account
                                </span>
                              </button>
                            </div> */}

                          {/* <div class="form-grp">
                              <div class="selector">
                                <div class="selecotr-item">
                                  <input
                                    type="radio"
                                    id="radio1"
                                    name="selector"
                                    class="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    for="radio1"
                                    class="selector-item_label"
                                  >
                                    Bank
                                  </label>
                                </div>
                                <div class="selecotr-item">
                                  <input
                                    type="radio"
                                    id="radio2"
                                    name="selector"
                                    class="selector-item_radio"
                                  />
                                  <label
                                    for="radio2"
                                    class="selector-item_label"
                                  >
                                    UPI Id
                                  </label>
                                </div>
                                <button
                                  type="submit"
                                  class="cmn--btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCustom"
                                 >
                                  <span>
                                    <i
                                      class="fa fa-plus"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Add Account
                                  </span>
                                </button>
                              </div>
                            </div> */}
                          {/* </div> */}
                          <div class="selector">
                            <div class="selecotr-item">
                              <input
                                type="radio"
                                value="bankright"
                                id="radio3"
                                name="selector"
                                onClick={handleChange1}
                              />
                              <label
                                for="radio3"
                                class={`selector-item_label ${bankbtnright}`}
                              >
                                Bank
                              </label>
                            </div>
                            <div class="selecotr-item">
                              <input
                                type="radio"
                                id="radio4"
                                value="upiright"
                                onClick={handleChange1}
                              />

                              <label
                                for="radio4"
                                class={`selector-item_label ${upibtnright}`}
                              >
                                UPI Id
                              </label>
                            </div>
                          </div>
                          <div class="form-box">
                            {/* <div className='row'>
                              <div className='col-md-6 '>
                              <input type="radio" id="male" name="gender" className='col-custom-radio'/>
                              <label for="male">Male</label>
                              </div>

                              <div className='col-md-6 '>
                              <input type="radio" id="female" name="gender" className='col-custom-radio'/>
                              <label for="female">Female</label>
                              </div>
                              </div> */}
                            {/* <table class="table table-responsive ">
                              <thead className="text-white text-center">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Bank Name</th>
                                  <th scope="col">Account No.</th>
                                  <th scope="col">IDFC Code</th>
                                  <th scope="col">Branch Name</th>
                                  <th scope="col">Account Name</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody className="text-white text-center">
                                <tr>
                                  <td>1</td>
                                  <td>HDFC</td>
                                  <td>222222334</td>
                                  <td>HD00867</td>
                                  <td>Vijay Nager</td>
                                  <td>Vijay</td>
                                  <td>
                                    {" "}
                                    <div class="form-grp">
                                      <button type="submit" class="cmn--btn">
                                        <span>
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>ICICI</td>
                                  <td>3233231</td>
                                  <td>HD00867</td>
                                  <td>Vijay Nager</td>
                                  <td>Vijay </td>
                                  <td>
                                    <div class="form-grp">
                                      <button type="submit" class="cmn--btn">
                                        <span>
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>SBI</td>
                                  <td>21115564</td>
                                  <td>HD00867</td>
                                  <td>Vijay Nager</td>
                                  <td>Vijay </td>
                                  <td>
                                    <div class="form-grp">
                                      <button type="submit" class="cmn--btn">
                                        <span>
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table> */}

                            <div class="countries-tab">
                              <div class="accordion" id="countries">
                                <div class="accordion-item">
                                  <div class="match-fixing">
                                    <div
                                      class="accordion-header"
                                      id="countriestab1"
                                    >
                                      {" "}
                                     {/* UPI accordian Section starts */}
                                     <div className={upiright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#upiID1"
                                            aria-expanded="false"
                                            aria-controls="upiID1"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              PayTm
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          id="upiID1"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#upiID1"
                                        >
                                          <div class="accordion-body">
                                            <div >
                                              <div className="depositAccordion">akash@paytm</div>
                                              <div className="depositAccordion">nikesh@paytm</div>

                                            </div>
                                          </div>
                                        </div>
                                      

                                        {/* UPI accordian Section ends */}
                                    
                                          {/* Bank accordian Section starts */}
                                        <div className={bankright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#bankID1"
                                            aria-expanded="false"
                                            aria-controls="bankID1"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              AXIS BANK
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          id="bankID1"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#bankID1"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Akash Chawda
                                              </span>
                                              <span className="col-md-6">
                                                AXIS123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Sayan Mukherjee
                                              </span>
                                              <span className="col-md-6">
                                                AXIS123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Nikesh Zhope
                                              </span>
                                              <span className="col-md-6">
                                                AXIS123456
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={bankright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#bankID2"
                                            aria-expanded="false"
                                            aria-controls="bankID2"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              SBI BANK
                                            </span>
                                          </button>
                                        </div>
                                        <div
                                          id="bankID2"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#bankID2"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Tarun Joshi
                                              </span>
                                              <span className="col-md-6">
                                                SBI123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Krishna Bagora
                                              </span>
                                              <span className="col-md-6">
                                                SBI123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Kanika Patidar
                                              </span>
                                              <span className="col-md-6">
                                                SBI123456
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className={bankright}>
                                          <button
                                            style={{ marginTop: "17px" }}
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#bankID3"
                                            aria-expanded="false"
                                            aria-controls="bankID3"
                                          >
                                            {" "}
                                            <span>
                                              {" "}
                                              <i
                                                className="fa fa-bank"
                                                style={{ marginRight: "10px" }}
                                              ></i>{" "}
                                              YES BANK
                                            </span>
                                          </button>
                                          <div class="form-grp mt-4">
                                  <button type="submit" class="cmn--btn">
                                    <span>Add Bank Account</span>
                                  </button>
                                </div>
                                        </div>
                                        <div
                                          id="bankID3"
                                          class="accordion-collapse collapse "
                                          data-bs-parent="#bankID3"
                                        >
                                          {" "}
                                          <div class="accordion-body">
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Akshat Sharma
                                              </span>
                                              <span className="col-md-6">
                                                YES123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Gulrez Ansari
                                              </span>
                                              <span className="col-md-6">
                                                YES123456
                                              </span>
                                            </div>
                                            <div className="depositAccordion">
                                              <span className="col-md-6">
                                                Priyanshi Chouhan
                                              </span>
                                              <span className="col-md-6">
                                                YES123456
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        {/* Bank accordian Section ends */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--profile--> */}

            {/* <!--Sponsor Section--> */}
            {/* <div class="sponsor-section">
         <div class="container">
            <div class="sponsor-wrap owl-theme owl-carousel">
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/01.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/02.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/03.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/04.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/05.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/06.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/07.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/08.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/sponsor/09.png" alt="img"/>
                  </a>
               </div>
            </div>
            <div class="sponsor-wrap dark-none owl-theme owl-carousel">
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/01.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/03.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/04.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/05.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/06.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/07.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/08.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/09.png" alt="img"/>
                  </a>
               </div>
               <div class="sponsor-item">
                  <a href="#0">
                     <img src="assets/img/light-sponsor/01.png" alt="img"/>
                  </a>
               </div>
            </div>
         </div>
      </div> */}
            {/* <!--Sponsor Section--> */}

            {/* <!--Footer Section--> */}

            {/* <!--Footer Section--> */}
          </div>
        </div>
      </div>
    </div>
  );
}
