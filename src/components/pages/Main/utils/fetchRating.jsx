import dayjs from "dayjs";
import {
  fetchDataByList,
  fetchDataById,
  IsFetchingDataNeeds,
} from "../../../../common/utils/fetchData";

const fetchRating = async () => {
  const ratingList = await fetchDataByList("ratingList");
  if (!ratingList || ratingList.length === 0) return;
  const arrayOfImdbIds = ratingList
    .map((path) => path.split("/").at(2))
    .slice(0, 10);

  const now = dayjs();
  try {
    if (IsFetchingDataNeeds("ratingData")) {
      const arrayOfRatingData = await Promise.all(
        arrayOfImdbIds.map((imdbId) =>
          fetchDataById("ratingData", imdbId).then((data) => data)
        )
      );
      localStorage.setItem("ratingData", JSON.stringify(arrayOfRatingData));
      localStorage.setItem("dateFetchingratingData", now);
    }
    return JSON.parse(localStorage.getItem("ratingData"));
  } catch (error) {
    console.error(error);
  }
};

export default fetchRating;
