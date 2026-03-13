import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./landing_page/Navber.jsx";
import Footer from "./landing_page/Footer.jsx";
import OpenAccout from "./landing_page/signup/OpenAccount.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Products from "./landing_page/products/ProductPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Support from "./landing_page/support/SupportPage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/signup/Login.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OpenAccount" element={<OpenAccout/>} >
          <Route path="signup"  element={<Signup/>}/>
          <Route path="login" element={<Login/>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
