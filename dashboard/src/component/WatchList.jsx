import { useState, useContext } from "react";
import { generalDataContex } from "./GeneralContex";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import DoughnoutChart from "./DoughnoutChart";

const WatchList = () => {

  const labels = watchlist.map((array) => array.name);

  const data = 
    {
      labels,
      datasets: [
        {
          label: "Stocks",
          data: watchlist.map((arry)=> arry.price),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    }
  

  return (
    <div className="w-[35%] overflow-y-auto shadow-md ">
      <div className="h-screen">
        <div className="flex justify-between items-center  font-extralight text-sm  border-b border-gray-200 ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="w-7/10 h-12 placeholder-black focus:outline-none ml-5"
          />
          <span className="counts  text-gray-400 mr-5">
            {" "}
            {watchlist.length} / 50
          </span>
        </div>
        <ul className="mt-3">
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
            //  return <p>{stock.name}</p>
          })}
        </ul>
        <br />
        <br /><br />
        <DoughnoutChart   data={data}/>
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div
        className={`flex justify-between items-center ml-8  h-15 border-b border-gray-200 text-sm font-extralight ${showWatchlistActions ? "bg-gray-200" : ""} `}
      >
        <p
          className={`${!stock.isDown ? "text-green-600" : "text-red-600"} ml-2`}
        >
          {stock.name}
        </p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-600" />
          ) : (
            <KeyboardArrowUp className="text-green-600" />
          )}
          <span className="mr-2">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions
          uid={stock.name}
          net={stock.percent}
          avg={stock.price}
          price={stock.price}
        />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, net, avg ,price}) => {
  const { setIsWindowOpen, setSelectStockUID, setNet, setAvg ,setPrice } =
    useContext(generalDataContex);

  const handleBuyClick = () => {
    // console.log(net);
    setSelectStockUID(uid);
    setIsWindowOpen(true);
    setNet(net);
    setAvg(avg);
    setPrice(price);
  };

  return (
    <span className="absolute top-0 left-0 w-full h-full flex justify-end items-center  gap-3  ">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleBuyClick}
      >
        <button className="bg-blue-500 text-white rounded-sm text-sm font-light w-10 h-8 flex justify-center items-center p-2">
          Buy
        </button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="bg-red-500 text-white rounded-sm text-sm font-light w-10 h-8 flex justify-center items-center p-2">
          Sell
        </button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="bg-white text-black rounded-sm text-sm font-light w-10 h-8 flex justify-center items-center p-2 border">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="bg-white text-black rounded-sm text-sm font-light w-10 h-8 flex justify-center items-center p-2 border mr-3">
          <MoreHoriz />
        </button>
      </Tooltip>
    </span>
  );
};
