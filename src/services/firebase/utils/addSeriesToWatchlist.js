import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore/lite";

const addSeriesToWatchlist = async (uid, imdbID, Title, totalSeasons) => {
  // const watchlistRef = doc(db, "watchlist", uid);

  await setDoc(
    doc(db, "watchlist", uid),
    {
      [imdbID]: {
        Title: Title,
        totalSeasons: totalSeasons,
      },
    },
    { merge: true }
  );

  /*   //work with array
  await updateDoc(watchlistRef, {
    usersWatchlist: arrayUnion({
      imdbID: imdbID,
      Title: Title,
      totalSeasons: totalSeasons,
    }),
  }); */
};

export default addSeriesToWatchlist;
