import React from "react";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <div className="headerLogin">
      <Link to="/loginForm">Sign In</Link>
    </div>
  );
};

export default HeaderLogin;
