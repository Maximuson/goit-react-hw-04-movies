import React, { Component } from 'react';
import TrendingList from '../components/TrendingList/TrendingList';
import { getMoviesByQuery } from '../api/api';

export default class Movies extends Component {
  state = {
    search: '',
    movies: [],
    isLoading: false,
  };
  handleChange = event => {
    const {
      target: { value, name },
    } = event;
    this.setState({ [name]: value });
    this.props.history.push(`/movies?query=${value}`);
  };
  componentDidMount() {
    if (this.props.location.search) {
      this.setState({ isLoading: true, error: null });
      this.setState(() => {
        return {
          search: this.props.location.search
            .split('?query=')
            .filter(item => item),
        };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ isLoading: true, error: null });
      getMoviesByQuery(this.state.search)
        .then(result => {
          this.setState({ movies: result.data.results, isLoading: false });
        })
        .catch(err => {
          this.setState({ error: err.response.data.errors });
        });
    }
  }

  render() {
    return (
      <div>
        <input name="search" onChange={this.handleChange} type="text" />
        {this.state.error && (
          <div>
            {this.state.error.map(item => (
              <p>{item}</p>
            ))}
          </div>
        )}
        {this.state.isLoading && !this.state.error ? (
          <div>Loading...</div>
        ) : this.state.movies ? (
          <TrendingList movies={this.state.movies} />
        ) : (
          <div>enter movie to search</div>
        )}
      </div>
    );
  }
}
