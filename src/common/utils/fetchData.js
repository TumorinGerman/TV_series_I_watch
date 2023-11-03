import axios from "axios";
import dayjs from "dayjs";

import { fetchOptions, daysNotNeedFetch } from "../constans/fetchConstans";

const IsFetchingDataNeeds = (fetchType) => {
  const daysLimit = daysNotNeedFetch[fetchType]
    ? daysNotNeedFetch[fetchType]
    : 0;
  let dateOfLastFetching = localStorage.getItem(`dateFetching${fetchType}`);
  const now = dayjs();
  const diffDayFetchingAndNow = now.diff(dateOfLastFetching, "day");
  return !dateOfLastFetching || diffDayFetchingAndNow >= daysLimit
    ? true
    : false;
};

const fetchDataByList = async (fetchType, listImdbIds) => {
  const fetchOption = fetchOptions[fetchType];
  if (listImdbIds) {
    fetchOption.params.idsList = listImdbIds;
  }
  const now = dayjs();
  try {
    if (IsFetchingDataNeeds(fetchType)) {
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
    fetchOption.params.i = imdbId;
  }
  const response = await axios.request(fetchOption);
  return response.data;
};

const fetchSeriesByTitle = async (fetchType, title) => {
  const fetchOption = fetchOptions[fetchType];
  if (title) {
    fetchOption.params.t = title;
  }
  const response = await axios.request(fetchOption);
  return response.data;
};

export {
  fetchDataByList,
  fetchDataById,
  IsFetchingDataNeeds,
  fetchSeriesByTitle,
};
