import { React, useContext } from "react";
import { Link } from "react-router-dom";
import UserStateContext from "../context";

const HeaderLogin = () => {
  const { currentUser } = useContext(UserStateContext);

  return (
    <div className="headerLogin">
      {!currentUser ? (
        <Link to="/loginForm">Sign In</Link>
      ) : (
        <Link to="/logOut">LogOut</Link>
      )}
    </div>
  );
};

export default HeaderLogin;
