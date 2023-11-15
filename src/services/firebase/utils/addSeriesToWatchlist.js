import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore/lite";

const addSeriesToWatchlist = async (uid, imdbID, seriesInfo) => {
  // const watchlistRef = doc(db, "watchlist", uid);

  await setDoc(
    doc(db, "watchlist", uid),
    {
      [imdbID]: {
        seriesInfo: seriesInfo,
        currentSeason: 1,
        currentEpisode: 1,
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
