import { useState, useEffect } from "react";
import axios from "axios";
const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-kuuf.onrender.com/allPositions", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAllPositions(res.data);
      });
  }, []);
  return (
    <div className="font-extralight">
      <h3 className="text-3xl ml-6 mt-10">Positions ({allPositions.length})</h3>

      <table className="w-full table-auto border border-gray-300 text-left mt-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-3 py-2">Product</th>
            <th className="border border-gray-300 px-3 py-2">Instrument</th>
            <th className="border border-gray-300 px-3 py-2">Qty.</th>
            <th className="border border-gray-300 px-3 py-2">Avg.</th>
            <th className="border border-gray-300 px-3 py-2">LTP</th>
            <th className="border border-gray-300 px-3 py-2">P&L</th>
            <th className="border border-gray-300 px-3 py-2">Chg.</th>
          </tr>
        </thead>

        <tbody>
          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-green-600" : "text-red-600";
            const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

            return (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">
                  {stock.product}
                </td>
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
                <td className={`border border-gray-300 px-3 py-2 ${profClass}`}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={`border border-gray-300 px-3 py-2 ${dayClass}`}>
                  {stock.day}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
