import React from "react";
import {DashBoard}  from "./DashBoard";
import {NavBar} from "./NavBar";
import { Reports } from "./Reports";
import SideBar from "./SideBar"
import "../index.css";

const Panel = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <DashBoard />
      <Reports />
    </>
  );
};

export default Panel;
