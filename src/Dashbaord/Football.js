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

import Img1 from './1.jpg'
import Img2 from "./2.jpg";
import Img3 from "./3.jpg";
import Img4 from "./4.jpg";
import Img5 from "./5.jpg";

const Football = () => {
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
          <div class="breadcumnd-banner">
            <div className="row">
              <div className="col-6">
                <div className="gaptop">
                  <h5>
                    <img src="assets/img/table/luage.png" alt="icon" /> UEFA
                    Champions League
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
                    <img src={Img1} className="img-fluid" />
                  </div>
                  <div class="item">
                    <img src={Img2} className="img-fluid" />
                  </div>
                  <div class="item">
                    <img src={Img3} className="img-fluid" />
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-6">
                <div className="gaptop">
                  <h5>
                    <img src="assets/img/table/luage.png" alt="icon" /> UEFA
                    Champions League
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
                    <img src={Img4} className="img-fluid" />
                  </div>
                  <div class="item">
                    <img src={Img5} className="img-fluid" />
                  </div>
                  <div class="item">
                    <img src={Img3} className="img-fluid" />
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
                      <img src="assets/img/table/luage.png" alt="icon" />
                      &nbsp; Argentina vs France
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
                                <Link to="/footballinside" class="item">
                                  <img
                                    src="https://cdn11.bigcommerce.com/s-e2nupsxogj/images/stencil/500x659/products/6033/28326/v9eyw5lueb7wg7tnffw7__66618.1668763032.jpg?c=1"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>Argentina</span>{" "}
                                </Link>
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
                                    <span onClick={myFunction}>500</span>
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
                                <Link to="/footballinside" class="item">
                                  <img
                                    src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/FR-France-Flag-icon.png"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>France</span>{" "}
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
                                <Link to="/footballinside" class="item">
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
                      <img src="assets/img/table/luage.png" alt="icon" />
                      &nbsp; Brazil vs England
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
                                <Link to="/footballinside" class="item">
                                  <img
                                    src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/brazil-flag-icon.png"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>Brazil</span>{" "}
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
                                <Link to="/footballinside" class="item">
                                  <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJvsxZhtf6bApXEjpWh8VPYN8TloloFDdXA&usqp=CAU"
                                    className="tableIcon"
                                    alt="icon"
                                  />
                                  <span>ENGLAND</span>{" "}
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
                                <Link to="/footballinside" class="item">
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

export default Football;
