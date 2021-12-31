import fetch from 'isomorphic-fetch';
import queryUtil from '../utils/query';
import CONFIG  from "../config";

export default {
    getMovies: async (s, page) => {
        const query = queryUtil.getQueryString({
            s,
            page,
            type: 'movie',
        });
        console.log(`${CONFIG.omdb_api_url}${query}`);
        const response = await fetch(
            `${CONFIG.omdb_api_url}${query}`,
            {
                credentials: 'same-origin',
            },
        );
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    },
    getMovieById: async (i) => {
        const query = queryUtil.getQueryString({
            i,
        });

        const response = await fetch(
            `${CONFIG.omdb_api_url}${query}`,
            {
                credentials: 'same-origin',
            },
        );
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }
};
