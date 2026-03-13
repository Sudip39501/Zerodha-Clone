import React from "react"
import {useNavigate} from "react-router-dom"
const OpenAccout = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5 ">
      <div className="row text-center gap-3 ">
        <h1>Open Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary p-2 mb-5"

          style={{ minWidth: "170px", width: "15%", margin: "auto",fontSize:"20px" }}
          onClick={()=>{
            navigate('/OpenAccount/signup')
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default OpenAccout;
