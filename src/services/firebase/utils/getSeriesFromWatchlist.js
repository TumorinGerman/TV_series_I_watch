import { db } from "../firebase_config";
import { doc, getDoc } from "firebase/firestore/lite";

const getSeriesFromWatchlist = async (uid) => {
  const docRef = doc(db, "watchlist", uid);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : {};
};

export default getSeriesFromWatchlist;
