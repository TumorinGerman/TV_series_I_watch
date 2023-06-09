import axios from "axios";
import dayjs from "dayjs";

import { fetchOptions, daysNotNeedFetch } from "../constans/fetchConstans";

const fetchDataIfNeed = async (fetchType, imdbId) => {
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

const fetchDataById = async (fetchType, imdbId) => {
  const fetchOption = fetchOptions[fetchType];
  if (imdbId) {
    fetchOption.params.seriesid = imdbId;
  }
  const response = await axios.request(fetchOption);
  return response.data;
};

export { fetchDataIfNeed, fetchDataById };
