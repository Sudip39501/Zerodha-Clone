import React from "react";

const Brokerage = () => {
  return (
    <div className="container mt-5">
      <hr className="mb-5 " />

      <div className="row ">
        <div className="col-lg-8 my-5 ">
          <h5 className="text-center mb-4 text-primary" >Brokerage calculator</h5>
          <ul style={{lineHeight:"30px" ,fontSize:"14px"}}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of
              &#8377;50 +GST per order.
            </li>
            <li>
              Digital contract notes will be sent via e-mail.
            </li>
            <li>
              Physical copies of contract notes, if required, shall be &#8377;20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account(non-PIS) ,0.5% or &#8377;100 per executed order for equity (whichever is lower).
            </li>
            <li>  For NRI account(PIS) ,0.5% 0r &#8377;200 per executed order for equity (whichever is lower).</li>
            <li>
              If the account is in debit balance , any order placed will be  charged &#8377;40 per executed order instead  of &#8377; 20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 my-5 text-primary">
          <h5>List of charges</h5>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
