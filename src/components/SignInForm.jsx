import { React } from "react";
import { useForm } from "react-hook-form";

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
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   name === "email" ? setEmail(value) : setPassword(value);
  // };

  return (
    <div className="wrapper">
      <div className="signIn_container">
        <form className="signIn_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="user_info">
            <div className="user_name">
              <label className="label_name">
                <UserIcon />
              </label>
              <input
                {...register("name", { required: true, maxLength: 20 })}
                aria-invalid={errors.name ? "true" : "false"}
                className="input_name"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                // value={name}
                // onChange={handleChange}
              />
              {errors.name && <p role="alert">{errors.name?.message}</p>}
            </div>
            <div className="user_email">
              <label className="label_email">
                <EmailIcon />
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                className="input_email"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                // value={email}
                // onChange={handleChange}
              />
              {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>
            <div className="user_password">
              <label className="label_password">
                <PasswordIcon />
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                className="input_password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                // value={password}
                // onChange={handleChange}
              />
              {errors.password && (
                <p role="alert">{errors.password?.message}</p>
              )}
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
