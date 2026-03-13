import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Order = () => {
  return (
    <div className="h-40 text-center flex  flex-col gap-6 font-extralight">
      <p className="mt-25 text-gray-400">You haven't placed any orders today</p>

      <Link to={"/"}>
        <Button variant="contained" >Get Started</Button>
      </Link>
    </div>
  );
};

export default Order;
