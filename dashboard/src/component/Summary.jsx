import React from 'react'

const Summary = () => {
  return (
    <div className='h-240'>
      <div className="username h-40 flex flex-col justify-end gap-4">
        <p className='text-3xl ml-6'>Hi, User!</p>
        <hr className='w-[95%] mx-auto border-gray-300'/>
      </div>
      <div className="section h-80  flex flex-col justify-between font-extralight">
        <div className='text-xl font-light ml-6 mt-10'>Equity</div>
        <div className=" ml-6 flex justify-between items-center w-1/2">
          <div className="first w-42 ">
            <h3 className='text-5xl font-extralight'>3.74k</h3>
            <p className='text-sm mt-8 text-gray-400'>Margin available</p>
          </div>
          <hr className='h-[80%] border-[0.5px] border-gray-300'/>

          <div className="second w-40 flex flex-col gap-2 text-sm text-gray-400">
            <p>
              Margins used <span className='text-gray-600'>0</span>{" "}
            </p>
            <p>
              Opening balance <span className='text-gray-600'>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className='w-[95%] mx-auto border-gray-300'/>
      </div>
      <div className="section h-80 flex flex-col justify-between font-extralight">
        <p className='text-xl font-light ml-6 mt-10'>Holding(13)</p>
        <div className=" ml-6 flex justify-between items-center w-1/2">
          <div className="first w-42">
            <h3 className='text-5xl font-extralight  text-green-500'>1.55k <span className='text-sm'>+5.20%</span></h3>
            <p className='text-sm mt-8 text-gray-400'>P&L</p>
          </div>
          <hr className='h-[80%] border-[0.5px] border-gray-300'/>

          <div className="second w-40 flex flex-col gap-2 text-sm text-gray-400">
            <p>
              Current Value <span className='text-gray-600'>31.43K</span>{" "}
            </p>
            <p>
              Investment <span className='text-gray-600'>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className='w-[95%] mx-auto border-gray-300'/>
      </div>
    </div>
  )
}

export default Summary


