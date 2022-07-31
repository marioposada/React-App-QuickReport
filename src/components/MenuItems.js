import { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();
  let refe = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

//   const onMouseEnter = () => {
//     window.innerWidth > 960 && setDropdown(true);
//   };

//   const onMouseLeave = () => {
//     window.innerWidth > 960 && setDropdown(false);
//   };

const handleClickLink = () => {
 alert("funciona")
 if(refe.current.innerHTML === "Protocolos") {
  alert("Te amooooooooooo")
 }

  // if(e.target.matches(e.target.href("/protocolos")))
  // alert("Viene de protodolos")

}

  return (
    <li
      className="menu-items"
      ref={ref}
    //   onMouseEnter={onMouseEnter}
    //   onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        // <a ref={ref} onClick={handleClickLink} href={`/${items.href}`}>{items.title}</a>
        <a ref={refe} onClick={handleClickLink} href="/#" name={items.title}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
