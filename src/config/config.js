const dev = {
    omdb_api_url: 'https://www.omdbapi.com/?apikey=b9bd48a6',
};

const prod = {
    omdb_api_url: 'https://www.omdbapi.com/?apikey=b9bd48a6',
};

const BASE_URL = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    // Add common config values here
    PAGE_SIZE: 25,
    ...BASE_URL
};
