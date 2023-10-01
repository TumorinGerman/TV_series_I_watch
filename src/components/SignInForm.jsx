import { React } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { ReactComponent as UserIcon } from "../assets/icons/person.svg";
import { ReactComponent as PasswordIcon } from "../assets/icons/password.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="wrapper">
      <div className="signIn_container">
        <form
          className="signIn_form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="user_info">
            <div className="user_name">
              <label className="label_name">
                <UserIcon />
              </label>
              <input
                {...register("UserName", {
                  required: "UserName is required.",
                  maxLength: {
                    value: 20,
                    message: "To long Name",
                  },
                })}
                className="input_UserName"
                type="text"
                name="UserName"
                id="UserName"
                placeholder="Name"
              />
              <ErrorMessage
                errors={errors}
                name="UserName"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="user_email">
              <label className="label_email">
                <EmailIcon />
              </label>
              <input
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Not correct Email format.",
                  },
                })}
                className="input_email"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="user_password">
              <label className="label_password">
                <PasswordIcon />
              </label>
              <input
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must exceed 6 characters",
                  },
                })}
                className="input_password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <p>{message}</p>}
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
        <div className="create_new">
          <p>
            <span>or</span>
          </p>
          <input
            className="create_new_user"
            type="submit"
            value="Create a new account"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
