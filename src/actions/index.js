export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';

export const fetchMovies = (config) => ({
    type: FETCH_MOVIES,
    ...config
});

export const fetchMoviesSuccess = (payload) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload
});

export const fetchMoviesError = (err) => ({
    type: FETCH_MOVIES_ERROR,
    err
});

export const fetchMovie = (id) => ({
    type: FETCH_MOVIE,
    id
});

export const fetchMovieSuccess = (payload) => ({
    type: FETCH_MOVIE_SUCCESS,
    payload
});

export const fetchMovieError = (err) => ({
    type: FETCH_MOVIE_ERROR,
    err
});