import React from "react";
import {Link}  from "react-router-dom";
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
const LiveCasino = () => {

const [col, setCol] = useState("col-10 ");
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
        <div className="col-2">
          <LeftSideBar />
        </div>

        <div className="col-10">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row corerow">
            <div className="col">
              <div className="cardcore">
                <h6>Min Bet</h6>
                <p> 1000</p>
              </div>
            </div>

            <div className="col">
              <div className="cardcore textcenter">
                <h6>Max Bet</h6>
                <p>2,00,000.000</p>
              </div>
            </div>

            <div className="col textend">
              <div className="cardcore">
                <h6 className="text-right">Max Win</h6>
                <p> 6,00,00.000</p>
              </div>
            </div>
          </div>

          <br></br>
          <div className="row">
            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="casinocard">
                <img
                  src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section End */}
      {/* Starting of game header */}
    </div>
  );
};

export default LiveCasino;


// import React from "react";
// import Header from "../include/header2";
// import LeftSideBar from "../include/LeftSideBar";
// import { Outlet, Link } from "react-router-dom";

// export default function LiveCasino() {
//   return (
//     <div>
//       <Header />

//       <div className="container">
//         <div className="row">
//           <div className="col-md-2">
//             <LeftSideBar />
//           </div>
//           <div className="col-md-10">
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div className="row corerow">
//               <div className="col">
//                 <div className="cardcore">
//                   <h6>Min Bet</h6>
//                   <p> 1000</p>{" "}
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="cardcore textcenter">
//                   <h6>Max Bet</h6>
//                   <p>2,00,000.000</p>
//                 </div>
//               </div>
//               <div className="col textend">
//                 <div className="cardcore">
//                   <h6 className="text-right">Max Win</h6>
//                   <p> 6,00,00.000</p>
//                 </div>
//               </div>
//             </div>

//             <br></br>

//             <div className="row">
//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/18e878d9-1126-4441-8a45-4c71d96b61eb.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/db2b5110-cd70-492a-98d8-cac6b31887ed.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/18e878d9-1126-4441-8a45-4c71d96b61eb.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/db2b5110-cd70-492a-98d8-cac6b31887ed.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/18e878d9-1126-4441-8a45-4c71d96b61eb.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/db2b5110-cd70-492a-98d8-cac6b31887ed.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/18e878d9-1126-4441-8a45-4c71d96b61eb.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/db2b5110-cd70-492a-98d8-cac6b31887ed.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-2">
//                 <div className="casinocard">
//                   <img
//                     src="https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/4f335dd5-7466-4626-a674-2462bd9b35b0.png"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
