import { React, useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { auth } from "../../services/firebase/firebase_config";

import UserStateContext from "../../context";

const ModalWindowLogout = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const { setCurrentUser } = useContext(UserStateContext);

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        // setShow(false);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Modal show={show} size="sm">
      <Modal.Header>
        <Modal.Title>Warning!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to LogOut?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="primary" onClick={handleLogOut}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindowLogout;
