import React from "react";
import {DashBoard}  from "./DashBoard";
// import {NavBar} from "./NavBar";
// import { Reports } from "./Reports";
import SideBar from "./SideBar"
import "../index.css";
import Header from "./Header";

const Panel = () => {
  return (
    <div className="container">
      <Header />
      {/* <NavBar /> */}
      <SideBar />
      <DashBoard />
      {/* <Reports /> */}
    </div>
  );
};

export default Panel;
