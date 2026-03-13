import React from "react";

const Team = () => {
  return (
    <div className="container mt-0 mb-5">
      <div className="row row-col-1" style={{width:"80%" , margin:"0 auto"}}>
      <h2 className="text-center mb-5">People</h2>
        <div className="col-lg-5 text-center mb-5 ">
          <img src="media/images/nithinKamath.jpg" alt="CEO" className="rounded-circle m-3" style={{width:"80%"}}/>
          <p style={{fontWeight:"400"}}>Nithin Kamanth</p>
          <p>Founder & CEO</p>
        </div>
        <div className="col-lg-7">
          <p className="mt-5 mb-5" style={{fontSize:"17px" ,fontWeight:"300"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.{" "}
            <br /> <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC). <br /> <br />
            Playing basketball is his zen. <br /> <br />
            Connect on Homepage / TradingQnA / Twitter <br /> <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
