import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div className="movie-detail">
                <p>{this.props.movie.Title}</p>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} alt="poster"/>
                <p>{this.props.movie.Director}</p>
            </div>
        );
    }
}

function mapState(state) {
    return {
        movie: state.movieDetail
    }
}

export default connect(mapState, {getMovieDetail})(Movie);