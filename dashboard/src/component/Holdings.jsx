import { useState, useEffect } from "react";
import axios from "axios";
// import { holdings } from "../data/data";
import VerticalGraph from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-kuuf.onrender.com/allHoldings", {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setAllHoldings(res.data);
      });
  }, []);

  const labels = allHoldings.map((arry) => arry.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Name",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="">
        <table className="w-full table-auto border border-gray-300 text-left mt-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Instrument</th>
              <th className="border border-gray-300 px-3 py-2">Qty.</th>
              <th className="border border-gray-300 px-3 py-2">Avg. cost</th>
              <th className="border border-gray-300 px-3 py-2">LTP</th>
              <th className="border border-gray-300 px-3 py-2">Cur. val</th>
              <th className="border border-gray-300 px-3 py-2">P&L</th>
              <th className="border border-gray-300 px-3 py-2"> Net Chg.</th>
              <th className="border border-gray-300 px-3 py-2"> Day Chg.</th>
            </tr>
          </thead>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-green-600" : "text-red-600";
            const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";
            return (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">
                  {stock.name}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {stock.qty}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {stock.avg.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {stock.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {curValue.toFixed(2)}
                </td>
                <td className={`border border-gray-300 px-3 py-2 ${profClass}`}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={`border border-gray-300 px-3 py-2 ${profClass}`}>
                  {stock.net}
                </td>
                <td className={`border border-gray-300 px-3 py-2 ${dayClass}`}>
                  {stock.day}
                </td>
              </tr>
            );
          })}
        </table>

        <br />
        <br />
        <div className="p-7">

        <VerticalGraph data={data} />
        </div>
      </div>
    </>
  );
};

export default Holdings;
