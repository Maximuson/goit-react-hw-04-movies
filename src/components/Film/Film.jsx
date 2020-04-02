import React from 'react';
import styles from './Film.module.css';
const Film = ({
  film: { backdrop_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <div className={styles.film}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
      </div>
      <div className={styles.ml10}>
        <h2 className={styles.mt10}>
          {title} ({new Date(release_date).getFullYear()})
        </h2>
        <p className={styles.mt10}>user score: {vote_average} </p>
        <h3 className={styles.mt10}>Overview</h3>
        <p className={styles.mt10}>{overview}</p>
        <h3 className={styles.mt10}>Genres</h3>
        {genres.map(({ name }, index) => {
          return (
            <span key={index} className={styles.genreItem}>
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Film;
