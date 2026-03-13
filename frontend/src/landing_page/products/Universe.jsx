import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center \">
        <p className="mt-5 ">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <h2 style={{ fontSize: "18px" }} className="mt-4">
          The Zerodha Universe
        </h2>
        <p style={{ fontSize: "12px" }} className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row row-cols-1">

        <div className="col-lg-2"></div>
        <div
          className="col-lg-8 d-flex justify-content-center align-items-center flex-wrap gap-2"
          style={{ height: "400px" }}
        >
          <div className="" style={{ width: "30%", height: "150px" }}>
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{ width: "60%", objectFit: "contain" ,  height:"75px" }}
            />
            <p style={{ fontSize: "12px" }} className="mt-3 mb-5">
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals. <br />
            </p>
          </div>
          <div style={{ width: "30%", height: "150px" }}>
            <img
              src="media/images/sensibullLogo.svg"
              alt="sensibullLogo"
              style={{ width: "60%", objectFit: "contain" ,  height:"75px" }}
            />
            <p style={{ fontSize: "12px" }} className="mt-3 mb-5">
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="" style={{ width: "30%", height: "150px" }}>
            <img
              src="media/images/tijori.svg"
              alt="tijori"
              style={{ width: "60%", objectFit: "contain"  , height:"75px"}}
            />
            <p style={{ fontSize: "12px" }} className="mt-3 mb-5">
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </div>
          <div className="" style={{ width: "30%", height: "150px" }}>
            <img
              src="media/images/streakLogo.png"
              alt="streakLogo"
              style={{ width: "60%", objectFit: "contain" ,  height:"75px" }}
            />
            <p style={{ fontSize: "12px" }} className="mt-3 mb-5">
              sectors, supply chains, and more. <br />
              that allows you to create and backtest <br />
              strategies without coding. <br />
            </p>
          </div>
          <div className="" style={{ width: "30%", height: "150px" }}>
            <img
              src="media/images/smallcaseLogo.png"
              alt="smallcaseLogo"
              style={{ width: "60%", objectFit: "contain" ,  height:"75px" }}
            />
            <p style={{ fontSize: "12px" }} className="mt-3 mb-5">
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs. <br />
            </p>
          </div>
          <div className="" style={{ width: "30%", height: "150px" }}>
            <img
              src="media/images/dittoLogo.png"
              alt="dittoLogo"
              style={{ width: "60%", objectFit: "contain" ,  height:"75px" }}
            />
            <p style={{ fontSize: "12px" }} className="mt-3 mb-5">
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling. <br />
            </p>
          </div>
        </div>
        <div className="col-lg-2"></div>
        </div>

        <button
          className="btn btn-primary p-2  my-5"
          style={{
            minWidth: "170px",
            width: "15%",
            margin: "auto",
            fontSize: "20px",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
