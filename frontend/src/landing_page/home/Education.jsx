import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className="row row-cols-lg-2 row-cols-1">
        <div className="col-lg-6 mb-5">
          <img src="media/images/education.svg" alt="education"  style={{width:"75%"}}/>
        </div>
        <div className="col-lg-6 pt-5 mb-5">
          <h2 className='mb-4'>Free and open market education
</h2>
          <p>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.


          </p>
           <a href="#" style={{ textDecoration: "none" }}> 
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className='mt-4'>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.


          </p>
            <a href="#" style={{ textDecoration: "none" }}>
            Tranding Q&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Education
