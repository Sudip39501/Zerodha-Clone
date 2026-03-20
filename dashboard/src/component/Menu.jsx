import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "https://zerodha-clone-ten-weld.vercel.app/";
};

  return (
    <div className="w-[65%] flex justify-between border-l border-gray-300  items-center shadow-sm ">
      <img src="logo.png" alt="kite logo" className="h-8 m-5" />

      <div className="menu flex gap-5 items-center">
        <ul className="flex gap-5 text-sm font-extralight">
          <li>
            <Link
              to="/"
              onClick={() => {
                handleMenuClick(0);
              }}
              className={selectedMenu === 0 ? "text-red-500" : "text-black"}
            >
              Dashboard
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/Orders"
              onClick={() => {
                handleMenuClick(1);
              }}
              className={selectedMenu === 1 ? "text-red-500" : "text-black"}
            >
              Orders
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/Holdings"
              onClick={() => {
                handleMenuClick(2);
              }}
              className={selectedMenu === 2 ? "text-red-500" : "text-black"}
            >
              Holdings
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/Positions"
              onClick={() => {
                handleMenuClick(3);
              }}
              className={selectedMenu === 3 ? "text-red-500" : "text-black"}
            >
              Position
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/Funds"
              onClick={() => {
                handleMenuClick(4);
              }}
              className={selectedMenu === 4 ? "text-red-500" : "text-black"}
            >
              Funds
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/Apps"
              onClick={() => {
                handleMenuClick(5);
              }}
              className={selectedMenu === 5 ? "text-red-500" : "text-black"}
            >
              Apps
            </Link>
          </li>
        </ul>
        <div
          className="profile flex justify-center items-center gap-3 mr-4 pl-3 "
          onClick={handleProfileClick}
        >
          <hr className="border-l h-7 border-gray-300" />
          <div className="avater ml-3 bg-cyan-300 text-[12px] h-8 w-8 rounded-full flex items-center justify-center">
            ZU
          </div>

          <div className="Username">UserID</div>
        </div>
        {isProfileDropdownOpen && (
          <div
            className="text-md font-light text-gray hover:text-red-500 w-20 h-8 flex items-center justify-center
             bg-yellow-300 rounded-sm shadow-xl border border-gray-100 px-4
            "
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
