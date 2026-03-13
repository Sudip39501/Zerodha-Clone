import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center gap-3" style={{ fontSize: "22px" }}>
        <img
          src="media/images/homeHero.png"
          alt="hero-image"
          className="mb-5"
          style={{ width: "70%", margin: "auto", minWidth: "310px" }}
        />
        <h1 className="">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary p-2 "
          style={{
            minWidth: "170px",
            width: "15%",
            margin: "auto",
            fontSize: "20px",
          }}
          onClick={() => {
            navigate("/OpenAccount/signup");
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
