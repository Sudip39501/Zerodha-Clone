import React from "react";

const Hero = () => {
  return (
    <div className="container ">
      <div className="row text-center">
        <h2>Charges</h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "350",
            color: "#9B9B9B",
            marginBottom: "150px",
          }}
        >
          List of all the Charges and taxes
        </p>
      </div>
      <div className="row row-cols-1 text-center mb-5">
        <div className="col-lg-4">
          <img
            src="media/images/pricing0.svg"
            alt="pricing"
            style={{ width: "80%" }}
          />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="media/images/pricing0.svg"
            alt="pricing"
            style={{ width: "80%" }}
          />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="media/images/pricingMF.svg"
            alt="pricing"
            style={{ width: "80%" }}
          />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
