import { useState, useContext } from "react";
import axios from "axios";
import { generalDataContex } from "./GeneralContex";
import { Link } from "react-router-dom";
const BuyActionWindow = (props) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { setIsWindowOpen, setSelectStockUID } = useContext(generalDataContex);

  const handleBuyClick = async () => {
    console.log(props.net);
    await axios.post(
      "https://zerodha-clone-kuuf.onrender.com/newOrder",
      {
        name: props.uid,
        qty: stockQuantity,
        avg: props.avg,
        price: stockPrice,
        mode: "BUY",
        net: props.net,
        day: props.net,
      },
      {
        withCredentials: true,
      },
    );

    setIsWindowOpen(false);
  };

  const handleCancelClick = () => {
    setIsWindowOpen(false);
  };
  return (
    <div className="fixed w-100 h-60  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 shadow-md">
      <div className="flex justify-around items-start">
        <fieldset className="mt-4">
          <legend>Qty.</legend>
          <input
            type="number"
            name="qty"
            id="qty"
            min="1"
            onChange={(e) => {
              const val = e.target.value;

              // allow backspace (empty)
              if (val === "") return setStockQuantity("");

              // block negative
              if (Number(val) < 1) return;
              setStockQuantity(val);
            }}
            value={stockQuantity}
            className="mt-1 w-full h-10 rounded-md border border-gray-300
    px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
    transition"
          />
        </fieldset>
        <fieldset className="mt-4">
          <legend>Price</legend>
          <input
            type="number"
            name="price"
            id="price"
            step="0.05"
            min="0"
            onChange={(e) => {
              const val = e.target.value;

              setStockPrice(val);
            }}
            value={stockPrice}
            className="mt-1 w-full h-10 rounded-md border border-gray-300
    px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
    transition"
          />
        </fieldset>
      </div>

      <div className="mt-5 ml-3 text-sm font-extralight">
        Margin required ₹{props.price}
      </div>

      <div className="flex justify-around mt-5">
        <Link
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition"
          onClick={handleBuyClick}
        >
          Buy
        </Link>

        <Link
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-center hover:bg-gray-400 transition"
          onClick={handleCancelClick}
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default BuyActionWindow;
