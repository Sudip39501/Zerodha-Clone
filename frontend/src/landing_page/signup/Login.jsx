import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        // "http://localhost:3000/login",
        "https://zerodha-clone-kuuf.onrender.com/login",
        {
          ...inputValue,
        },
        { credentials: true, validateStatus: () => true },
      );

      console.log(data);
      localStorage.setItem("token", data.data.token);

      const { success, message } = data.data;
      if (success) {
        
        handleSuccess(message);
        setTimeout(() => {
        
          // window.location.href = "http://localhost:5173";
          window.location.href = `https://dashboard-theta-nine-30.vercel.app?token=${data.data.token}`;
          
           
        }, 0);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("yeah baby");
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h3 className="mb-3" style={{ fontWeight: "400" }}>Login Account</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-start p-5 gap-4"
        style={{ fontSize: "20px" }}
      >
        <div className="ms-5 d-flex">
          <label htmlFor="email" style={{ fontWeight: "400" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className="form-control ms-5"
          />
        </div>
        <div className="ms-5 d-flex">
          <label htmlFor="password" style={{ fontWeight: "400" }}>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className="form-control ms-2"
          />
        </div>

        <div className="ms-5 d-flex align-items-center gap-2">

        <button type="submit" className="btn btn-primary">Submit</button>
        <div style={{fontSize:"16px"}}>
          Already have an account?{" "}
          <Link to={"/OpenAccount/signup"}>Signup</Link>
        </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
