import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";

const loginUserWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return { result: true, data: user };
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      return { result: false, data: errorMessage };
    });
};

export default loginUserWithEmail;
