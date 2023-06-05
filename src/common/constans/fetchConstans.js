const fetchTypes = {
  events: "events",
};

const fetchOptions = {
  [fetchTypes.events]: {
    method: "GET",
    url: "https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2023?key=967261edec3148ac9723bc6b62707786",
    headers: {
      "Ocp-Apim-Subscription-Key": "967261edec3148ac9723bc6b62707786",
    },
  },
};

const daysNotNeedFetch = {
  [fetchTypes.events]: 7,
};

export { fetchTypes, fetchOptions, daysNotNeedFetch };
