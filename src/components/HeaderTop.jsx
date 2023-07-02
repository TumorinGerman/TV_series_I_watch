// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import FirebaseLogin from "./FirebaseLogin";
// import getUserInformation from "../services/firebase/utils/getUserInformation";
// import { userLogining, addUserInfo } from "../redux/slices/userSlice";

// const HeaderTop = () => {
//   const [showLoginForm, setShowLoginForm] = useState(false);

//   const dispatch = useDispatch();
//   const { isLogined, userInformation } = useSelector((state) => state.userAuth);

//   const handleShowLoginForm = () => setShowLoginForm(true);

//   const handleGetUser = () => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const uid = user.uid;
//         const emailVerified = user.emailVerified;
//         if (emailVerified) {
//           dispatch(userLogining(uid));
//           const userInfo = await getUserInformation(uid);
//           dispatch(addUserInfo(userInfo));
//         }
//       } else {
//         console.log(" User is signed out");
//       }
//     });
//   };

//   useEffect(() => {
//     handleGetUser();
//   }, []);

//   return (
//     <>
//       <Link to="/">
//         <div className="logo-box">
//           <div className="img-box">
//             <img src="./img/logo.jpg" loading="lazy" alt="logo" />
//           </div>
//           <div className="text-box textBox_logo">
//             <p>Gabinet</p>
//             <p>kosmetyczny</p>
//           </div>
//         </div>
//       </Link>
//       <div className="address-box">
//         <div className="img-box">
//           <img src="./img/icons/location_icon.png" alt="location" />
//         </div>
//         <div className="text-box">
//           <p>Poznań,</p>
//           <p>os Kosmonautów 25</p>
//         </div>
//       </div>
//       <div className="timeWork-box">
//         <div className="img-box">
//           <img src="./img/icons/time_icon.png" alt="work_time" />
//         </div>
//         <div className="text-box">
//           <p>Pn-Sb: 10:00-19:00</p>
//           <p>Nd: po uzgodnieniu</p>
//         </div>
//       </div>
//       <div className="social-box">
//         <a href="https://www.facebook.com/">
//           <img src="./img/icons/facebook_icon.png" alt="facebook_icon" />
//         </a>
//         <a href="https://www.instagram.com/">
//           <img src="./img/icons/instagram_icon.png" alt="instagram_icon" />
//         </a>
//         <a href="https://www.tiktok.com/">
//           <img src="./img/icons/tiktok_icon.png" alt="tiktok_icon" />
//         </a>
//       </div>
//       <div className="telefone-box">
//         <div className="img-box">
//           <img src="./img/icons/phone_icon.png" alt="phone_number" />
//         </div>
//         <div className="text-box">
//           <p>+48 555 555 555</p>
//         </div>
//       </div>
//       <div className="login-box">
//         <div className="container_login">
//           {!isLogined ? (
//             <button onClick={handleShowLoginForm}>
//               <span>Login</span>
//             </button>
//           ) : (
//             <Button variant="outline-primary">
//               <Link to="/personal_account">
//                 <span>Moje konto</span>{" "}
//                 <span className="nickName">{userInformation.nickName}</span>
//               </Link>
//             </Button>
//           )}
//         </div>
//         <Link to="/create_new_client">Utwórz nowe konto</Link>
//       </div>
//       {showLoginForm ? (
//         <FirebaseLogin
//           show={showLoginForm}
//           setShowLoginForm={setShowLoginForm}
//         />
//       ) : null}
//     </>
//   );
// };

// export default HeaderTop;
