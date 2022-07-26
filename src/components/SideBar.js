import React from "react";
import "../helpers/menuItems.js"
import { menuItems } from "../helpers/menuItems.js";
import "./sidebar.css";
import MenuItems from "./MenuItems";



export const SideBar = () => {
  return <div className="sidebar">
    SideBar
    <ul className="menus">

    </ul>
    {menuItems.map((menu,index)=> {
        return <MenuItems items={menu} key={index} />;
    })}
    
    </div>;
};
