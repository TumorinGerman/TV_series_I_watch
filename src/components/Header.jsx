import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderLogin from "./HeaderLogin";

function Header() {
  return (
    <header className="header">
      <div className="header_content">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderLogin />
      </div>
    </header>
  );
}

export default Header;
