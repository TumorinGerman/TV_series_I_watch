import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
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

export default loginUser;
