const API = "4c42b21a"

export function getMovies(titulo){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${API}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
          })
    };
}

export function getMovieDetail(id){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${API}&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_DETAILS", payload: json });
          })
    }
}

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}
  
export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
}

