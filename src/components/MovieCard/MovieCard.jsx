import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

import STYLES from './MovieCard.module.scss';
import noImage from '../../assets/no-poster-available.webp';

export const MovieCard = ( { movie }) => {
    const poster =
        movie.Poster === "N/A" ? noImage : movie.Poster;
    return (

              <div className={STYLES.cardgrid}>
                <div className={STYLES.title}>
                    {movie.Title} - {movie.Year}</div>
                  <Link to={`/movie/${movie.imdbID}`}>
                      <LazyLoad>
                        <img src={poster} />
                      </LazyLoad>
                  </Link>
              </div>

   )
}
