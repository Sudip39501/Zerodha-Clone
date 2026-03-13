import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center " >
        <h1 className="fs-3">Zerodha Products</h1>
        <p style={{fontSize:"20px" , fontWeight:"300"}} className="mt-2">Sleek, modern, and intuitive trading platforms</p>
        <p> Check out our  &nbsp; 
          <a href="#" style={{ textDecoration: "none",marginBottom:"20px" }}>
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
        <hr style={{ color: "gray", width: "80%", margin: "100px auto 0px " }} />
      </div>
    </div>
  );
};

export default Hero;
