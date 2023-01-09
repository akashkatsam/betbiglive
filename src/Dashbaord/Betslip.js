import React from "react";
import { span, Link } from "react-router-dom";
const Betslip = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="right-site-menu">
        <div class="right-box">
          <div class="right-wrapper-area">
            <div class="blance-items">
              <div class="left-blance">
                <span>
                  <img
                    src="assets/img/header/right-icon/wallet.svg"
                    alt="icon"
                  />
                </span>
                <span class="text-blabce">Balance</span>
              </div>
              <span class="blance">$300</span>
            </div>
            {/* <div class="close-items">
              <div class="close-head">
                <span>Latvia vs Moldova</span>
              </div>
            </div> */}
            <div class="combo-box">
              <ul class="nav">
                <li class="nav-item">
                  <a
                    class="nav-link link-secondary"
                    id="combo-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#coombo"
                    href="#"
                  >
                    <span class="bed1">
                      <img
                        src="assets/img/header/right-icon/bed.svg"
                        alt="icon"
                      />
                    </span>
                    <span class="text-bets"> &nbsp;Bet Slip</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link link-secondary active"
                    id="bets-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bbets"
                    href="#"
                  >
                    <span>
                      <img
                        src="assets/img/header/right-icon/bets.svg"
                        alt="icon"
                      />
                    </span>
                    <span class="text-bets"> My Bets</span>
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="tabContentboxes">
                <div class="tab-pane fade" id="coombo" role="tabpanel">
                  <div class="combo-wrapper">
                    <div class="combo-wrapper">
                      <div class="close-box">
                        <div class="close-items1">
                          <div class="close-head">
                            <div className='depositAccordion' >
                              <span className='col-md-6' >Latvia</span>
                              <span className='col-md-6' >Max Market:0</span>
                            </div>

                          
                          </div>
                          <div class="match-fixing">
                            <div class="match-items">
                              <div class="match-items-left">
                                <div class="ammount-items">
                                  <form>
                                    <input type="number" placeholder="Odds" />
                                    <input type="number" placeholder="Stake" />
                                    <div className="buttonCard">
                                      <Link
                                        to="/inside"
                                        class="item body-items3"
                                      >
                                        <span>100</span>
                                      </Link>
                                      <Link
                                        to="/inside"
                                        class="item body-items3"
                                      >
                                        <span>200</span>
                                      </Link>
                                      <Link
                                        to="/inside"
                                        class="item body-items3"
                                      >
                                        <span>300</span>
                                      </Link>
                                    </div>
                                    <div className="buttonCard">
                                      <Link
                                        to="/inside"
                                        class="item body-items3"
                                      >
                                        <span>400</span>
                                      </Link>
                                      <Link
                                        to="/inside"
                                        class="item body-items3"
                                      >
                                        <span>500</span>
                                      </Link>
                                      <Link
                                        to="/inside"
                                        class="item body-items3"
                                      >
                                        <span>600</span>
                                      </Link>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="combo-switch">
                        <span>Accept all odds changes</span>
                        <label class="switch-com">
                          <input type="checkbox" class="checkbox" hidden />
                          <span class="checkbox-label">
                            <span class="ball"></span>
                          </span>
                        </label>
                      </div>
                      {/* <div class="ammount-items">
                                                <form action="#">
                                                    <input type="number" placeholder="Bet Amount" />
                                                    <button type="submit">
                                                        Max
                                                    </button>
                                                </form>
                                            </div> */}
                      <div class="combo-footer">
                        <a href="#0" class="cmn--btn">
                          <span> Place Bet $300</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show active"
                  id="bbets"
                  role="tabpanel"
                >
                  <div>
                    <div class="countries-tab pb-60">
                      <div class="accordion" id="countries">
                        <div class="accordion-item">
                          <div class="match-fixing">
                            <div class="accordion-header" id="countriestab1">
                              <button
                                style={{ marginTop: "17px" }}
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#unmatchedBet1"
                                aria-expanded="false"
                                aria-controls="unmatchedbet1"
                              >
                                {" "}
                                <span> Unmatched Bets</span>
                              </button>
                              <div
                                id="unmatchedBet1"
                                class="accordion-collapse collapse "
                                data-bs-parent="#unmatchedbet1"
                              >
                                <div class="accordion-body">
                                  <p>No records found</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="match-fixing">
                            <div class="accordion-header" id="countriestab2">
                              <button
                                style={{ marginTop: "17px" }}
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#matchedBet1"
                                aria-expanded="false"
                                aria-controls="matchedbet1"
                              >
                                {" "}
                                <span> Matched Bets</span>
                              </button>
                              <div
                                id="matchedBet1"
                                class="accordion-collapse collapse "
                                data-bs-parent="#matchedbet1"
                              >
                                {" "}
                                <div class="accordion-body">
                                  <p>No records found</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="match-fixing">
                            <div class="accordion-header" id="countriestab2">
                              <button
                                style={{ marginTop: "17px" }}
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#premiumSports"
                                aria-expanded="false"
                                aria-controls="premiumSports"
                              >
                                {" "}
                                <span> Premium Sports Book</span>
                              </button>
                              <div
                                id="premiumSports"
                                class="accordion-collapse collapse"
                                data-bs-parent="#premiumSports"
                              >
                                {" "}
                                <div class="accordion-body">
                                  <p>No records found</p>
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
      </div>
    </div>
  );
};
export default Betslip;
