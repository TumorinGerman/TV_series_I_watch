import {
  fetchDataIfNeed,
  fetchDataById,
} from "../../../../common/utils/fetchData";

const fetchRating = async () => {
  const ratingList = await fetchDataIfNeed("ratingList");
  if (!ratingList || ratingList.length === 0) return;
  const arrayOfImdbIds = ratingList
    .map((path) => path.split("/").at(2))
    .slice(0, 2); //temp
  const arrayOfRatingData = arrayOfImdbIds.map(
    async (imdbId) => await fetchDataById("ratingData", imdbId)
  );
  return arrayOfRatingData;
};

export default fetchRating;
