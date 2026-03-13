import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Funds = () => {
  return (
    <div>
      <div className=" flex justify-end mt-20 font-extralight text-[12px] text-gray-400 gap-2 mr-10">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link c>
          <Button variant="contained" color="secondary">
            Add Funds
          </Button>
        </Link>
        <Link>
          <Button variant="contained" color="primary">
            Withdraw
          </Button>
        </Link>
      </div>

      <div className="mt-15 mx-8 flex items-center">
        <div className="w-1/2 font-extralight text-gray-500 ">
          <p className="text-3xl ">Equity</p>

          <div className="border-gray-500  border mt-5 p-10">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p className="imp">4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p className="imp">3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p className="imp">4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p className="imp">0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p className="imp">0.00</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center text-[14px] text-gray-400 font-extralight gap-4">
          <p>You don't have a commodity account</p>
          <Link>
            <Button variant="contained" color="primary">
              Open Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funds;
