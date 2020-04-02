import React, { Component } from 'react';
import styles from './Reviews.module.css';
import * as api from '../../api/api';

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: true,
  };
  componentDidMount() {
    const {
      match: {
        params: { movieId },
      },
    } = this.props;
    api.getMovieReviews(movieId).then(data => {
      this.setState(() => {
        return {
          reviews: data.data.results,
          isLoading: false,
        };
      });
    });
  }

  render() {
    return (
      <ul>
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : this.state.reviews.length > 0 ? (
          this.state.reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <br />
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <div>
            <br />
            Empty
          </div>
        )}
      </ul>
    );
  }
}

export default Reviews;
