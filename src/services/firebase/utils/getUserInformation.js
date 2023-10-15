import { auth } from "../firebase_config";

const getUserInformation = () => {
  const user = auth.currentUser;
  return user !== null ? user.displayName : null;
  // The user object has basic properties such as display name, email, etc.
  /*  const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid; */
};

export default getUserInformation;
