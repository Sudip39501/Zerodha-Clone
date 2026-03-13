import React from "react";

const Footer = () => {
  return (
    <div className="border-top p-1 bg-body-tertiary mt-3">

    <div className="container mt-5 ">
      <div className="row gap-5 gap-lg-0 " style={{fontSize:"14px"}}>
        <div className="col-lg-3 ">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ Width: "50%" ,maxWidth:"150px"}}
          />
          <p className="mt-3" >
            © 2010 - 2025, Zerodha Broking Ltd.
            <br /> All rights reserved.
          </p>
            <div className="d-flex gap-4">
              <a href="#" style={{textDecoration:"none" , color:"gray" ,fontSize:"22px"}}><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" style={{textDecoration:"none" , color:"gray" ,fontSize:"22px"}}><i class="fa-brands fa-square-facebook"></i></a>
              <a href="#" style={{textDecoration:"none" , color:"gray" ,fontSize:"22px"}}><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#" style={{textDecoration:"none" , color:"gray" ,fontSize:"22px"}}><i class="fa-brands fa-instagram"></i></a>
              
        </div>
        <hr  style={{width:"90%"}}/>
        <div className="d-flex gap-4">
           <a href="#" style={{textDecoration:"none" , color:"gray" ,fontSize:"22px"}}><i class="fa-brands fa-youtube"></i></a>
              <a href="#" style={{textDecoration:"none" , color:"gray" ,fontSize:"22px"}}><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" style={{textDecoration:"none" , color:"gray" ,fontSize:"22px"}}><i class="fa-brands fa-telegram"></i></a>
        </div>
      </div>
        <div className="col-lg-3">
          <h5>Account</h5>
          <div style={{listStyle:"none",}} className="d-flex flex-column  mt-4">
            <p ><a href="#" style={{textDecoration:"none",color:"gray"}}>Open demat account</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Minor demat account</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> NRI demat account</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Comodity</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Demetarialisation</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Fund transfer</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> MTF</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Referral Program</a></p>
          </div>
          
        </div>
        
        <div className="col-lg-2">
          <h5>Support</h5>
           <div style={{listStyle:"none",}} className="d-flex flex-column  mt-4">
            <p ><a href="#" style={{textDecoration:"none",color:"gray"}}>Contact us</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Support Portal</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}>How to file a complain?</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Status of your complaints</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Bulletin</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Circuler</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Z-Connect blog</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Downloads</a></p>
          </div>
        </div>
        <div className="col-lg-2">
          <h5>Company</h5>
           <div style={{listStyle:"none",}} className="d-flex flex-column  mt-4">
            <p ><a href="#" style={{textDecoration:"none",color:"gray"}}>About</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}>Philosopht</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Press & media</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Carees</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Zerodha Cares(CSR)</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Zerodha.tech</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Open Source</a></p>
          </div>
        </div>
         <div className="col-lg-2">
          <h5>Quick Links</h5>
           <div style={{listStyle:"none",}} className="d-flex flex-column  mt-4">
            <p ><a href="#" style={{textDecoration:"none",color:"gray"}}>Upcoming IPOs</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Brockerage Charges</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}>Market Holidays</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}>Economic Calender</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Calculator</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Market</a></p>
            <p><a href="#" style={{textDecoration:"none",color:"gray"}}> Sectors</a></p>
          </div>
        </div>
    </div>
    <div className="row mt-5" style={{fontSize:"12px" , color:"gray"}}>
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br />

Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances <br />

Smart Online Dispute Resolution | Grievances Redressal Mechanism <br />

Investments in securities market are subject to market risks; read all the related documents carefully before investing. <br />

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. <br />

India's largest broker based on networth as per NSE. NSE broker factsheet <br />

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here. <br />

*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products. <br />
      </p>
    </div>
    </div>
    </div>
  );
};

export default Footer;
