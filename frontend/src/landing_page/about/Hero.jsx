import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className=" fs-3 text-center">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
        <hr style={{ color: "gray", width: "80%", margin: "100px auto" }} />
      </div>
      <div className="row row-cols-1" style={{ width: "70%", margin: "0 auto" ,fontSize:"16px" ,color:"#424242" ,lineHeight:"30px"}}>
        <div className="col-lg-6 p-3">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier. <br /> <br />
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India. <br /> <br />
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes. <br /> <br />{" "}
          </p>
        </div>
        <div className="col-lg-6  p-3">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.{" "}
            <br /> <br />
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets. <br /> <br />
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies. <br />{" "}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
