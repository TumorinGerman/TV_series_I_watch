import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase_config";

const loginUserWithGoogleAuth = async () => {
  const userCred = await signInWithPopup(auth, googleAuthProvider);
  return { result: true, data: userCred.user };
};

export default loginUserWithGoogleAuth;
