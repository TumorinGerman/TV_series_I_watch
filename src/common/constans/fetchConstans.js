const fetchTypes = {
  ratingList: "ratingList",
  ratingData: "ratingData",
  findSeriesByTitle: "findSeriesByTitle",
  seriesInformation: "seriesInformation",
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
  [fetchTypes.findSeriesByTitle]: {
    method: "GET",
    url: "http://www.omdbapi.com/?apikey=7efcea3d&",
    params: {
      t: "",
      type: "series",
    },
  },
  [fetchTypes.seriesInformation]: {
    method: "GET",
    url: "https://mdblist.p.rapidapi.com/",
    params: { i: "" },
    headers: {
      "X-RapidAPI-Key": "cb5fb2d240msh9255a874a270521p1e6d30jsn4eade190b8d3",
      "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
    },
  },
};

const daysNotNeedFetch = {
  [fetchTypes.ratingList]: 20,
  [fetchTypes.ratingData]: 10,
};

export { fetchTypes, fetchOptions, daysNotNeedFetch };
