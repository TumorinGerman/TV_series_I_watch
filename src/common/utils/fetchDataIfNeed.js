import axios from "axios";
import dayjs from "dayjs";

import {
  fetchOptions,
  daysNotNeedFetch,
} from "../../common/constans/fetchConstans";

const fetchDataIfNeed = async (fetchType) => {
  const daysLimit = daysNotNeedFetch[fetchType]
    ? daysNotNeedFetch[fetchType]
    : 0;
  const fetchOption = fetchOptions[fetchType];
  try {
    let dateOfLastFetching = localStorage.getItem(`dateFetching${fetchType}`);
    const now = dayjs();
    const diffDayFetchingAndNow = now.diff(dateOfLastFetching, "day");
    if (!dateOfLastFetching || diffDayFetchingAndNow >= daysLimit) {
      const response = await axios.request(fetchOption);
      localStorage.setItem(`${fetchType}`, JSON.stringify(response.data));
      localStorage.setItem(`dateFetching${fetchType}`, now);
    }
    return JSON.parse(localStorage.getItem(`${fetchType}`));
  } catch (error) {
    console.error(error);
  }
};

export default fetchDataIfNeed;
