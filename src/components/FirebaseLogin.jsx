// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { userLogining } from "../redux/slices/userSlice";
// import { Link } from "react-router-dom";
// import { Button, Form, Modal } from "react-bootstrap";

// import loginUser from "../services/firebase/utils/loginUserWithEmail";

// const FirebaseLogin = ({ show, setShowLoginForm }) => {
//   const dispatch = useDispatch();

//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const changeEmailHandle = (e) => {
//     setValues({
//       ...values,
//       email: e.target.value,
//     });
//   };

//   const changePasswordHandle = (e) => {
//     setValues({
//       ...values,
//       password: e.target.value,
//     });
//   };

//   const handleCloseLoginForm = () => {
//     setShowLoginForm(false);
//   };

//   const handleSendLoginForm = async (e) => {
//     e.preventDefault();
//     const { email, password } = values;
//     const loginedUser = await loginUser(email, password);
//     if (loginedUser) {
//       dispatch(userLogining(loginedUser.uid));
//     }
//     setShowLoginForm(false);
//   };

//   return (
//     <Modal show={show}>
//       <Modal.Header>
//         <Modal.Title>
//           Zaloguj się. <br></br>Lub kliknij „Utwórz nowego klienta” poniżej.
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="name@example.com"
//               value={values.email}
//               onChange={changeEmailHandle}
//               autoFocus
//             />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={values.password}
//               onChange={changePasswordHandle}
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <div className="modal-footer_links">
//           <Link to="/create_new_client" onClick={handleCloseLoginForm}>
//             Utwórz nowego klienta
//           </Link>
//           <Link to="/reset_password_form" onClick={handleCloseLoginForm}>
//             Nie pamiętam hasła
//           </Link>
//         </div>
//         <div className="modal-footer_buttons">
//           <Button variant="secondary" onClick={handleCloseLoginForm}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSendLoginForm}>
//             Send
//           </Button>
//         </div>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default FirebaseLogin;
