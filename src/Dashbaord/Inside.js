import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Betslip from "./Betslip";
import horse from "./horse.png";
import Header from "../include/header2";
import LeftSideBar from "../include/LeftSideBar";
import { Carousel } from "react-responsive-carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
const Inside = () => {
  const [col, setCol] = useState("col-10 ");
  const [dsiplay, setDisplay] = useState("col-3 d-none ");
  const myFunction = () => {
    setCol("col-7");
    setDisplay("col-3 d-show animate__animated animate__fadeInRight");
  };
  return (
    <div>
      {/* Header Section start */}
      <Header />
      <div className="row">
        <div className="col-2">
          <LeftSideBar />
        </div>

        <div className={col}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row corerow">
            <div className="col">
              <div className="cardcore">
                <h6>Pakistan</h6>
                <p> CRR 3.28</p>{" "}
              </div>
            </div>
            <div className="col">
              <div className="cardcore textcenter">
                <h6>148/45 : 449 All Out</h6>
                <p>Pakistan are 154 for 3 after 47.0 overs.</p>
              </div>
            </div>
            <div className="col textend">
              <div className="cardcore">
                <h6 className="text-right">India</h6>
                <p> RR.135</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img
                src="https://thumbs.dreamstime.com/b/mobile-football-live-score-board-stadium-spotlight-vector-illustration-96471226.jpg"
                className="img-fluid"
              />
            </div>
            <div className="col-6 scrolltable">
              <table class="table scoretable">
                <thead>
                  <tr>
                    <th scope="col " className="BatsmanLeft" >
                      Batsman
                    </th>
                    <th scope="col">R</th>
                    <th scope="col">B</th>
                    <th scope="col">4S</th>
                    <th scope="col">6S</th> <th scope="col">S/R</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="textleft">
                      DP Conway
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      HM Nicholls
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="textleft">
                      KS Williamson
                    </th>
                    <td>71</td>
                    <td>100</td>
                    <td>9</td>
                    <td>0</td>
                    <td>90.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
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
                        <span>INDIA vs PAKISTAN</span>
                      </button>
                      <div
                        id="MATCH1"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#countries"
                      >
                        <div class="accordion-body d-flex align-items-center justify-content-between">
                          <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col"> </th>
                                <th scope="col">Back</th>
                                <th scope="col">Lay</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="col-md-6">
                                  <div class=" body-items1">
                                    <a href="#0" class="item">
                                      <span>India</span>
                                    </a>
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
                                    <a href="#0" class="item">
                                      <span>Pakistan</span>
                                    </a>
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
                                    <a href="#0" class="item">
                                      <span>Draw</span>
                                    </a>
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

                    <br></br>

                    <div class="accordion-header" id="countriestab">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#MATCH2"
                        aria-expanded="true"
                        aria-controls="countries2"
                      >
                        <span>AUSTRALIA vs ENGLAND</span>
                      </button>
                      <div
                        id="MATCH2"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#countries"
                      >
                        <div class="accordion-body d-flex align-items-center justify-content-between">
                          <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col"> </th>
                                <th scope="col">Back</th>
                                <th scope="col">Lay</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="col-md-6">
                                  <div class=" body-items1">
                                    <a href="#0" class="item">
                                      <span>Australia</span>
                                    </a>
                                  </div>
                                </td>
                                <td className="col-md-3">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <a href="#0" class="item body-items2">
                                        <span>Suspended</span>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-md-3">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <a href="#0" class="item body-items2">
                                        <span>Suspended</span>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="col-md-6">
                                  <div class="body-items1">
                                    <a href="#0" class="item">
                                      <span>England</span>
                                    </a>
                                  </div>
                                </td>
                                <td className="col-md-3 offset-2">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <a href="#0" class="item body-items2">
                                        <span>Suspended</span>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-md-3">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <a href="#0" class="item body-items2">
                                        <span>Suspended</span>
                                      </a>
                                    </div>
                                  </div>
                                </td>{" "}
                              </tr>
                              <tr>
                                <td>
                                  {" "}
                                  <div class="body-items1">
                                    <a href="#0" class="item">
                                      <span>Draw</span>
                                    </a>
                                  </div>
                                </td>
                                <td className="col-md-3">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <a href="#0" class="item body-items2">
                                        <span>Suspended</span>
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-md-3">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <a href="#0" class="item body-items2">
                                        <span>Suspended</span>
                                      </a>
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

export default Inside;
