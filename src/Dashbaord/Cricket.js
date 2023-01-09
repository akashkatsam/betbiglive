import React from "react";
import {Link, NavLink}  from "react-router-dom";
import { useState } from "react";
import Betslip from "./Betslip";
import horse from "./horse.png"
import Header from "../include/header2";
import LeftSideBar from "../include/LeftSideBar";
import { Carousel } from "react-responsive-carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
const Cricket = () => {

const [col, setCol] = useState("col-md-10 col-12");
const [dsiplay,setDisplay] = useState("col-3 d-none ")
  const  myFunction =()  => {
    setCol("col-7")
    setDisplay("col-3 d-show animate__animated animate__fadeInRight");

 
}
  return (
    <div>
      {/* Header Section start */}
      <Header />
      <div className="row">
        <div className="col-md-2 col-12">
          <LeftSideBar />
        </div>

        <div className={col}>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <div class="breadcumnd-banner">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="gaptop">
                  <h5>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5987/5987898.png"
                      className="tableIcon"
                      alt="icon"
                    />{" "}
                    On Going Matches
                  </h5>
                </div>
                <OwlCarousel
                  className="owl-theme"
                  items={2}
                  autoplayTimeout={1000}
                  margin={8}
                  autoplay={1000}
                  navigation={true}
                  nav={true}
                  dots={false}
                >
                  <div class="item">
                    <img
                      src="https://images.indianexpress.com/2020/08/Manchester-City-vs-Real-Madrid.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <img
                      src="https://images.indianexpress.com/2020/08/Manchester-City-vs-Real-Madrid.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <img
                      src="https://images.indianexpress.com/2020/08/Manchester-City-vs-Real-Madrid.jpg"
                      className="img-fluid"
                    />
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-md-6 col-12">
                <div className="gaptop">
                  <h5>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5987/5987898.png"
                      className="tableIcon"
                      alt="icon"
                    />{" "}
                    Upcoming Matches
                  </h5>
                </div>
                <OwlCarousel
                  className="owl-theme"
                  items={2}
                  margin={8}
                  autoplay={3000}
                  navigation={true}
                  nav={true}
                  dots={false}
                >
                  <div class="item">
                    <img
                      src="https://images.indianexpress.com/2020/08/Manchester-City-vs-Real-Madrid.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <img
                      src="https://images.indianexpress.com/2020/08/Manchester-City-vs-Real-Madrid.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <img
                      src="https://images.indianexpress.com/2020/08/Manchester-City-vs-Real-Madrid.jpg"
                      className="img-fluid"
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>

          {/* Ending of game header */}
          <div class="countries-tab pb-60">
            <div class="accordion" id="countries">
              <div class="accordion-item">
                <div class="accordion-header" id="countriestab1">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#MATCH1"
                    aria-expanded="true"
                    aria-controls="countries1"
                  >
                    <span>
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1099/1099680.png"
                        width={20}
                      />
                      &nbsp; India vs Pakistan
                    </span>
                  </button>
                  <div
                    id="MATCH1"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#countries1"
                  >
                    <div class="accordion-body d-flex align-items-center justify-content-between">
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Back</th>
                            <th scope="col">Lay</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="col-md-6">
                              <div class=" body-items1">
                                <NavLink
                                  activeClassName="active "
                                  className={"activeTab"}
                                  to="/inside"
                                >
                                  <img
                                    src="https://icons.iconarchive.com/icons/custom-icon-design/flag-2/256/India-Flag-icon.png"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>India</span>{" "}
                                </NavLink>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>500</span>
                                  </Link>
                                </div>

                                <div className="col-md-3 d-none d-sm-block">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3 d-none d-sm-block">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>500</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-md-6">
                              {" "}
                              <div class="body-items1">
                                <NavLink to="/inside" class="item">
                                  <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUpZvlJjoEu6BGVowMRWvOvsusQ3o8ENj7Op9MQFSTbcwRIQ6pwy5K7qIJZYd-fSuJXI&usqp=CAU"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>Pakistan</span>{" "}
                                </NavLink>
                              </div>
                            </td>
                            <td className="col-md-3 offset-2">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>{" "}
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              <div class="body-items1">
                                <Link to="/inside" class="item">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/512/263/263405.png"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>Draw</span>
                                </Link>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2 d-none d-sm-block">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>{" "}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="accordion-header" id="countriestab2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#MATCH2"
                    aria-expanded="true"
                    aria-controls="countries2"
                  >
                    <span>
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1099/1099680.png"
                        width={20}
                      />
                      &nbsp; Australia vs England
                    </span>
                  </button>
                  <div
                    id="MATCH2"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#countries2"
                  >
                    <div class="accordion-body d-flex align-items-center justify-content-between">
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Back</th>
                            <th scope="col">Lay</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="col-md-6">
                              <div class=" body-items1">
                                <Link to="/inside" class="item">
                                  <img
                                    src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Australia-Flag-icon.png"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>Australia</span>{" "}
                                </Link>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-md-6">
                              {" "}
                              <div class="body-items1">
                                <Link to="/inside" class="item">
                                  <img
                                    src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>England</span>{" "}
                                </Link>
                              </div>
                            </td>
                            <td className="col-md-3 offset-2">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>{" "}
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              <div class="body-items1">
                                <Link to="/inside" class="item">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/512/263/263405.png"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>Draw</span>{" "}
                                </Link>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="col-md-3">
                              <div className="row">
                                <div className="col-md-3 offset-2">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>

                                <div className="col-md-3">
                                  <Link class="item body-items2">
                                    <span onClick={myFunction}>50</span>
                                  </Link>
                                </div>
                              </div>
                            </td>{" "}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={dsiplay}>
          <Betslip />
        </div>
      </div>

      {/* Header Section End */}
      {/* Starting of game header */}
    </div>
  );
};

export default Cricket;
