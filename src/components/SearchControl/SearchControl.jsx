import React, {useContext, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Close';

import STYLES from "./SearchControl.module.scss";
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import moviesService from "../../services/movies";
import {MovieContext} from "../../context/MovieContext";

const SearchControl = () => {
    const [ searchValue, setSearchValue ] = useState('');
    const [ error, setError ] = useState(false);

    const handleSearch = async (context) => {
       if (searchValue !== undefined && searchValue !== '') {
           context.setMovies(undefined);
           context.setLoading(true);
           const result = await moviesService.getMovies(searchValue, 1);
           setError(false);
           context.setMovies(result);
           context.setSearch(searchValue);
           context.setLoading(false);
       } else {
          setError(true);
       }
    }

    const handleClear = (context) => {
        setSearchValue('');
        setError(false);
        context.setMovies(undefined);
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    return <MovieContext.Consumer>
        {
           context => (
               <React.Fragment>
                   <header className={STYLES.header}>
                       <h2>Movie Web App Search</h2>
                   </header>
                   <div className={STYLES.search}>
                       <TextField
                           error={error}
                           label="Search"
                           value={searchValue}
                           onKeyPress={(ev) => {
                               if (ev.key === 'Enter') {
                                   handleSearch(context);
                                   ev.preventDefault();
                               }
                           }}
                           onChange={handleChange}
                           InputProps={{
                               endAdornment: (
                                   <InputAdornment position={"end"}>
                                       <IconButton onClick={()=> handleClear(context)}>
                                           { searchValue === '' && <SearchIcon /> }
                                           { searchValue && <ClearIcon /> }
                                       </IconButton>
                                   </InputAdornment>
                               )
                           }}
                       />

                   </div>
               </React.Fragment>
           )
        }

    </MovieContext.Consumer>
}

export default SearchControl;
