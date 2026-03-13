import React from "react";
import { Link, Outlet } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className="container ">
      <div className="row text-center mb-5">
        <h2 style={{ fontWeight: "400" }}>
          Open a free demat and trading account online
        </h2>
        <h4 className="text-muted mt-3" style={{ fontWeight: "300" }}>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h4>
        <div className="row mt-5">
          <div
            className="col-lg-6 mb-5 d-flex justify-content-center align-items-center"
            style={{ height: "400px" }}
          >
            <img
              src="/media/images/homeHero.png"
              alt="hero-image"
              style={{ height: "100%", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="col-6">
          
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
