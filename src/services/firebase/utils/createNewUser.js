import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase_config";

const createNewUser = async (userName, email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentia) => {
      updateProfile(auth.currentUser, {
        displayName: userName,
      });
      const user = userCredentia.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
      return null;
    });
};

export default createNewUser;
