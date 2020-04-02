import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/movies/:movieId" component={MovieDetailsPage} />
              <Route path="/movies" component={MoviesPage} />
              <Route path="/" exact component={HomePage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default App;
