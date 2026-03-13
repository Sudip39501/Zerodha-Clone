import { createContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
export const generalDataContex = createContext({
  // openBuyWindow: (uid) => {},
  // closeBuyWindow: () => {},
});
const GeneralContex = (props) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectStockUID, setSelectStockUID] = useState("");
  const [net ,setNet] =useState("");
  const [avg ,setAvg] =useState();
  const [price ,setPrice] =useState();
  return (
    <generalDataContex.Provider
      value={{
        setIsWindowOpen: setIsWindowOpen,
        setSelectStockUID: setSelectStockUID,
        setNet : setNet,
        setAvg : setAvg,
        setPrice: setPrice,
      }}
    >
      {props.children}
      {isWindowOpen && <BuyActionWindow uid={selectStockUID} net={net} avg={avg} price={price} />}
    </generalDataContex.Provider>
  );
};

export default GeneralContex;
