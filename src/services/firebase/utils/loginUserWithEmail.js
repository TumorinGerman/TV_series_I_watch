import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginUser = (email, password) => {
  const auth = getAuth();

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
