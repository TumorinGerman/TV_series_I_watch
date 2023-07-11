import React from "react";
import { ReactComponent as UserIcon } from "../assets/icons/person.svg";
import { ReactComponent as PasswordIcon } from "../assets/icons/password.svg";

const SignInForm = () => {
  return (
    <div className="wrapper">
      <div className="signIn_container">
        <form className="signIn_form">
          <div className="user_info">
            <label className="user_name">
              <UserIcon />
            </label>
            <input
              className="user_input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="password">
            <label className="label_password">
              <PasswordIcon />
            </label>
            <input
              className="input_password"
              type="password"
              name="name"
              id="input_password"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
