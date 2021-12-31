import {useContext} from "react";
import STYLES from "./Main.module.scss";
import MovieList from "../MovieList";
import {MovieContext} from "../../context/MovieContext";
import {CircularProgress} from "@material-ui/core";

const Main = () => {
    const { movies, loading } = useContext(MovieContext);
    return (
        <div className={STYLES.pies}>
            {
                movies && <MovieList movies={movies}/>

            }
            {
                loading && <CircularProgress />
            }
        </div>
    );
}

export default Main;
