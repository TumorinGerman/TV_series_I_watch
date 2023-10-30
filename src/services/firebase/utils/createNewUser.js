import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase_config";

const createNewUser = async (userName, email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentia) => {
      updateProfile(auth.currentUser, {
        displayName: userName,
      });
      const user = userCredentia.user;
      return { result: true, data: user };
    })
    .catch((error) => {
      const errorMessage = error.message;
      return { result: false, data: errorMessage };
    });
};

export default createNewUser;
