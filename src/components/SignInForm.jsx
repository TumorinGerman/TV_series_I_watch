import React from "react";
import Icons from "./Icons/Icons";

const SignInForm = () => {
  return (
    <div className="wrapper">
      <div className="signIn_container">
        <form className="signIn_form">
          <div className="user_info">
            <label className="user_name" for="name">
              <Icons
                name="user"
                // color="#fff"
                // size="32"
                className="icon_user"
              />
            </label>
            <input
              class="user_input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="password">
            <label class="label_password" for="input_password">
              <img
                className="login_img"
                src="/img/icons/password.svg"
                alt="user password"
              ></img>
            </label>
            <input
              class="input_password"
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
