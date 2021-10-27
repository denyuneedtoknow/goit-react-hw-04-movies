import axios from "axios";


// https://api.themoviedb.org/3/trending/movie/week?api_key=9784e4144172a2744cd6e5b22ad77abd

export default function GetMovies() {
    const APIkey = '9784e4144172a2744cd6e5b22ad77abd'
    const APIadress = 'https://api.themoviedb.org/3/'

    return axios
        .get(
            `${APIadress}trending/movie/week?api_key=${APIkey}`
        )
        .then(r => {

            return r.data.results
        });


}
