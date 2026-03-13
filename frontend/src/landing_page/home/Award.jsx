import React from "react";

const Award = () => {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row  row-cols-lg-2 row-cols-1">
        <div className="col-lg-6 p-5">
          <img src="media/images/largestBroker.svg" alt="image"  style={{width:"100%"}}/>
        </div>
        <div className="col-lg-6  p-5">
          <h1>Largest Stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all the retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row my-5">
            <div className="col-6">
              <ul>
               
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Comodity Derivatives</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
               <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual Fund</p>
                </li>
                <li>
                  <p>Bond and Gov.t Securities</p>
                </li>
              </ul>
            </div>
          </div>
            <img src="/media/images/pressLogos.png" alt="pressLogo" style={{width:"100%"}} />
        </div>
      </div>
    </div>
  );
};

export default Award;
