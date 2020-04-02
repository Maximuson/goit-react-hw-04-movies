import React, { Component } from 'react';
import * as api from '../../api/api';
import styles from './Cast.module.css';
class Cast extends Component {
  state = {
    cast: [],
    isLoading: true,
  };

  componentDidMount() {
    const {
      match: {
        params: { movieId },
      },
    } = this.props;
    api.getMovieCast(movieId).then(data => {
      this.setState(() => {
        return {
          cast: data.data.cast,
          isLoading: false,
        };
      });
    });
  }
  render() {
    return this.state.isLoading ? (
      <div>Loding...</div>
    ) : (
      <ul className={styles.castList}>
        {this.state.cast.map(({ profile_path, name, character, id }) => {
          return (
            <li className={styles.castListItem} key={id}>
              <img
                width="100"
                height="150"
                className={styles.personPhoto}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <br />
              <p>{character}</p>
              <br />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
