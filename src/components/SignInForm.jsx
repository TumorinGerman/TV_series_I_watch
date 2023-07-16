import { React, useState } from "react";
import { ReactComponent as UserIcon } from "../assets/icons/person.svg";
import { ReactComponent as PasswordIcon } from "../assets/icons/password.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";

const SignInForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    name === "email" ? setEmail(value) : setPassword(value);
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
            <div className="user_name">
              <label className="label_name">
                <UserIcon />
              </label>
              <input
                className="input_name"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="user_email">
              <label className="label_email">
                <EmailIcon />
              </label>
              <input
                className="input_email"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="user_password">
              <label className="label_password">
                <PasswordIcon />
              </label>
              <input
                className="input_password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </div>
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
