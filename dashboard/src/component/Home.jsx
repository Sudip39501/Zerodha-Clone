import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import withAuth from "../Utils/withAuth";

const Home = () => {
  return (
    <div className="h-screen">
      <TopBar />
      <Dashboard />
   

    </div>
  );
};

export default withAuth(Home);
