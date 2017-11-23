export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const searchRequest = (query) => ({
    type: SEARCH_REQUEST,
    query
});

export const searchSuccess = (payload) => ({
    type: SEARCH_SUCCESS,
    payload
});

export const searchFailure = (err) => ({
    type: SEARCH_FAILURE,
    err
});