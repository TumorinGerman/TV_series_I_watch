import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import loginUserWithEmail from "../../../services/firebase/utils/loginUserWithEmail";
import loginUserWithGoogleAuth from "../../../services/firebase/utils/loginUserWithGoogleAuth";
import { ReactComponent as PasswordIcon } from "../../../assets/icons/password.svg";
import { ReactComponent as EmailIcon } from "../../../assets/icons/email.svg";
import AlertMessage from "../../common/AlertMessage";
import UserStateContext from "../../../context";

const SignInForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const { setCurrentUser } = useContext(UserStateContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const { result, data } = await loginUserWithEmail(email, password);
    if (result) {
      setCurrentUser(data);
      navigate("/");
    } else {
      setAlertMessage(data);
      setShowAlert(true);
    }
  };

  const handleGoogleSiginButton = async () => {
    const { result, data } = await loginUserWithGoogleAuth();
    if (result) {
      console.log("user", data);
      setCurrentUser(data);
      navigate("/");
    } else {
      setAlertMessage(data);
      setShowAlert(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="signIn_container">
        {showAlert ? (
          <AlertMessage
            message={alertMessage}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
        ) : (
          <>
            <form
              className="signIn_form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="user_info">
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
                <input
                  className="submit_by_name"
                  type="submit"
                  value="Sign in"
                />
              </div>
            </form>
            <input
              className="submit_by_google"
              type="submit"
              value="Sign in with Google"
              onClick={handleGoogleSiginButton}
            />
            <div className="create_new">
              <p>
                <span>or</span>
              </p>
              <Link className="create_new_user" to="/createNewAcc">
                Create a new account
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInForm;
