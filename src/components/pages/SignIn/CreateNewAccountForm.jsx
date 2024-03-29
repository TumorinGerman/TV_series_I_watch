import { React, useContext } from "react";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import createNewUser from "../../../services/firebase/utils/createNewUser";
import UserStateContext from "../../../context";

const CreateNewAccountForm = ({
  setUserCreated,
  setAlertMessage,
  setShowAlert,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setCurrentUser } = useContext(UserStateContext);

  const onSubmit = async ({ userName, email, password }) => {
    const { result, data } = await createNewUser(userName, email, password);
    if (result) {
      setCurrentUser(data);
      setUserCreated(true);
    } else {
      setAlertMessage(data);
      setShowAlert(true);
    }
  };

  return (
    <form
      className="createNew_form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="user_info">
        <div className="user_name">
          <input
            {...register("userName", {
              required: "UserName is required.",
              maxLength: {
                value: 20,
                message: "To long Name",
              },
            })}
            className="input_UserName"
            type="text"
            name="userName"
            id="userName"
            placeholder="Name"
          />
          <ErrorMessage
            errors={errors}
            name="userName"
            render={({ message }) => <p>{message}</p>}
          />
        </div>
        <div className="user_email">
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
          className="submit_newAccount"
          type="submit"
          value="Create account"
        />
      </div>
    </form>
  );
};

export default CreateNewAccountForm;
