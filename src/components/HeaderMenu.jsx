import React, { useState } from "react";
import { Link } from "react-router-dom";

import { menuItems } from "../common/constans/interfaceConstans";

const HeaderMenu = () => {
  const [menuActiveState, setMenuActiveState] = useState(true);
  const changeMenuActiveState = () => {
    setMenuActiveState(!menuActiveState);
  };
  return (
    <div className="header_menu_control">
      <button className="header_menu_button" onClick={changeMenuActiveState}>
        <span className="menu_title">Menu</span>
        <img
          className="menu_picture"
          src="/img/icons/unfold_more.png"
          alt="menu icon"
        />
      </button>
      <div className={`header_menu_items ${menuActiveState ? "isHidden" : ""}`}>
        <nav>
          <ul className="header_submenu">
            {menuItems.map(({ id, nameOfsection, path }) => {
              return (
                <li key={id}>
                  <Link to={path} onClick={() => changeMenuActiveState(false)}>
                    {nameOfsection}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
