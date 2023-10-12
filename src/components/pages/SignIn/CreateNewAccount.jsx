import { React, useState } from "react";

import CreateNewAccountForm from "./CreateNewAccountForm";
import { Link } from "react-router-dom";

const CreateNewAccount = () => {
  const [isUserCreated, setUserCreated] = useState(false);

  return (
    <div className="createNew_container">
      {isUserCreated ? (
        <div className="userCreated">
          <p>The user has been successfully created.</p>
          <Link to="/loginForm">Go to the authorization page.</Link>
        </div>
      ) : (
        <CreateNewAccountForm setUserCreated={setUserCreated} />
      )}
    </div>
  );
};

export default CreateNewAccount;
