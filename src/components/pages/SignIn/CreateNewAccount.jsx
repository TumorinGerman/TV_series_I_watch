import { React, useState } from "react";
import { Link } from "react-router-dom";

import CreateNewAccountForm from "./CreateNewAccountForm";
import AlertMessage from "../../common/AlertMessage";

const CreateNewAccount = () => {
  const [isUserCreated, setUserCreated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  return (
    <div className="createNew_container">
      {isUserCreated ? (
        <div className="userCreated">
          <p>The user has been successfully created.</p>
          <Link to="/">Go to the Main page.</Link>
        </div>
      ) : (
        <>
          <AlertMessage
            message={alertMessage}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
          <CreateNewAccountForm
            setUserCreated={setUserCreated}
            setAlertMessage={setAlertMessage}
            setShowAlert={setShowAlert}
          />
        </>
      )}
    </div>
  );
};

export default CreateNewAccount;
