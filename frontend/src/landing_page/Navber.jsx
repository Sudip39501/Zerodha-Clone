import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="p-2 shadow-sm fixed-top bg-white">
      <nav class="navbar navbar-expand-lg  " >
        <div class="container-fluid d-flex justify-content-around align-items-center">
          <Link class="navbar-brand " to="/" style={{maxWidth:"150px"}}>
            <img src="/media/images/logo.svg" alt="logo" style={{ maxWidth: "80%" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent" style={{paddingLeft:"130px"}}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4 " >
              <li class="nav-item">
                <Link class="nav-link" to="/OpenAccount/login">
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/support">
                 Support
                </Link>
              </li>
             
              <li class="nav-item dropdown">
                <a
                  class="nav-link" //dropdown-toggle
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-bars fs-5"></i>
                </a>
                <ul class="dropdown-menu ">
                  {/* <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                  <p style={{padding:"12px" , color:"balck",backgroundColor:"blue"}} >This section is Currently Under Constructions</p>
                </ul>
              </li>
              
            </ul>
            
        
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
