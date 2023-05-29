const fetchTypes = {
  events: "events",
  event: "event",
  fighters: "fighters",
  fighter: "fighter",
};

const fetchOptions = {
  [fetchTypes.events]: {
    method: "GET",
    url: "https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2023?key=967261edec3148ac9723bc6b62707786",
    headers: {
      "Ocp-Apim-Subscription-Key": "967261edec3148ac9723bc6b62707786",
    },
  },
  [fetchTypes.event]: {
    method: "GET",
    url: "https://api.sportsdata.io/v3/mma/scores/json/Event/301?key=967261edec3148ac9723bc6b62707786",
    headers: {
      "Ocp-Apim-Subscription-Key": "967261edec3148ac9723bc6b62707786",
    },
  },
  [fetchTypes.fighters]: {
    method: "GET",
    url: "https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=967261edec3148ac9723bc6b62707786",
    headers: {
      "Ocp-Apim-Subscription-Key": "967261edec3148ac9723bc6b62707786",
    },
  },
  [fetchTypes.fighter]: {
    method: "GET",
    url: "https://api.sportsdata.io/v3/mma/scores/json/Fighter/140000015?key=967261edec3148ac9723bc6b62707786",
    headers: {
      "Ocp-Apim-Subscription-Key": "967261edec3148ac9723bc6b62707786",
    },
  },
};

const daysNotNeedFetch = {
  [fetchTypes.events]: 7,
  [fetchTypes.event]: 70,
  [fetchTypes.fighters]: 70,
  [fetchTypes.fighter]: 70,
};

export { fetchTypes, fetchOptions, daysNotNeedFetch };
