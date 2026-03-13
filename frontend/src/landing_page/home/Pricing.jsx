import React from "react";

const Pricing = () => {
  return (
    <div className="container mt-5 ">
      <div className="row row-cols-1 row-cols-lg-2 ">
        <div className="col-lg-5 ">
      <h2>Unbeatable pricing</h2>
          <p style={{fontSize:"14px"}}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          
        </div>
        <div className="col-lg-7 p-3">
          <div className="row row-cols-lg-3 row-cols-md-2">
            <div className="col-lg-4 d-flex flex-row justify-content-start align-items-center p-0 ">           
              <img src="media/images/pricing0.svg" alt="images" style={{maxWidth:"90px"}} />
              <p style={{fontSize: "10px",display:"inline-block"}}>Free Account <br />Open</p>            
            </div>
            <div className="col-lg-4 d-flex flex-row justify-content-start align-items-center p-0">
              <img src="media/images/pricing0.svg" alt="images"  style={{maxWidth:"90px"}}/>
              <p style={{fontSize: "10px",display:"inline-block"}}>Free equity delivery <br />and direct mutual funds</p>
            </div>
            <div className="col-lg-4 d-flex flex-row justify-content-start align-items-center">
              <img src="media/images/pricingMF.svg" alt="image"  style={{maxWidth:"90px"}}/>
              <p style={{fontSize: "10px",display:"inline-block"}}>Intraday and <br />F&O</p>
            </div>
          </div>
        </div>
        <a href="#" style={{ textDecoration: "none",marginBottom:"20px" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
      </div>
    </div>
  );
};

export default Pricing;
