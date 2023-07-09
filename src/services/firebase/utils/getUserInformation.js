import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../firebase_config";

const getUserInformation = async (docId) => {
  const docRef = doc(db, "users", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export default getUserInformation;
