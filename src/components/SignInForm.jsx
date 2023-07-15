import { React, useState } from "react";
import { ReactComponent as UserIcon } from "../assets/icons/person.svg";
import { ReactComponent as PasswordIcon } from "../assets/icons/password.svg";

const SignInForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    // const name = target.name;
    setUser(value);
  };

  // handleSubmit(event) {
  //   alert('Submit');
  //   event.preventDefault();
  // }

  return (
    <div className="wrapper">
      <div className="signIn_container">
        <form className="signIn_form">
          <div className="user_info">
            <label className="user_name">
              <UserIcon />
            </label>
            <input
              className="input_user"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={user}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label className="label_password">
              <PasswordIcon />
            </label>
            <input
              className="input_password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              // onChange={handleChange}
            />
          </div>
          <div>
            <input className="submit_by_name" type="submit" value="Sign in" />
            <input
              className="submit_by_google"
              type="submit"
              value="Sign in with Google"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
