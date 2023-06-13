const fetchTypes = {
  ratingList: "ratingList",
  ratingData: "ratingData",
  omdbapi: "omdbapi",
};

const fetchOptions = {
  [fetchTypes.ratingList]: {
    method: "GET",
    url: "https://online-movie-database.p.rapidapi.com/title/get-most-popular-tv-shows",
    headers: {
      "X-RapidAPI-Key": "cb5fb2d240msh9255a874a270521p1e6d30jsn4eade190b8d3",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  },
  [fetchTypes.ratingData]: {
    method: "GET",
    url: "http://www.omdbapi.com/?apikey=7efcea3d&",
    params: {
      i: "",
    },
  },
};

const daysNotNeedFetch = {
  [fetchTypes.ratingList]: 30,
  [fetchTypes.ratingData]: 30,
};

export { fetchTypes, fetchOptions, daysNotNeedFetch };
