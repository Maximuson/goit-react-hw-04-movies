import React, { Component } from 'react';
import * as api from '../api/api';
import TrendingList from '../components/TrendingList/TrendingList';

class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    return {
      movies: api.getTrendingMovies().then(result => {
        this.setState(() => {
          return {
            movies: result.data.results,
          };
        });
      }),
    };
  }
  render() {
    return (
      <div>
        <TrendingList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;
