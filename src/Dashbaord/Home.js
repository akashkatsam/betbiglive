import React from 'react'
import Header from '../include/header';
import { Carousel } from "react-responsive-carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Outlet, Link } from "react-router-dom";
import Net from './neet.jpg'
// import Logo from '.'
export default function Home() {
  return (
    <>
      <Header />
      <div class="body-middle">
        <OwlCarousel
          className="owl-theme"
          items={1}
          autoplayTimeout={1000}
          margin={8}
          autoplay={1000}
          navigation={true}
          nav={true}
          dots={false}
        >
          <div class="item">
            <img
              src="https://fairplaydev.s3.ap-south-1.amazonaws.com/e2cbdcf7-bf22-45d0-b7b1-87712a1d4012.jpeg"
              className="img-fluid"
            />
          </div>
          <div class="item">
            <img
              src="https://fairplaydev.s3.ap-south-1.amazonaws.com/9c5cb043-47c1-4422-bddc-a1521ad1444c.jpeg"
              className="img-fluid"
            />
          </div>
         
        </OwlCarousel>
      </div>
      <div class="banner-feature">
        <div class="container-fluid">
          <div class="banner-feature-wrapper">
            <a href="live.html" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img src="assets/img/banner-freature/live.svg" alt="feature" />
              </span>
              <span class="banner-feature-contentt">Live</span>
            </a>
            <a href="#0" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img
                  src="assets/img/banner-freature/parcents.svg"
                  alt="feature"
                />
              </span>
              <span class="banner-feature-contentt">0% Margin</span>
            </a>
            <Link to="/football" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img
                  src="assets/img/banner-freature/football.svg"
                  alt="feature"
                />
              </span>
              <span class="banner-feature-contentt">Football</span>
            </Link>
            <Link to="/tennis" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img
                  src="assets/img/banner-freature/tennis.svg"
                  alt="feature"
                />
              </span>
              <span class="banner-feature-contentt">Tennis</span>
            </Link>
            <Link to="/tennis" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img src="assets/img/banner-freature/table.svg" alt="feature" />
              </span>
              <span class="banner-feature-contentt">Table Tennis</span>
            </Link>
            <Link to="/football" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img
                  src="assets/img/banner-freature/basketball.svg"
                  alt="feature"
                />
              </span>
              <span class="banner-feature-contentt">Basketball</span>
            </Link>
            <a href="rugby.html" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img
                  src="assets/img/banner-freature/esport.svg"
                  alt="feature"
                />
              </span>
              <span class="banner-feature-contentt">eSports</span>
            </a>
            <a href="profile.html" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img
                  src="assets/img/banner-freature/promotion.svg"
                  alt="feature"
                />
              </span>
              <span class="banner-feature-contentt">Promotions</span>
            </a>
            <Link to="/cricket" class="banner-feature-items">
              <span class="banner-feauter-thumb">
                <img
                  src="assets/img/banner-freature/cricket.svg"
                  alt="feature"
                />
              </span>
              <span class="banner-feature-contentt">Cricket</span>
            </Link>
          </div>
        </div>
      </div>
      <section class="more-features ">
        <div class="overlay pt-70 pb-70">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-0 order-1">
                <div class="img-area">
                  <img
                    src="https://template.viserlab.com/casinous/demo/assets/images/about/thumb.png  "
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <br></br> <br></br>
                <div class="section-header">
                  <h4 class="title">
                    Bets on future currencies prices between users
                  </h4>
                  <p>
                    Cutting out bookmakers, opens a new betting experience for
                    players.
                  </p>
                </div>
                <div class="content-area">
                  <div class="single-item">
                    <div class="image-area">
                      <img
                        src="https://pixner.net/bitbetio/main/assets/images/icon/more-features-icon-1.png"
                        alt="image"
                      />
                    </div>
                    <div class="text-area">
                      <h5>
                        <b>Pool Bets</b>
                      </h5>
                      <p>
                        Players bet on their predicted outcomes and all stakes
                        go into a single pool. Winners share the pool. The odds
                        are dynamic and depend on the number of participants and
                        the amounts they wagered.
                      </p>
                    </div>
                  </div>
                  <div class="single-item">
                    <div class="image-area">
                      <img
                        src="https://pixner.net/bitbetio/main/assets/images/icon/more-features-icon-2.png"
                        alt="image"
                      />
                    </div>
                    <div class="text-area">
                      <h5>
                        <b>Betting Theme</b>
                      </h5>
                      <p>
                        The purest form of peer-to-peer betting. One player
                        opens the bet and defines the odds and another player
                        matches the bet. Players are not bound by unfavourable,
                        centrally-defined odds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <section class="faqs-section">
        <div class="overlay pt-120">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-7">
                <div class="section-header text-center">
                  <h2 class="title">300% BONUS ON YOUR FIRST DEPOSIT.</h2>
                  <p>
                    Answers for our most popular questions about sportsbetting,
                    crypto, and bitbetio
                  </p>
                  <br></br>
                  <br></br>
                  <a href="#" class="btn">
                    Explore
                    {/* <span>&#8594;</span> */}
                  </a>
                </div>
              </div>
            </div>
            <div class="row faq-bg d-flex justify-content-center">
              <div class="col-xl-8 col-md-8">
                <div class="faq-box mt-60 mb-60">
                  <div class="accordion" id="accordionFaqs">
                    <div class="accordion-item">
                      <h5 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          I want to play at Bitbetio, What do i need to do?
                        </button>
                      </h5>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionFaqs"
                      >
                        <div class="accordion-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h5 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How fast do I get paid once I win a bet?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionFaqs"
                      >
                        <div class="accordion-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h5 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What are the commissions I have to pay?
                        </button>
                      </h5>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionFaqs"
                      >
                        <div class="accordion-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h5 class="accordion-header" id="headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Can I set the odds for any bet I want?
                        </button>
                      </h5>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionFaqs"
                      >
                        <div class="accordion-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h5 class="accordion-header" id="headingFive">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What kind of Escrow do you provide?
                        </button>
                      </h5>
                      <div
                        id="collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionFaqs"
                      >
                        <div class="accordion-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-services">
        <div class="container">
          <div class="row">
            <h2 className="text-center">WHY IS BetBig BETTER THAN OTHERS?</h2>
            <br></br>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fab fa-battle-net"></i>
                  </span>
                  <h3 class="title">Global coverage</h3>
                  <p class="description">
                    Mauris volutpat urna tristique finibus iaculis. Morbi
                    facilisis, justo eu vulputate elementum, est augue tincidunt
                    ante, sed efficitur leo ligula vel velit.
                  </p>
                  <a href="#" class="learn-more">
                    Learn More
                  </a>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fab fa-asymmetrik"></i>
                  </span>
                  <h3 class="title">It Management</h3>
                  <p class="description">
                    Mauris volutpat urna tristique finibus iaculis. Morbi
                    facilisis, justo eu vulputate elementum, est augue tincidunt
                    ante, sed efficitur leo ligula vel velit.
                  </p>
                  <a href="#" class="learn-more">
                    Learn More
                  </a>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fab fa-artstation"></i>
                  </span>
                  <h3 class="title">Software Development</h3>
                  <p class="description">
                    Mauris volutpat urna tristique finibus iaculis. Morbi
                    facilisis, justo eu vulputate elementum, est augue tincidunt
                    ante, sed efficitur leo ligula vel velit.
                  </p>
                  <a href="#" class="learn-more">
                    Learn More
                  </a>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="playbnt">
        <a class="play-btn" href="#"></a>
      </section>
      <section>
        <footer class="footer-section">
          <div class="container">
            <div class="footer-content pt-2 pb-2">
              <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Bet-Big</h3>
                    </div>
                    <ul>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-2 col-md-2 mb-30">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Games</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Card Game</a>
                      </li>
                      <li>
                        <a href="#">IPL Betting</a>
                      </li>
                      <li>
                        <a href="#">Football Betting</a>
                      </li>
                      <li>
                        <a href="#">Tennis Betting</a>
                      </li>
                      <li>
                        <a href="#">Live Casino Betting</a>
                      </li>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">Expert Team</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div class="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div class="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button>
                          <i class="fab fa-telegram-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div class="copyright-text">
                    <p>Copyright &copy; 2022, All Right Reserved </p>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div class="footer-menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      {/* end section */}
      {/* modal */}
      <div
        class="modal mylogin fade"
        id="exampleModal2"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="head">
                <h5>Create New Account</h5>
                <p>
                  Already have an account?{" "}
                  <a href="#0" class="text-base">
                    Login
                  </a>
                </p>
              </div>
            </div>
            <button
              type="button"
              class="btn-close cross-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-body">
              <div class="register-from">
                <form action="#0">
                  <div class="items">
                    <div class="form-input">
                      <input type="text" id="uname" placeholder="Name    " />
                    </div>
                  </div>
                  <div class="items">
                    <div class="form-input">
                      <input
                        type="text"
                        id="uname"
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>
                  <div class="items">
                    <div class="form-input">
                      <input type="email" id="email33" placeholder="Password" />
                    </div>
                  </div>
                  <div class="items">
                    <div class="form-input">
                      <div class="form-group">
                        <input
                          id="password-field2"
                          type="password"
                          class="form-control"
                          placeholder="Confirm Password"
                          name="password"
                          value=""
                        />
                        <span
                          id="#password-field2"
                          class="fa fa-fw fa-eye field-icon toggle-password2"
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div class="items text-center">
                    <button
                      type="submit"
                      class="cmn--btn cd-popup-close repopup"
                    >
                      <span>register</span>
                    </button>
                  </div>
                  {/* <div class="orbar">
                    <span>OR</span>
                  </div> */}
                  {/* <br></br> */}
                  {/* <div class="items text-center">
                    <button
                      type="submit"
                      class="cmn--btn cd-popup-close repopup"
                    >
                      <span>register</span>
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal end */}
      <div
        class="modal mylogin signup-popup fade"
        id="exampleModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="head">
                <h5>Sign into your account</h5>
                <p>
                  Don't have an account?{" "}
                  <a href="#0" class="text-base">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
            <button
              type="button"
              class="btn-close cross-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-body">
              <div class="register-from">
                <form action="#0">
                  <div class="items">
                    <div class="form-input">
                      <input
                        type="email"
                        id="email3"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div class="items">
                    <div class="form-input">
                      <div class="form-group">
                        <input
                          id="password-field"
                          type="password"
                          class="form-control"
                          placeholder="Your Password"
                          name="password"
                          value=""
                        />
                        <span
                          id="#password-field"
                          class="fa fa-fw fa-eye field-icon toggle-password"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="items">
                    <div class="remember d-flex align-items-center justify-content-between">
                      <div class="form-check">
                        <label
                          class="form-check-label"
                          for="flexCheckDefault22"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault22"
                          />
                          Remember me
                        </label>
                      </div>
                      <a href="#0" class="forget">
                        Forget password?
                      </a>
                    </div>
                  </div>
                  <div class="items text-center">
                    <button
                      type="submit"
                      class="cmn--btn cd-popup-close repopup"
                    >
                      <span>Login</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
