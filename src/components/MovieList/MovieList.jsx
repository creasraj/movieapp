import React, {useState} from "react";
import InfiniteLoader from 'react-infinite-loader';
import MovieCard from "../MovieCard";
import moviesService from "../../services/movies";
import {MovieContext} from "../../context/MovieContext";
import {CircularProgress} from "@mui/material";

export const MovieList = ({movies}) => {

    const [loading, setLoading] = useState(false);

    const fetchMoreData = async (context) => {
      if (context.page * 10 < movies.totalResults) {
          setLoading(true);
          const data = await moviesService.getMovies(context.search, context.page + 1);
          if (movies !== undefined && movies.Search !== undefined) {
              data.Search.map((mov) => {
                  movies.Search.push(mov);
              })
              context.setMovies(undefined);
              context.setMovies(movies);
              context.setPage(context.page + 1);
          }
          setLoading(false);
      }
    }

    if (movies === undefined || (movies.Error && movies.Error !== ''))
        return <div>
            { movies.Error }
        </div>

    return <MovieContext.Consumer>
        {
            context => (
        <React.Fragment>

                { movies && movies.Search.map(movie => {
                     return <>
                        <MovieCard key={movie.imdbID} movie={movie}/>
                        </>
                    }
                )}
            { context.page * 10 < movies.totalResults &&
               <div style={{ opacity: 0 }}>
                <InfiniteLoader onVisited={ () => fetchMoreData(context) } />
               </div>     }
            { loading && <CircularProgress /> }
        </React.Fragment>
    )}
    </MovieContext.Consumer>
}
