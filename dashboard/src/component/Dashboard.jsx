import React from 'react'
import {Routes, Route} from 'react-router-dom'
import WatchList from './WatchList'
import GeneralContex from './GeneralContex'
import Summary from "./Summary";

import Holdings from './Holdings'
import Order from './Order'
import Positions from './Positions'
import Funds from './Funds'
import Apps from './Apps'


const Dashboard = () => {
  return (
    <div className='flex h-9/10' >
       <GeneralContex>
       <WatchList />
       </GeneralContex>
       <div className='w-[65%] overflow-y-auto'>
        <div >

         <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
         </Routes>
        </div>
       </div>
    </div>
  )
}

export default Dashboard
