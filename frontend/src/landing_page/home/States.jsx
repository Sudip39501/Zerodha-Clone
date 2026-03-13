import React from "react";

const States = () => {
  return (
    <div className="container mt-5 ">
      <div className="row  row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
        <div className="col-lg-5 p-5">
          <h2>Trust with confidence</h2>
          <h3 className="mt-5">Customer-first always</h3>
          <p className="mt-3">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="mt-5">No spam or gimmicks</h3>
          <p className="mt-3">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h3 className="mt-5">The Zerodha universe</h3>
          <p className="mt-3">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs
          </p>
          <h3 className="mt-5">Do better with money</h3>
          <p className="mt-3">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-7 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            style={{ width: "100%" }}
          />
          <div className="row ">
            <div className="col-6 d-flex flex-row-reverse">
              <a href="#" style={{textDecoration:"none"}}> Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="col-6">
              <a href="#" style={{textDecoration:"none"}}>Try kite demo &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
        <img
          src="media/images/pressLogos.png"
          alt="logo"
          className="mb-5 "
          style={{ width: "60%", margin: "10px auto" }}
        />
      </div>
    </div>
//     <div className="container">
//   <div className="row row-cols-1 row-cols-lg-2">

//     <div className="col p-5">
//       <h2>Trust with confidence</h2>

//       <h3 className="mt-5">Customer-first always</h3>
//       <p className="mt-3">
//         That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
//         of equity investments, making us India’s largest broker.
//       </p>

//       <h3 className="mt-5">No spam or gimmicks</h3>
//       <p className="mt-3">
//         No gimmicks, spam, or annoying push notifications.
//       </p>

//       <h3 className="mt-5">The Zerodha universe</h3>
//       <p className="mt-3">
//         A complete ecosystem tailored to your needs.
//       </p>

//       <h3 className="mt-5">Do better with money</h3>
//       <p className="mt-3">
//         Tools that help you make smarter financial decisions.
//       </p>
//     </div>

//     <div className="col p-5">
//       <img
//         src="media/images/ecosystem.png"
//         alt="ecosystem"
//         className="img-fluid"
//       />

//       <div className="row mt-4">
//         <div className="col-6 d-flex justify-content-end">
//           <a href="#" className="text-decoration-none">
//             Explore our products <i className="fa-solid fa-arrow-right-long"></i>
//           </a>
//         </div>

//         <div className="col-6">
//           <a href="#" className="text-decoration-none">
//             Try kite demo <i className="fa-solid fa-arrow-right-long"></i>
//           </a>
//         </div>
//       </div>
//     </div>

//     <div className="col-12 text-center my-5">
//       <img
//         src="media/images/pressLogos.png"
//         alt="logo"
//         className="img-fluid"
//         style={{ maxWidth: "60%" }}
//       />
//     </div>

//   </div>
// </div>

  );
};

export default States;
