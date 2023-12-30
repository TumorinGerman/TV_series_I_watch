import { db, auth } from "../firebase_config";
import { doc, updateDoc } from "firebase/firestore/lite";

const updateWatchlistPosition = async (currSeason, currEpisode, imdbid) => {
  const userID = auth.currentUser.uid;
  const watchlistRef = doc(db, "watchlist", userID);
  const currentSeasonFieldPath = `${imdbid}.currentSeason`;
  const currentEpisodeFieldPath = `${imdbid}.currentEpisode`;
  await updateDoc(watchlistRef, {
    [currentSeasonFieldPath]: currSeason,
    [currentEpisodeFieldPath]: currEpisode,
    // [imdbid]: {
    //   currSeason: currSeason,
    //   currEpisode: currEpisode,
    // },
  });
};

export default updateWatchlistPosition;
