import React, {useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom'
import movies from "../../services/movies";
import STYLES from "./MovieDetails.module.scss";
import noImage from '../../assets/no-poster-available.webp';
import {Box, CircularProgress, Link, Skeleton, Stack} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MovieDetails = () => {
    const { id } = useParams();
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        const fetchData= async () => {
            const result = await movies.getMovieById(id);
            setSelectedMovie(result);
        }
        fetchData();
    }, [id]);

    const history = useHistory();
    return (
        <React.Fragment>
            <div className={STYLES.back}>
                <Link onClick={() => history.goBack()} to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                    <Box alignItems="center" display="flex">
                        <Box>
                            <ArrowBackIcon />
                        </Box>
                        <Box>
                            Back
                        </Box>
                    </Box>
                </Link>
            </div>
            { selectedMovie && (

                <div className= {STYLES.detailContainer}>
                    <div className={STYLES.poster}>
                        {selectedMovie.Poster === "N/A" ? (
                            <img src={noImage} alt={selectedMovie.Title} />
                        ) : (
                            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                        )}
                    </div>
                    <div className={STYLES.info}>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                <p className="title label-p">{selectedMovie.Title}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                <p className={STYLES.labelP}>{selectedMovie.Plot}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                Released: <p className={STYLES.labelP}>{selectedMovie.Released}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                Runtime: <p className={STYLES.labelP}>{selectedMovie.Runtime}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                Genre: <p className="label-p">{selectedMovie.Genre}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                IMDB Rating: <p className={STYLES.labelP}>{selectedMovie.imdbRating}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                Director(s): <p className={STYLES.labelP}>{selectedMovie.Director}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                Writer(s): <p className={STYLES.labelP}>{selectedMovie.Writer}</p>
                            </div>
                        </div>
                        <div className={STYLES.field}>
                            <div className={STYLES.label}>
                                Language(s): <p className={STYLES.labelP}>{selectedMovie.Language}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {
                !selectedMovie &&
                <Stack spacing={1}>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <CircularProgress />
                </Stack>
            }
        </React.Fragment>
    );
}

export default MovieDetails;
