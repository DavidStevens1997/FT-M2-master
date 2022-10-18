
const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  export default function rootReducer(state = initialState, action){
    switch (action.type){
        case "GET MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        
        case "ADD_MOVIE_FAVORITE":
           return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload) //[...state.moviesFavourites,action.payload]
            }
          
        case "REMOVE_MOVIE_FAVORITE":
          return {
              ...state,
              moviesFavourites: state.moviesFavourites.filter(film => film.id !== action.payload)

          }
        
        case "GET_DETAILS":
          return {
              ...state,
              movieDetail: action.payload
          }

          default: return {...state};

    }
  }