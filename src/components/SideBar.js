import {menuItems} from "../helpers/menuItems"; 
import MenuItems from "./MenuItems";
import './sidebar.css'

const Navbar = () => {
  return (
    <nav className="nav-area">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

