import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import withAuth from "../Utils/withAuth";

const Home = () => {
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token); // save to localStorage
    window.history.replaceState({}, "", "/"); // ✅ immediately clean URL
  }
}, []);


  return (
    <div className="h-screen">
      <TopBar />
      <Dashboard />
   

    </div>
  );
};

export default withAuth(Home);
