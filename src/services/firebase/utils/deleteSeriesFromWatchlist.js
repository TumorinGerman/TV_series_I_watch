import { db, auth } from "../firebase_config";
import { doc, updateDoc, deleteField } from "firebase/firestore/lite";

const deleteSeriesFromWatchlist = async (imdbid) => {
  const userID = auth.currentUser.uid;
  const watchlistRef = doc(db, "watchlist", userID);
  await updateDoc(watchlistRef, {
    [imdbid]: deleteField(),
  });
};

export default deleteSeriesFromWatchlist;
