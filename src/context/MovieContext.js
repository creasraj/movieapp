import React, {createContext, useState} from 'react';
export const MovieContext = createContext(undefined);

const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    return (
        <MovieContext.Provider
            value={{
                setSearch,
                movies,
                page,
                setMovies,
                search,
                setPage,
                loading,
                setLoading,
            }}
        >
            {children}
        </MovieContext.Provider>
    )

}

export default MovieContextProvider;
