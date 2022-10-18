import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index.js";
//import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.favorites.map(
              movie =><li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  {movie.title}
                </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

function mapState(state) {
  return {
    favorites: state.moviesFavourites
  }
}

export default connect(mapState, {removeMovieFavorite})(ConnectedList);
