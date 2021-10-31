import axios from "axios";

// https://api.themoviedb.org/3/trending/movie/week?api_key=9784e4144172a2744cd6e5b22ad77abd

//   `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`,

const APIkey = "9784e4144172a2744cd6e5b22ad77abd";
const APIadress = "https://api.themoviedb.org/3/";

export async function GetTrandingMovies() {
  return await axios
    .get(`${APIadress}trending/movie/week?api_key=${APIkey}`)
    .then((r) => {
      return r.data.results;
    });
}

export async function GetMovieById(id) {
  return await axios
    .get(`${APIadress}movie/${id}?api_key=${APIkey}`)
    .then((r) => {
      //   console.log(r);
      return r;
    });
}

export async function GetMovieByName(query) {
  return await axios
    .get(`${APIadress}search/movie?api_key=${APIkey}&query=${query}`)
    .then((r) => {
      console.log(r);
      return r;
    });
}
