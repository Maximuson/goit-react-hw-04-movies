import React, { Component, Suspense, lazy } from 'react';
import Film from '../components/Film/Film';
import * as api from '../api/api';
import { Link, Route } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const line = {
  width: '100%',
  borderBottom: '1px solid #000',
};
export default class MovieDetailsPage extends Component {
  state = {
    film: {},
    isLoading: true,
  };
  goBack = () => {
    this.props.history.push('/');
  };
  componentDidMount() {
    this.setState(() => {
      return {
        isLoading: true,
      };
    });
    api
      .getMovieById(this.props.match.params.movieId)
      .then(data => {
        this.setState(() => {
          return {
            film: data.data,
          };
        });
      })
      .catch(() => {
        this.props.history.replace('/movies');
      })
      .finally(() => {
        this.setState(() => {
          return {
            isLoading: false,
          };
        });
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.goBack}>go back</button>
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <Film film={this.state.film} />
        )}
        <div style={line} />
        <div>
          <p>Additional information</p>
          <Link
            to={{
              pathname: `${this.props.match.url}/cast`,
            }}
          >
            Cast
          </Link>
          <br />
          <Link
            to={{
              pathname: `${this.props.match.url}/reviews`,
            }}
          >
            Reviews
          </Link>
        </div>
        <div style={line} />
        <Suspense fallback={<Loader />}>
          <Route
            exact
            path={`${this.props.match.path}/cast`}
            component={Cast}
          />

          <Route
            exact
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </Suspense>
      </div>
    );
  }
}
