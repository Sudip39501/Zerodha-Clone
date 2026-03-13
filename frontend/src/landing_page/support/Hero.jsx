import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-primary "
      style={{
        color: "white",
      }}
    >
      <div className="container mt-0">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between my-5">
              <a
                href="#"
                style={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "400",
                  textDecoration: "none",
                }}
              >
                Support Portal
              </a>
              <a
                href="#"
                style={{
                  fontSize: "16px",
                  color: "white",
                }}
              >
                Track Tickets
              </a>
            </div>
            <div className="row row-col-1">
              <div className="col-lg-6 mb-3">
                <h6 style={{ fontWeight: "350", fontSize: "20px" }}>
                  Scearch for an answer or browse help topics to create a ticket
                </h6>
                
                  <input type="text"  placeholder="Eg: how do i activate F&O , why is my order getting rejected" aria-label="Username"
                  style={{
                    height: "60px",
                    width: "95%",
                    border: "none",
                    borderRadius: "4px",
                    padding:"15px"
                    
                  }}
                  />
                  <div className="d-flex gap-2 flex-wrap mt-3">
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Track account opening
                    </a>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Track segment activation
                    </a>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                     Intraday
                    </a>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      margins
                    </a>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Kite user manual
                    </a>
                  </div>

                  

                  
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <h5>Featured</h5>
                <ol style={{ lineHeight: "30px", fontSize: "14px" }}>
                  <li>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Current Takeovers and Delisting- January 2024
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Latest Intraday leverages - MIS & CO
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
