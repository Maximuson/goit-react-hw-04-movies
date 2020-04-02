import React from 'react';
import { Link } from 'react-router-dom';
const TrendingList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, original_name }) => {
        return (
          <li key={id}>
            <Link
              key={id}
              to={{
                pathname: `/movies/${id}`,
              }}
            >
              {title || original_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingList;
